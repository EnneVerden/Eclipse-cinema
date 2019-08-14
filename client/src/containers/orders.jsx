import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Orders from '../pages/settings/components/orders';
import { fetchOrders } from '../actions/orders';

class OrdersContainer extends PureComponent {
  componentDidMount = () => {
    const { getOrders } = this.props;

    getOrders();
  };

  render() {
    const { orders } = this.props;

    return <Orders orders={orders} />;
  }
}

OrdersContainer.propTypes = {
  orders: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  getOrders: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersContainer);
