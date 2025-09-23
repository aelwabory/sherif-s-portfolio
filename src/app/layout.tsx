import "./globals.css";

export const metadata = {
  title: "Sherif El Wabory — Portfolio",
  description: "Head of Development — 31 years of mega-project experience",
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
