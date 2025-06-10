import { useState } from "react";
import ShoppingList from "./ShoppingList";
import EmptyMessage from "../error/EmptyMessage";
import DisplayCount from "../error/DisplayCount";
import AddNewShoppingItem from "./AddNewShoppingItem";
import SearchShoppingItem from "./SearchShoppingItems";

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

  const [addNewItem, setAddNewItem] = useState("");
  const [searchItems, setSearchItems] = useState("");

  const addNewShoppingItems = (item) => {
    const id = shoppingItems.length
      ? shoppingItems[shoppingItems.length - 1].id + 1
      : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...shoppingItems, myNewItem];
    setShoppingItems(listItems);
    localStorage.setItem("shopping-list", JSON.stringify(listItems));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!addNewItem) return;
    addNewShoppingItems(addNewItem);
    setAddNewItem("");
  };
  return (
    <main>
      <AddNewShoppingItem
        onSubmitHandler={submitHandler}
        onAddNewItem={addNewItem}
        onSetAddNewItem={setAddNewItem}
      />
      <SearchShoppingItem
        onSearchItems={searchItems}
        onSetSearchItems={setSearchItems}
      />
      {shoppingItems.length === 0 && <EmptyMessage />}
      {shoppingItems.length >= 1 && (
        <ShoppingList
          data={shoppingItems.filter((shoppingItem) =>
            shoppingItem.item.toLowerCase().includes(searchItems.toLowerCase())
          )}
          setShoppingItems={setShoppingItems}
        />
      )}
      <DisplayCount count={shoppingItems.length} />
    </main>
  );
};

export default Content;
