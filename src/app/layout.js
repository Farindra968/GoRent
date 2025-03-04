import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MainProvider from "@/layout/MainProvider";

export const metadata = {
  title: "Morent",
  description: "Get rent car at affordable price ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-secondary-200antialiased bg-secondary-100`}>
        <MainProvider>
          <main>
            {" "}
            <Header />
            {children}
            <Footer />
          </main>
        </MainProvider>
      </body>
    </html>
  );
}
