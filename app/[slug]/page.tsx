import Image from "next/image";
import style from "./singlBlogPage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.textContainer}>
          <h2 className={style.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, ipsum!
          </h2>
          <div className={style.user}>
            <Image
              src="/style.png"
              width={50}
              height={50}
              alt="user"
              className={style.userImg}
            />
            <div className={style.info}>
              <p>Suraj Jamdade</p>
              <p>07/07/2024</p>
            </div>
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image src="/coding.png" fill alt="user" className={style.img} />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.text}>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            magnam optio provident, itaque minima maxime quasi. Excepturi amet
            repudiandae, voluptas, eum in culpa ducimus nemo asperiores ipsa
            necessitatibus sunt voluptatibus explicabo. Ullam laborum cum magni,
            optio eveniet numquam doloremque asperiores voluptate sint minus
            delectus. Sed reprehenderit dolores iste mollitia repudiandae
            excepturi earum tempore! Velit saepe ea alias et excepturi modi est
            officiis, accusantium deleniti id cumque facilis sint eos doloribus
            voluptatem similique hic cupiditate, tenetur ducimus, dolorum magnam
            doloremque molestias culpa. Est minima quasi officiis quas magnam.
            Ducimus, est! Dolor nostrum animi quas! Eveniet, ipsum excepturi?
            Ducimus molestiae molestias asperiores dolorem voluptates soluta
            eius autem repellendus quia dolorum, debitis laboriosam
            exercitationem adipisci architecto blanditiis vel? Quas assumenda id
            facilis suscipit nam iusto? Sint officia officiis nam neque
            laboriosam facilis porro veniam animi! Laudantium voluptatibus
            voluptate debitis, saepe eligendi necessitatibus commodi nemo
            nostrum hic! Consequatur nam corporis tempora alias at ab voluptatum
            nulla a in optio! Eveniet, consectetur laboriosam, similique dolorem
            laudantium nulla illo magnam assumenda eius eaque necessitatibus
            harum vero consequuntur, iusto voluptate eos asperiores voluptas
            quaerat? Distinctio quia sed quam accusamus laboriosam magni eius
            cupiditate, esse fuga odit incidunt, excepturi nulla deleniti unde
            doloribus eos perferendis inventore, tempora suscipit sint voluptas!
            Excepturi vero omnis alias obcaecati enim reiciendis illo. Voluptas
            maiores expedita optio rem, iste necessitatibus voluptatem earum
            possimus quasi adipisci dolorem totam inventore quidem illum
            incidunt non est. Deleniti iusto a dolores, laborum dolorem harum
            distinctio, veniam laboriosam, exercitationem asperiores adipisci
            eos. Maiores recusandae sit autem tempora, nisi aliquam voluptatibus
            assumenda, consequatur itaque illo at nemo laboriosam perferendis,
            veniam quia sint nihil sed dolorum eos consectetur maxime hic
            accusamus repellat. Incidunt, nisi perspiciatis, voluptas dolore ea
            aliquid magni veritatis illo sed hic ab praesentium. Sed qui est
            maiores, adipisci excepturi, laboriosam nulla voluptates neque
            tempore inventore tenetur, voluptatibus pariatur? Nihil deleniti
            pariatur, recusandae ex voluptatibus vero libero doloremque unde
            culpa ipsa nostrum iure odit veritatis dolores dignissimos doloribus
            rerum, itaque tempore architecto est quod corporis, ipsum
            necessitatibus! Sapiente ad modi possimus libero! Perferendis
            recusandae alias quae ipsa reiciendis earum accusamus. Corporis
            dignissimos harum perspiciatis, vel distinctio adipisci? Architecto,
            ipsa? Labore beatae inventore officiis nihil. Alias molestias qui
            magnam aliquid velit explicabo veritatis, illum reprehenderit?
            Suscipit sit nulla adipisci, nihil magni eos eligendi! Voluptas
            neque placeat voluptate quo velit sunt dolorum suscipit ab
            exercitationem, at distinctio laborum ad sit obcaecati veritatis
            illo rerum veniam doloremque ipsum vitae recusandae ratione nobis
            error voluptatum? Sequi minus consequatur hic recusandae quo quis
            placeat voluptatibus inventore veritatis libero tenetur ducimus illo
            sunt ab assumenda temporibus ipsum ut odio, cum minima? Libero minus
            nam porro aliquid molestiae adipisci similique, dolores soluta sed
            odit praesentium enim iste sit voluptatibus perspiciatis vel
            aspernatur tempora laudantium fuga recusandae consequuntur! Placeat
            odio provident et optio fuga dolorem praesentium iste incidunt
            voluptatum! Porro, distinctio deleniti voluptate suscipit sapiente
            officiis iusto sit perferendis facilis cumque, beatae earum, eos
            debitis. Nam hic excepturi eos explicabo aut laudantium deleniti,
            magni, aspernatur ullam sint nesciunt veritatis repellat quis!
            Architecto odio cumque dicta eos?
          </p>
          <Comments />
        </div>
        <div className={style.sideBlog}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
