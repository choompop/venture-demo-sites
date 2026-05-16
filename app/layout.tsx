import './globals.css';
export const metadata = { title: 'Kyburz Venture Demo Lab', description: 'Demo websites and operating infrastructure concepts for John Kyburz ventures.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
