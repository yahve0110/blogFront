import React, { ReactNode } from 'react'
import styles from "./ContentBlock.module.scss"

const ContentBlock = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.contentContainer}>
        {children}
    </div>

  )
}

export default ContentBlock