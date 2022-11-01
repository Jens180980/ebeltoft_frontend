//Import react hooks
import { createContext, useState } from "react";

// Create instance of content for storing data
const MenuContent = createContext();

// Create wrapper for defining access to data
const MenuWrapper = ({ children }) => {
  // Define data
  const [menuState, setMenuState] = useState(false);

  // Send data to app
  return (
    <MenuContent.Provider
      value={{
        isMenuOpen: menuState,
        toggleMenu: () => setMenuState(!menuState),
        stateChangeHandler: (newState) => setMenuState(newState.isOpen),
      }}
    >
      {children}
    </MenuContent.Provider>
  );
};

// Defining exports
export { MenuContent, MenuWrapper };
