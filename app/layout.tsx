import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SomeLink } from "./SomeLink";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="bg-gray-200 border-2 border-black m-2 p-5">
          <h1>Root Layout</h1>
          <div className="flex justify-start gap-4 items-start mt-5">
            <SomeLink href="/">Home</SomeLink>
            <SomeLink href="/nested/first">First</SomeLink>
            <SomeLink href="/nested/second">Second</SomeLink>
            <SomeLink href="/nested/third">third(dynamic)</SomeLink>
            <SomeLink href="/nested/third/fourthSomeLink">
              third/fourth(dynamic multiple params)
            </SomeLink>
            <SomeLink href="/nested">/(dynamic 0 params)</SomeLink>
          </div>
          <div className="flex justify-start gap-4 items-start my-5">
            <SomeLink href="/something/usesApi">usesApi</SomeLink>
            <SomeLink href="/something/usesApiClient">usesApi client</SomeLink>
            <SomeLink href="/something/usesServerAction">
              usesServerAction
            </SomeLink>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
