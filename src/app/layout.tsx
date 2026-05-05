import { notoSans } from "@/style/font";
import "@/style/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Fakebuck",
    default: "Fakebuck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${notoSans.className}`}>{children}</body>
    </html>
  );
}
