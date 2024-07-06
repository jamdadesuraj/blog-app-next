import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Style</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Fashion</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Food</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Travel</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Culture</p>
        </Link>
        <Link
          href="/category/style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="category"
            width={32}
            height={32}
            className={styles.img}
          />
          <p>Coding</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
