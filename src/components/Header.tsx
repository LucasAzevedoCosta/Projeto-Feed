import styles from "./Header.module.css";

import Logo from "../assets/Logo.jpg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo da Empresa" />
    </header>
  );
}
