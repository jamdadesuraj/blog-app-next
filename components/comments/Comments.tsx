import Link from "next/link";
import styles from "./comments.module.css";
import CustomBtn from "../customBtn/CustomBtn";
import Image from "next/image";

const Comments = () => {
  // temporary
  const status = "notAuthenticated";
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status === "notAuthenticated" ? (
        <>
          <div className={styles.input}>
            <textarea
              name=""
              id=""
              placeholder="Write a comment..."
              className={styles.textArea}
            />
            <CustomBtn className="">Add</CustomBtn>
          </div>

          <div className={styles.comments}>
            <div className={styles.user}>
              <Image
                src="/coding.png"
                alt="img"
                width={50}
                height={50}
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={styles.name}>Suraj Jamdade</p>
                <p className={styles.date}>07/07/2024</p>
              </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, inventore!
            </p>
          </div>
          <div className={styles.comments}>
            <div className={styles.user}>
              <Image
                src="/coding.png"
                alt="img"
                width={50}
                height={50}
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={styles.name}>Suraj Jamdade</p>
                <p className={styles.date}>07/07/2024</p>
              </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, inventore!
            </p>
          </div>
          <div className={styles.comments}>
            <div className={styles.user}>
              <Image
                src="/coding.png"
                alt="img"
                width={50}
                height={50}
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={styles.name}>Suraj Jamdade</p>
                <p className={styles.date}>07/07/2024</p>
              </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, inventore!
            </p>
          </div>
          <div className={styles.comments}>
            <div className={styles.user}>
              <Image
                src="/coding.png"
                alt="img"
                width={50}
                height={50}
                className={styles.img}
              />
              <div className={styles.info}>
                <p className={styles.name}>Suraj Jamdade</p>
                <p className={styles.date}>07/07/2024</p>
              </div>
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, inventore!
            </p>
          </div>
        </>
      ) : (
        <Link href="/login" className={styles.noComments}>
          Login to Write comments
        </Link>
      )}
    </div>
  );
};

export default Comments;
