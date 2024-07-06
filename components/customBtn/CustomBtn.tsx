import style from "./customBtn.module.css";
import { customBtnProps } from "@/types";

const CustomBtn = ({ className, type, children }: customBtnProps) => {
  return (
    <button className={`${className} ${style.btn}`} type={type}>
      {children}
    </button>
  );
};

export default CustomBtn;
