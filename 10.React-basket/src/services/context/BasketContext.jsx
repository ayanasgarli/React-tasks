import React, { createContext, useState, useEffect } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(() => {
    const storageBasket = localStorage.getItem("basketItems");
    return storageBasket ? JSON.parse(storageBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (item) => {
    const existingItemIndex = basketItems.findIndex(
      (basketItem) => basketItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedBasket = [...basketItems];
      updatedBasket[existingItemIndex].quantity += 1;
      setBasketItems(updatedBasket);
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setBasketItems(
      basketItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBasketItems(
      basketItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setBasketItems(basketItems.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addToBasket,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
