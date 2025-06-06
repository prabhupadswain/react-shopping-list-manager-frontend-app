import { useState } from "react";
import ShoppingListItem from "./ShoppingListItem";

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

  const checkBoxChangeHandler = (id) => {
    const newShoppingItems = shoppingItems.map((shoppingItem) => {
      return shoppingItem.id === id
        ? { ...shoppingItem, checked: !shoppingItem.checked }
        : shoppingItem;
    });

    setShoppingItems(newShoppingItems);
    localStorage.setItem("shopping-list", JSON.stringify(newShoppingItems));
  };

  const deleteShoppingItemHandler = (id) => {
    const newShoppingItems = shoppingItems.filter(
      (shoppingItem) => shoppingItem.id !== id
    );
    setShoppingItems(newShoppingItems);
    localStorage.setItem("shopping-list", JSON.stringify(newShoppingItems));
  };

  return (
    <main>
      <ul className="list-group list-group-flush mt-4">
        {shoppingItems.map((shoppingItem) => {
          return (
            <ShoppingListItem
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              onCheckBoxChange={checkBoxChangeHandler}
              onDeleteShoppingItem={deleteShoppingItemHandler}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
