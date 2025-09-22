import "../styles/globals.css";

export const metadata = {
  title: "Nationalium",
  description: "Jogo de bandeiras para adivinhar países",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
