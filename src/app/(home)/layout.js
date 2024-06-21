import React from "react";
import NavBar from "../../components/NavBar/page";
export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>{children}</section>
    </>
  );
}
