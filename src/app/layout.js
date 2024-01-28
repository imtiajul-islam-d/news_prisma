import NextTopLoader from "nextjs-toploader";
import "@/assets/style/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#E60000"
          height={2}
          speed={200}
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}