import { Post } from "@/components/Post";
import style from "./index.module.scss";

export default function News() {
  return (
    <main className={style.container}>
      <section>
        <Post content={{}}/>
        <Post content={{}}/>
        <Post content={{}}/>
        <Post content={{}}/>
        <Post content={{}}/>
      </section>
    </main>
  );
};