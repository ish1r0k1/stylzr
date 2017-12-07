import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import styles from '../styles/init.css'
import { signOut } from '../actions/authenticate'

class CoreLayout extends Component {
  static get propTypes() {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className={styles['app-wrapper']}>
        <Sidebar user={this.props.user} signOut={this.props.signOut} />
        <div className={`${styles.row} ${styles['center-xs']}`}>
          <div className={`${styles['main-content']} ${styles['col-xs-11']} ${styles['start-xs']}`}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const mapDispatchToProps = {
  signOut
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreLayout)
