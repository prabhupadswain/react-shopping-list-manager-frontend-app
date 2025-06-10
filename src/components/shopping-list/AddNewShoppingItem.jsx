const AddNewShoppingItem = ({
  onSubmitHandler,
  onAddNewItem,
  onSetAddNewItem,
}) => {
  const addNewItemChangeHandler = (event) => {
    onSetAddNewItem(event.target.value);
  };

  return (
    <>
      <div className="mt-4">
        <form className="row align-items-center" onSubmit={onSubmitHandler}>
          <div className="col-auto">
            <label htmlFor="addNewItem" className="form-label col-form-label">
              Add New Item:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="Add New Item"
              id="addNewItem"
              className="form-control"
              required
              value={onAddNewItem}
              onChange={addNewItemChangeHandler}
            ></input>
          </div>
          <div className="col-auto">
            <button className="btn btn-success">Add New Item</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewShoppingItem;
