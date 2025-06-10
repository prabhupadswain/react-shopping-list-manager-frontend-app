const DisplayCount = ({ count }) => {
  return (
    <>
      <p className={`mt-4 text-bg-dark p-3 text-center`}>
        {count} Shopping {count === 1 ? "Item" : "Items"} to buy
      </p>
    </>
  );
};

export default DisplayCount;
