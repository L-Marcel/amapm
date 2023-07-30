import style from "./index.module.scss";

export function Footer() {
  return (
    <footer className={style.container}>
      <p>Sede Provisória</p>
      <p>Centro de Ciências da Saúde — Departamento de Medicina Clínica</p> 
      <address>Avenida General Gustavo Cordeiro de Farias, s/n — Petrópolis — CEP: 59012-300</address>
      <p>Natal/RN — Brasil — 🕿 (84) 3342-9706 — Celular: (84) 99193-6207</p> 
      <p><a href="https://www.instagram.com/amapraiadomeio/" target="_blank">Instagram</a> | <a href="https://m.facebook.com/AmaPmFocodeLuz/" target="_blank">Facebook</a></p>
    </footer>
  );
}