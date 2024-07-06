"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import CustomBtn from "@/components/customBtn/CustomBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Write A Blog</h2>
      <div className={styles.add}>
        <input type="text" placeholder="Title" className={styles.input} />
        <div className={styles.plus} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            width={24}
            height={24}
            alt="img"
            className={styles.img}
          />
        </div>
        {open && (
          <div className={styles.addBtnLabels}>
            <div className={styles.uploadImg}>
              <Image
                src="/image.png"
                width={24}
                height={24}
                alt="img"
                className={styles.addImg}
                title="upload Image"
              />
            </div>
            <div className={styles.uploadVideo}>
              <Image
                src="/video.png"
                width={24}
                height={24}
                alt="img"
                className={styles.addImg}
                title="upload Video"
              />
            </div>
            <div className={styles.uploadLinks}>
              <Image
                src="/external.png"
                width={24}
                height={24}
                alt="img"
                className={styles.addImg}
                title="upload External"
              />
            </div>
          </div>
        )}
        <div className={styles.textAreaContainer}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className={styles.textArea}
          />
          <CustomBtn className={styles.btn}>Submit</CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
