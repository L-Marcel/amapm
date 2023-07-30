"use client";

import { BoardMember } from "@/app/diretoria/page";
import Image from "next/image";
import style from "./index.module.scss";
import { useState } from "react";

interface MemberAvatarProps {
  member: BoardMember;
}

export function MemberAvatar({
  member
}: MemberAvatarProps) {
  const { image, name, office } = member;
  const [show, setShow] = useState(true);

  return (
    <div className={style.container}>
      {
        show && <Image
          src={image}
          alt={`Avatar de ${name} | ${office}`}
          width={100}
          height={100}
          onError={() => {
            setShow(false);
          }}
        />
      }
      <p>{name.toUpperCase().slice(0,2)}</p>
    </div>
  );
}