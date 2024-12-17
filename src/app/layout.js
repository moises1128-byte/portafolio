import "../styles/globals.scss";
import { Lato } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../assets/theme/page";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Portafolio Moises Perez",
  description:
    "Dedicated Frontend Developer with 3+ years of experience an with a passion for crafting intuitive and visually appealing user experiences. Proficient in Tailwind, Javascript, Next.js, React, React Native, Expo Go, BitBucket ,Github, Notion, Figma, Postman, Axios, TypeScript, FireBase, Api integration, HTML, CSS, JavaScript. Committed to staying up-to-date with the latest web technologies and design trends. Aspiring to elevate my skills and contribute to innovative projects as a Senior Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={lato.className}>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </ThemeProvider>
    </html>
  );
}
