const SearchShoppingItem = ({ onSearchItems, onSetSearchItems }) => {
  const searchInputChangeHandler = (event) => {
    onSetSearchItems(event.target.value);
  };
  return (
    <>
      <div className="mt-3">
        <form
          className="row align-items-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="col-auto">
            <label htmlFor="searchItem" className="form-label col-form-label">
              Search Here: &nbsp;&nbsp;&nbsp;
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="Search Item"
              id="searchItem"
              className="form-control"
              value={onSearchItems}
              onChange={searchInputChangeHandler}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchShoppingItem;
