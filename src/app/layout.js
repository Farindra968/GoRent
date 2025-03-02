import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Morent",
  description: "Get rent car at affordable price ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-secondary-200antialiased`}>
        <Header />
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
