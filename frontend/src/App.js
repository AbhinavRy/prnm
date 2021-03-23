import React from 'react';
import styles from './App.module.scss'
import axios from 'axios'


const App = () => {
  const catgories = ['education', 'employment', 'finance']
  
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
      const card = catgories.map(element => {
        <div>
    
      <h1>{element}</h1>
    <div>
      <p>
      {
        axios.get('http://localhost:5000/schemes',{
          params: {
            category: element
          }
        }).then(res=>{
          return(res)
          })
      }
      </p>
    </div>
    </div>
  });
  
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
            {card}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
