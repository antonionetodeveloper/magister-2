import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "@/style/global.css";

import LayoutType from "@/types/layout";

export const metadata: Metadata = {
  title: "Magister",
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
