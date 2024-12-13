import React from "react";
import NavBar from "../../components/NavBar/page";
import { Translation } from "../../utils/contants/page";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <NavBar newsContent={Translation} />
      </header>
      <section>{children}</section>
    </>
  );
}
