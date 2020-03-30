import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCardHidden } from '../..//redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
