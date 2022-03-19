import React from 'react';
import styles from "../styles/Home.module.css"

function Footer(props) {
  return (
    <footer className={styles.footer}>
      Powered by{' '}
      <span className={styles.logo}>
        <img src="/TK.svg" alt="TK Logo" width={72} height={16} />
      </span>
  </footer>
  )
}

export default Footer;
