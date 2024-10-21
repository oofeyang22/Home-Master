import styles from "./check.module.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface CheckProps {
  color?: string; // Optional prop for customizable color
  size?: number; // Optional prop for customizable size
}

export const Check = ({ color = "blue", size = 26 }: CheckProps) => {
  return (
    <div className={styles.icon}>
      <div className={styles.work}>
        <IoMdCheckmarkCircleOutline color={color} size={size} />
      </div>
    </div>
  );
};