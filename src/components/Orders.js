import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Orders extends Component {
    render() {
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
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>99</td>
            <td>1/2/2020</td>
            <td>$29.99</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>42</td>
            <td>12/31/2019</td>
            <td>$36.99</td>
            <td>Complete</td>
        </tr>
        <tr>
            <td>31</td>
            <td>12/29/2019</td>
            <td>$119.99</td>
            <td>Complete</td>
        </tr>
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

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
