import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShoppingStatus from './ShoppingStatus'
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <header>
            <Link to="/cart">
              <ShoppingStatus />
            </Link>
            <h1>The Artstore</h1>
          </header>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
