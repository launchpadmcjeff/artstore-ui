import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getOrders } from "../redux/actions";

export class Orders extends Component {
    componentDidMount() {
        this.props.dispatch(getOrders());
    }
    render() {
        const { error, loading, orders } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            console.log('Orders Loading...');
            return <div>Loading...</div>;
        }

        console.log('Orders: ' + orders);
        return (
            <div className="Orders">
                <Header />
                <div className="container">

                    <h1>Orders <FontAwesomeIcon icon={faImages} /></h1>
                    <div style={{ "overflowX:": "auto" }}>

                        <table>
                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Shipping</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.orders.map(order =>
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.shippingMethod}</td>
                                        <td>{(order.total / 100).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</td>
                                        <td>In Progress</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    loading: state.orders.loading,
    error: state.orders.error
})

export default connect(mapStateToProps)(Orders)