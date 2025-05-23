import type { Metadata } from "next";
import styles from "./global.module.css";
import { Auth0Provider } from "@auth0/nextjs-auth0";
import Header from "@/app/components/header/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Auth0Provider>
        <body className={styles.body}>
          <Header />
          <Providers>{children}</Providers>
        </body>
      </Auth0Provider>
    </html>
  );
}
