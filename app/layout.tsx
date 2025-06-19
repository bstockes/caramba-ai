import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Caramba</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans p-4">
        <nav className="flex justify-around py-4 border-b border-gray-200 mb-4">
          <a href="/">Home</a>
          <a href="/ask-carly">Ask Carly</a>
          <a href="/my-garage">My Garage</a>
          <a href="/my-info">My Info</a>
          <a href="/account">Account</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}