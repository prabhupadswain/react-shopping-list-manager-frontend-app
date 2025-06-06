import styles from "./EmptyMessage.module.css";

const EmptyMessage = () => {
  return (
    <big className={`bg-warning-subtle ${styles.emptyMessage}`}>
      There are no shopping items left to purchase. You can add new items to
      this list further.
    </big>
  );
};

export default EmptyMessage;
