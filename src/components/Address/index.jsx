import styles from "./address.module.css";
import Icon from "@/components/Icons";
import CustomButton from "@/components/CustomButton";
export default function Address() {
  const color = "yellow";
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <h3>Your Address</h3>
        <div className={styles.addressInfo}>
          <div className={styles.addressLocation}>
            <Icon name="Location" style={{ fill: `var(--${color})` }} />
            <span>Elm Street,23</span>
          </div>
          <CustomButton
            text={"Change"}
            size={"small"}
            classname={"changeBtn"}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <CustomButton
          text={"Add Note"}
          size={"small"}
          classname={"addNoteBtn"}
        />
      </div>
    </div>
  );
}
