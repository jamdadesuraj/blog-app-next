import Image from "next/image";
import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import CustomBtn from "../customBtn/CustomBtn";
import Link from "next/link";

const CardList = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/food.png"
              alt="banner-img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.date}>
              7/07/2022 - <span className={styles.category}>culture</span>
            </p>
            <h2 className={styles.titleContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nesciunt.
            </h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              voluptas deleniti illo alias modi ullam sapiente, aut dignissimos
              quod minus, libero ipsum vero odit, dolores consequatur omnis
              velit consectetur animi....
            </p>
            <Link href="/" className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/style.png"
              alt="banner-img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.date}>
              7/07/2022 - <span className={styles.category}>culture</span>
            </p>
            <h2 className={styles.titleContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nesciunt.
            </h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              voluptas deleniti illo alias modi ullam sapiente, aut dignissimos
              quod minus, libero ipsum vero odit, dolores consequatur omnis
              velit consectetur animi....
            </p>
            <Link href="/" className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/travel.png"
              alt="banner-img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.date}>
              7/07/2022 - <span className={styles.category}>culture</span>
            </p>
            <h2 className={styles.titleContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nesciunt.
            </h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              voluptas deleniti illo alias modi ullam sapiente, aut dignissimos
              quod minus, libero ipsum vero odit, dolores consequatur omnis
              velit consectetur animi....
            </p>
            <Link href="/" className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src="/fashion.png"
              alt="banner-img"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.date}>
              7/07/2022 - <span className={styles.category}>culture</span>
            </p>
            <h2 className={styles.titleContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              nesciunt.
            </h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              voluptas deleniti illo alias modi ullam sapiente, aut dignissimos
              quod minus, libero ipsum vero odit, dolores consequatur omnis
              velit consectetur animi....
            </p>
            <Link href="/" className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default CardList;
