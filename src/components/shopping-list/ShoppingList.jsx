import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ data, setShoppingItems }) => {
  const checkBoxChangeHandler = (id) => {
    const newShoppingItems = data.map((shoppingItem) => {
      return shoppingItem.id === id
        ? { ...shoppingItem, checked: !shoppingItem.checked }
        : shoppingItem;
    });

    setShoppingItems(newShoppingItems);
    localStorage.setItem("shopping-list", JSON.stringify(newShoppingItems));
  };

  const deleteShoppingItemHandler = (id) => {
    const newShoppingItems = data.filter(
      (shoppingItem) => shoppingItem.id !== id
    );
    setShoppingItems(newShoppingItems);
    localStorage.setItem("shopping-list", JSON.stringify(newShoppingItems));
  };

  return (
    <>
      <ul className="list-group list-group-flush mt-4">
        {data.map((shoppingItem) => {
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
    </>
  );
};

export default ShoppingList;
