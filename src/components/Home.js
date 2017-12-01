import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import styles from '../styles/init.css'

class Home extends Component {
  static get propTypes() {
    props: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className={styles.Home}>
        <div className={`${styles['Home-container']} ${styles['row']} ${styles['center-xs']} ${styles['middle-xs']}`}>
          <div className={styles['col-xs-10']}>
            <div className={styles.Home__header}>Stylzr</div>
            <div className={`${styles['row']} ${styles['center-xs']}`}>
              <div className={styles['col-xs-10']}>
                <div className={styles.Home__description}>Style guide generator</div>
              </div>
            </div>
            <div className={styles.Home__buttons}>
              <button onClick={this.props.signInWithGoogle}>Sign with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
