
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CategoryNavbar from "../components/CategoryNavbar";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <CategoryNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Outlet />
    </>
  );
};

export default MainLayout;
