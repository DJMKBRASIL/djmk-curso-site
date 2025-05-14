import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Importar o Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Arte do Set - Curso de DJ com DJ MK",
  description: "Aprenda a arte da mixagem, dos loops e da presença de palco direto com DJ MK. Transforme sua paixão em profissão!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-primary text-lightText pt-20`}> {/* Adicionado pt-20 para compensar altura do header fixo */}
        <Header /> {/* Adicionar o Header aqui */}
        {children}
      </body>
    </html>
  );
}

