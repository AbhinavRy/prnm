import React,{useState} from 'react';
import styles from './App.module.scss'
import axios from 'axios'



const App = () => {
  const categories = ['education','employment','finance']
  const [cats, setCats] = useState({})
  \
  
  // const card = data.map(item => {
    //   return(
      //         <div className={styles.cardContainer}>
      //           <h2>Category</h2>
      //           <div className={styles.schemeContainer}>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //             <h3 className={styles.cardTitle}>Employment Scheme 1</h3>
      //           </div>
      //         </div>
      //   )
      // })
  
  return (
    <div className={styles.App}>
      <div className={styles.navBar}>
        <h1>Info Hub</h1>
        <ul className={styles.navList}>
          <li>Categories</li>
          <li>About Us</li>
          <li>Contact Us</li>
          </ul>
      </div>
      <div className={styles.appBody}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Never miss any opportunity!</h1>
          <h3 className={styles.subHeading}>Always stay updated</h3>
          <p className={styles.desc}>Join us to never miss any updates. Get updated regularly and know every government schemes, scholarships, job opportunities, notices and many more things you should be aware of.</p>
          
          <div className={styles.cardsContainer}>
            {cats.element}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
