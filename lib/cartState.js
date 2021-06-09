import { createContext, useContext, useEffect, useRef, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    return setCartOpen(!cartOpen);
  }

  function closeCart() {
    return setCartOpen(false);
  }

  function openCart() {
    return setCartOpen(true);
  }

  // ----Ref to Detect Click Outside the Element----

  const nodeRef = useRef(null);

  const handleClickOutside = (event) => {
    // if modal is open and click is outside modal, close it
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  // ----RETURN STATE-PROVIDER----

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        nodeRef,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { CartStateProvider, useCart };
