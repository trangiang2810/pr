import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTwitter, BiLogoGmail } from 'react-icons/bi'
import { AiTwotoneHeart, AiFillBook } from 'react-icons/ai'
import { FaHome, FaSignInAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header_top}>
          <h2 className={styles.title}>Cuisine 'RUM'</h2>
          <ul className={styles.social_icon}>
            <li>
              <a href="/">
                <BiLogoFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <BiLogoInstagramAlt />
              </a>
            </li>
            <li>
              <a href="/">
                <BiLogoTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <BiLogoGmail />
              </a>
            </li>
          </ul>
        </div>
        <nav className={styles.header_main}>
          <ul className={styles.item}>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/course-registration">Course registration</Link>
            </li>
          </ul>
          <div className={styles.logo}>
            <Link href="/">
              <Image priority src="/logo.png" alt="logo" width={100} height={89} />
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/favorites" className={styles.cart_icon}>
              <span>favories</span>
              <AiTwotoneHeart />
            </Link>
          </div>
        </nav>
      </header>
      <div className={styles.headphone}>
        <Link href="/" className={styles.item}>
          <FaHome />
          <span>Home</span>
        </Link>
        <Link href="/details/52978" className={styles.item}>
          <AiFillBook />
          <span>Recipe</span>
        </Link>
        <Link href="/favorites" className={styles.item}>
          <AiTwotoneHeart />
          <span>Favourite</span>
        </Link>
        <Link href="/course-registration" className={styles.item}>
          <FaSignInAlt />
          <span>Register</span>
        </Link>
      </div>
    </>
  )
}

export default Header
