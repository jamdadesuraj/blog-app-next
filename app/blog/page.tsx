import CardList from "@/components/cardList/CardList";
import style from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Blog Page</h1>
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
