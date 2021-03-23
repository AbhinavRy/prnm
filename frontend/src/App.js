import React from 'react';
import styles from './App.module.scss'
import RotateDiv from './Components/RotateDiv'

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.navBar}>
        <h1>Info hub</h1>
        <ul className={styles.navList}>
          <li>Categories</li>
          <li>About Us</li>
          <li>Contact Us</li>
          </ul>
      </div>
      <div className={styles.appBody}>
        <div className={styles.rightContainer}>
          <h1 className={styles.heading}>Never miss any opportunity</h1>
          <h3 className={styles.subHeading}>Always stay updated</h3>
          <p className={styles.desc}>Register with us to never miss any updates. Get updated regularly with us. Know every government schmes, scholarships, job opportunities, notices and many more things you should be knowing.</p>
          <input type="email" name="email" className={styles.email} id="email"/>
          <button className={styles.btn} type="submit">Receive updates</button>
        </div>
        <div className={styles.leftContainer}>
          <RotateDiv/>
        </div>
      </div>
    </div>
  );
};

export default App;
