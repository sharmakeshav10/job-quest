import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* header */}
      <Header />
      <main className="flex-1 w-[90%] mx-auto">
        <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
