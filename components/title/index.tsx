import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className={styles.link}>
      <p>
        <Link href="/">Home</Link>
        {' >'} {text}
      </p>
    </div>
  )
}

export default Title
