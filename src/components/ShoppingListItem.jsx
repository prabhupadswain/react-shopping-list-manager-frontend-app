const ShoppingListItem = ({ shoppingItem }) => {
  return (
    <>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div>
          <input
            type="checkbox"
            className="form-check-input ms-2"
            checked={shoppingItem.checked}
          />
          <label className="ms-4 mb-0">{shoppingItem.item}</label>
        </div>

        <button className="btn btn-danger btn-sm">DELETE</button>
      </li>
    </>
  );
};

export default ShoppingListItem;
