import { createContext, ReactNode, useContext, useState } from "react";

type selectedMenu = string;

interface NavContextType {
  selectedNav: selectedMenu | string;
  changeSelectedNav: (nav: selectedMenu) => void;
}

const NavbarContext = createContext<NavContextType | "">("");

// eslint-disable-next-line react-refresh/only-export-components
export function useNavbar() {
  const context = useContext(NavbarContext);

  if (context === "") {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}

interface NavbarProviderProps {
  children: ReactNode;
}

export function NavbarProvider({ children }: NavbarProviderProps) {
  const [selectedNav, setSelectedNav] = useState<selectedMenu>("");

  const changeSelectedNav = (nav: selectedMenu) => {
    setSelectedNav(nav);
  };

  return (
    <NavbarContext.Provider value={{ selectedNav, changeSelectedNav }}>
      {children}
    </NavbarContext.Provider>
  );
}
