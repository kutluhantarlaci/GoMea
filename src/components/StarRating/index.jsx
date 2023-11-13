import styles from "./starRating.module.css";
import { Icon } from "@/components";
export default function StarRating({ style }) {
  return (
    <div className={styles.container}>
      <Icon style={style} name="Star" />
      <Icon style={style} name="Star" />
      <Icon style={style} name="Star" />
      <Icon style={style} name="Star" />
      <Icon style={style} name="Star" />
    </div>
  );
}
