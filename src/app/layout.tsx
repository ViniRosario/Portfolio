import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Vini's GlitchFolio",
  description: 'An artistic digital zine and portfolio of Vini Rosário',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">{children}</body>
    </html>
  );
}
