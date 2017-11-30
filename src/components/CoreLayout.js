/* @flow */
import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/init.css'

type Props = {
  children?: React.Node,
}

export const CoreLayout = (props: Props) => (
  <div style={{height: '100%'}}>
    <Header />
    <div className={`${styles.row} ${styles['center-xs']}`}>
      <div className={`${styles['main-content']} ${styles['col-xs-11']} ${styles['start-xs']}`}>
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

export default CoreLayout
