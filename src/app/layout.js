"use client";

import Head from "next/head";
import React from "react";
import "./globals.css";
import Navbar from "./component/navbar"
import Footer from "./component/footer";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Form from "./component/form";


export const handleFormContext = React.createContext()



export default function RootLayout({ children }) {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
    console.log(handleOpenForm)
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  
  return (
    <html lang="en">
      <Head>
        <title>investment and finance</title>
      </Head>
      <body className="flex flex-col justify-center w-full items-center relative" >
        <Navbar handleOpenForm={handleOpenForm} />
        {/*open form button */}
        <button className="fixed top-[50%] z-40 right-0 mr-3 rounded-full transition-colors duration-500 ease-in bg-[#e87722] w-12 h-12 hover:bg-[#001d3b] md:text-4xl md:w-20 md:h-20" onClick={handleOpenForm}>
          <FaPlay className="mx-auto text-white border-white" />
        </button>
        {openForm && (
        <Form handleCloseForm={handleCloseForm} openForm={openForm} />
        )}
        <handleFormContext.Provider value={handleOpenForm}>
            {children}
        </handleFormContext.Provider>
        <Footer />
      </body>
    </html>
  );
}
