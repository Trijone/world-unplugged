import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Unplugged",
  description: "International Acoustic Busking Festival Amsterdam"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}