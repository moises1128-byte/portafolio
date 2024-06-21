import "../styles/globals.scss";
import { Lato } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../assets/theme/page";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Portafolio",
  description: "This is my Portafolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={lato.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
