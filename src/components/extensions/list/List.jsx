import Item from "./Item";
import styles from "./list.module.scss";

function List({ data, setData }) {
  return (
    <div className={styles.listContainer}>
      {data.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </div>
  );
}

export default List;
