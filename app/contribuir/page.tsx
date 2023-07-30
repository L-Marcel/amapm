import { Panel } from "@/components/Panel";
import { Query } from "@/services/query";
import style from "./index.module.scss";

export default async function Form() {
  const panels = await Query.getPanels();
  const memberPanel = await Query.getMemberPanel();

  return (
    <main className={style.container}>
      { memberPanel && <Panel {...memberPanel}/> }
      {
        panels.map(({ id, ...rest }) => {
          return (
            <Panel
              key={id}
              {...rest}
            />
          );
        })
      }
    </main>
  );
}