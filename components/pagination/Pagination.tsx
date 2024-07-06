import CustomBtn from "../customBtn/CustomBtn";
import styles from "./pagniation.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <CustomBtn className="">Previous</CustomBtn>
      <CustomBtn className="">Next</CustomBtn>
    </div>
  );
};

export default Pagination;
