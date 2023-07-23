import { Post } from "@/components/Post";
import style from "./index.module.scss";

export default function News() {
  return (
    <main className={style.container}>
      <section>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </section>
    </main>
  );
};