import "./globals.css";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="tr">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
};
export default RootLayout;
