import React from 'react'
import styles from "./Loader.module.scss"


const Loader = () => {
  return (
  <div className={styles.container}>
      <div className={styles.ldsEllipsis}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div>
  </div>
  )
}

export default Loader