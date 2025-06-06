import { useState } from "react";
import ShoppingList from "./ShoppingList";
import EmptyMessage from "../error/EmptyMessage";

const Content = () => {
  const [shoppingItems, setShoppingItems] = useState([
    {
      id: 1,
      checked: true,
      item: " I need to upgrade to a newer laptop",
    },
    {
      id: 2,
      checked: false,
      item: "Buy some PC laptop accessories & peripherals",
    },
    {
      id: 3,
      checked: false,
      item: "Buy a new thermal paste for PC desktop",
    },
    {
      id: 4,
      checked: true,
      item: "Buy a SSD for the old laptop",
    },
  ]);

  return (
    <main>
      {shoppingItems.length === 0 && <EmptyMessage />}
      {shoppingItems.length >= 1 && (
        <ShoppingList
          data={shoppingItems}
          setShoppingItems={setShoppingItems}
        />
      )}
    </main>
  );
};

export default Content;
