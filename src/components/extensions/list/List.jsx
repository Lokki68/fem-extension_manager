import Item from "./Item";
import styles from "./list.module.scss";

function List({ data }) {
  return (
    <div className={styles.listContainer}>
      {data.map((item, index) => (
        <Item id={item.id} key={index} />
      ))}
    </div>
  );
}

export default List;
