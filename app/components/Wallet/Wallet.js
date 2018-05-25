// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Wallet.css';

import { WalletIcon, ArrowRightIcon } from '../Icons';

class Wallet extends Component {


  render() {
    return (
      <NavLink to="/wallets/walletDetails" className={styles.wallet} activeClassName={styles.active}>
        <WalletIcon className={styles.walletIcon} />
        <ul className={styles.walletInfo}>
          <li className={styles.name}>{ this.props.name }</li>
          {
            this.props.tokens.map((wallet, i) =>
              <li key={i}>{ wallet.amount } { wallet.name }</li>
            )
          }
        </ul>
        <ArrowRightIcon className={styles.arrowIcon} />
      </NavLink>
    );
  }
}

export default Wallet;
