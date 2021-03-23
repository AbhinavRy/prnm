import React from 'react'
import styles from './CategoriesNav.module.scss'

const CategoriesNav = () => {
    return (
        <div className={styles.categoriesNav}>
            <ul className={styles.list}>
                <li>Financial</li>
                <li>Education</li>
                <li>Employment</li>
            </ul>
        </div>
    )
}

export default CategoriesNav
