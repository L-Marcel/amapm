import { MemberAvatar } from "@/components/MemberAvatar";
import { Generator } from "@/services/generator";
import style from "./index.module.scss";

export type BoardMember = {
  id: number;
  image: string;
  name: string;
  office: string;
};

const id = Generator.generateId;
const boardMembers: BoardMember[] = [
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Milton",
    office: "Presidente"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Jacilena",
    office: "Vice Presidente"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Daniel",
    office: "1º Secretário"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.jpeg`,
    name: "Beatriz",
    office: "2º Secretária "
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Paulo",
    office: "1º Tesoureiro"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Nivaldo",
    office: "2º Tesoureiro"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Nilton",
    office: "Presidente do Cons. Fiscal"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Germano",
    office: "2º Conselheiro do Cons. Fiscal"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.jpeg`,
    name: "Jussier",
    office: "3º Conselheiro do Cons. Fiscal"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Rosendo",
    office: "Suplente do Cons. Fiscal"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.jpeg`,
    name: "Régia",
    office: "Suplente do Cons. Fiscal"
  },
  {
    id: id(),
    image: `/assets/membro-${id(true)}.png`,
    name: "Severino",
    office: "Suplente do Cons. Fiscal"
  }
];

export default function Board() {
  return (
    <main className={style.container}>
      <section>
        <ul>
          {
            boardMembers.map((member) => {
              const { id, name, office } = member;

              return (
                <li key={id}>
                  <MemberAvatar member={member}/>
                  <p><span>{name}</span> | {office}</p>
                </li>
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}