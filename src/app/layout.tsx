import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { TRPCClientProvider } from "@/trpc/client";

export const metadata: Metadata = {
  title: "JUST SAP IT! Interview Task",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TRPCClientProvider>{children}</TRPCClientProvider>
      </body>
    </html>
  );
}
