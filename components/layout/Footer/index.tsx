import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
import { AiFillHome, AiOutlineMail, AiFillPhone, AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.items}>
          <h3>Contact</h3>
          <ul>
            <li>
              <AiFillHome />
              Hai Ba Trung, Ha Noi
            </li>
            <li>
              <AiFillPhone />
              Hotline: 0987.654.321 - 0123.456.789
            </li>
            <li>
              <AiOutlineMail />
              Email: acb@gmail.com
            </li>
            <li>
              <AiOutlineFacebook />
              Facebook:
              <a href="https://www.facebook.com/profile.php?id=100021358124881">trangiang</a>
            </li>
          </ul>
        </div>
        <div className={styles.items}>
          <h3>category</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Meals</Link>
            </li>
            <li>
              <Link href="/news">COURSE REGISTRATION</Link>
            </li>
          </ul>
        </div>
        <div className={styles.items}>
          <h3>FANPAGE</h3>
          <ul></ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <strong>Copyright 2023 @</strong>
      </div>
    </footer>
  )
}

export default Footer
