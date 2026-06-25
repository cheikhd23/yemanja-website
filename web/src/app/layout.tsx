import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yemanjā — Food, Drinks, Music & Art by the sea",
  description:
    "Yemanjā Dakar, une expérience culinaire entre terre et mer par Sweet Coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
