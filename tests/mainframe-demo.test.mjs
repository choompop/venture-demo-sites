import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  MAINFRAME_SITE_SECTIONS,
  MAINFRAME_DASHBOARD_MODULES,
  MAINFRAME_LAUNCH_GUARDRAILS,
  getMainframeDemoSnapshot,
} from '../lib/mainframe-demo.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ventureRouteSource = () => readFileSync(join(__dirname, '../app/ventures/[slug]/page.tsx'), 'utf8');

test('Mainframe public site is structured for a launch-safe mainframestud.io landing page', () => {
  assert.deepEqual(
    MAINFRAME_SITE_SECTIONS.map((section) => section.id),
    ['hero', 'operating-system', 'proof', 'offer', 'guardrails'],
  );

  for (const section of MAINFRAME_SITE_SECTIONS) {
    assert.ok(section.title.length >= 8, `${section.id} needs a useful title`);
    assert.ok(section.copy.length >= 80, `${section.id} needs substantial copy`);
    assert.match(section.copy, /demo|draft|approval|launch-safe|operator|workflow|system/i);
  }
});

test('Mainframe demo dashboard covers every requested operating area', () => {
  const requiredAreas = ['crm', 'bookings', 'content', 'drive', 'team', 'finance', 'agents', 'approvals'];

  assert.deepEqual(
    MAINFRAME_DASHBOARD_MODULES.map((module) => module.id),
    requiredAreas,
  );

  for (const module of MAINFRAME_DASHBOARD_MODULES) {
    assert.ok(module.metric, `${module.id} needs a demo metric`);
    assert.ok(module.status, `${module.id} needs a launch status`);
    assert.ok(Array.isArray(module.items) && module.items.length >= 3, `${module.id} needs realistic demo rows`);
  }
});

test('Mainframe launch guardrails prevent overclaims and unsafe automation', () => {
  assert.ok(MAINFRAME_LAUNCH_GUARDRAILS.length >= 4);
  assert.ok(MAINFRAME_LAUNCH_GUARDRAILS.some((guardrail) => /approval/i.test(guardrail)));
  assert.ok(MAINFRAME_LAUNCH_GUARDRAILS.some((guardrail) => /demo data/i.test(guardrail)));
  assert.ok(MAINFRAME_LAUNCH_GUARDRAILS.every((guardrail) => !/guaranteed revenue|autonomous spend|live charge/i.test(guardrail)));
});

test('Mainframe route wires the tested public site and dashboard snapshot into the page', () => {
  const source = ventureRouteSource();

  assert.match(source, /getMainframeDemoSnapshot/);
  assert.match(source, /MAINFRAME_DASHBOARD_MODULES|dashboardModules/);
  assert.match(source, /crm|bookings|content|drive|team|finance|agents|approvals/i);
  assert.match(source, /launch-safe|human-gated|approval/i);
});

test('Mainframe snapshot can power the Next route without missing required fields', () => {
  const snapshot = getMainframeDemoSnapshot();

  assert.equal(snapshot.domain, 'mainframestud.io');
  assert.equal(snapshot.siteSections.length, 5);
  assert.equal(snapshot.dashboardModules.length, 8);
  assert.equal(snapshot.guardrails.length, MAINFRAME_LAUNCH_GUARDRAILS.length);
  assert.match(snapshot.heroLine, /business runs/i);
});
