import { Poppins } from "next/font/google";
import "../globals.css";
import * as Section from "@/sections";



export const metadata = {
  title: "4Es Africa",
  description:
    "4E School Africa is an innovation by corestream Nigeria (an enterprise software development company). This is aim at training African youths with world most required Soft-skills We provide this by Partnering with Government, Organizations and Individuals interested in inspiring the next generation of top Software Engineers. We are committed to helping as many young Africans kickstart a career in technology by providing them with access to quality technical education by real world experts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" >
        <Section.Header  />
        {children}
        <Section.Footer />
      </body>
    </html>
  );
}
