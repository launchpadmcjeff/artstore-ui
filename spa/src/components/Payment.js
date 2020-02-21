import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import { updatePayment } from '../redux/actions'; 
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Payment extends Component {

    updatePayment = (e) => {
        if (e.target.name === 'billing-eq-shipping') {
            this.props.updatePayment({'billing-eq-shipping': e.target.value});
        } else {
            this.props.updatePayment({[e.target.name]: e.target.value});
        }
    }

    updateBilling = (e) => {
        if (e.target.name === 'billing-eq-shipping') {
            this.props.updatePayment({'billing-eq-shipping': e.target.value});
        } else {
            this.props.updatePayment({[e.target.name]: e.target.value});
        }
    }

    render() {
        return (
            <div className="Payment">
                <Header />
                <div className="container">
                    <h1>Payment <FontAwesomeIcon icon={faFileInvoiceDollar} /></h1>
                    <div style={{ display: "grid", gridRowGap: "1rem", width: "90%", margin: ".5rem auto" }}>
                        All transactions are secure and encrypted
                        <input id="cc-number" name="cc-number" autoComplete="cc-number" type="text" placeholder="Card Number" aria-label="Card Number" onChange={this.updatePayment} value={this.props['cc-number']}></input>
                        <input id="cc-name" name="cc-name" autoComplete="cc-name" type="text" placeholder="Name on Card" aria-label="Name on Card" onChange={this.updatePayment} value={this.props['cc-name']}></input>
                        <input id="cc-exp" name="cc-exp" autoComplete="cc-exp" type="text" placeholder="Expiration MM/YY" aria-label="Expiration MM/YY" onChange={this.updatePayment} value={this.props['cc-exp']}></input>
                        <input id="cc-csc" name="cc-csc" autoComplete="cc-csc" type="text" placeholder="Security Code" aria-label="Security Code" onChange={this.updatePayment} value={this.props['cc-csc']}></input>

                        <h3>Billing Address</h3>
                        <label className="tupperware">
                        Same as shipping address
                            <input id="billing-eq-shipping" name="billing-eq-shipping" type="radio" checked={this.props['billing-eq-shipping'] === 'true'} onChange={this.updatePayment} value='true'></input>
                            <span className="radio"></span>
                        </label>

                        <label className="tupperware">
                        Use a different billing address
                            <input id="billing-neq-shipping" name="billing-eq-shipping" type="radio" checked={this.props['billing-eq-shipping'] === 'false'} onChange={this.updatePayment} value='false'></input>
                            <span className="radio"></span>
                        </label>

                        <div style={this.props['billing-eq-shipping'] === 'true' ? {display: "none"} : { display: "grid", gridRowGap: "1rem" }}>
                        <input id="email" name="email" autoComplete="Billing email" type="email" onChange={this.updateBilling} placeholder="Email" aria-label="Email" value={this.props.email}></input>
                        <input id="given-name" name="given-name" autoComplete="Billing given-name" type="text" onChange={this.updateBilling} placeholder="First Name" aria-label="First Name" value={this.props['given-name']}></input>
                        <input id="family-name" name="family-name" autoComplete="Billing family-name" type="text" onChange={this.updateBilling} placeholder="Last Name" aria-label="Last Name" value={this.props['family-name']}></input>
                        <input id="organization" name="organization" autoComplete="Billing organization" type="text" onChange={this.updateBilling} placeholder="Company (Optional)" aria-label="Company (Optional)" value={this.props.organization}></input>
                        <input id="address-line1" name="address-line1" autoComplete="Billing address-line1" type="text" onChange={this.updateBilling} placeholder="Address" aria-label="Address" value={this.props['address-line1']}></input>
                        <input id="address-line2" name="address-line2" autoComplete="Billing address-line2" type="text" onChange={this.updateBilling} placeholder="Apt, Suite, etc (Optional)" aria-label="Apt, Suite, etc (Optional)" value={this.props['address-line2']}></input>
                        <input id="address-level2" name="address-level2" autoComplete="Billing address-level2" type="text" onChange={this.updateBilling} placeholder="City" aria-label="City" value={this.props['address-level2']}></input>
                        <select data-name="foo" id="address-level1" name="address-level1" autoComplete="Billing address-level1" onChange={this.updateBilling} placeholder="State" aria-label="State"  value={this.props['address-level1']}>
                            <option disabled="">State</option>
                            <option data-description="Alabama" value="AL">Alabama</option>
                            <option data-description="Alaska" value="AK">Alaska</option>
                            <option data-description="American Samoa" value="AS">American Samoa</option>
                            <option data-description="Arizona" value="AZ">Arizona</option>
                            <option data-description="Arkansas" value="AR">Arkansas</option>
                            <option data-description="California" value="CA">California</option>
                            <option data-description="Colorado" value="CO">Colorado</option>
                            <option data-description="Connecticut" value="CT">Connecticut</option>
                            <option data-description="Delaware" value="DE">Delaware</option>
                            <option data-description="District of Columbia" value="DC">District of Columbia</option>
                            <option data-description="Federated States of Micronesia" value="FM">Federated States of Micronesia</option>
                            <option data-description="Florida" value="FL">Florida</option>
                            <option data-description="Georgia" value="GA">Georgia</option>
                            <option data-description="Guam" value="GU">Guam</option>
                            <option data-description="Hawaii" value="HI">Hawaii</option>
                            <option data-description="Idaho" value="ID">Idaho</option>
                            <option data-description="Illinois" value="IL">Illinois</option>
                            <option data-description="Indiana" value="IN">Indiana</option>
                            <option data-description="Iowa" value="IA">Iowa</option>
                            <option data-description="Kansas" value="KS">Kansas</option>
                            <option data-description="Kentucky" value="KY">Kentucky</option>
                            <option data-description="Louisiana" value="LA">Louisiana</option>
                            <option data-description="Maine" value="ME">Maine</option>
                            <option data-description="Marshall Islands" value="MH">Marshall Islands</option>
                            <option data-description="Maryland" value="MD">Maryland</option>
                            <option data-description="Massachusetts" value="MA">Massachusetts</option>
                            <option data-description="Michigan" value="MI">Michigan</option>
                            <option data-description="Minnesota" value="MN">Minnesota</option>
                            <option data-description="Mississippi" value="MS">Mississippi</option>
                            <option data-description="Missouri" value="MO">Missouri</option>
                            <option data-description="Montana" value="MT">Montana</option>
                            <option data-description="Nebraska" value="NE">Nebraska</option>
                            <option data-description="Nevada" value="NV">Nevada</option>
                            <option data-description="New Hampshire" value="NH">New Hampshire</option>
                            <option data-description="New Jersey" value="NJ">New Jersey</option>
                            <option data-description="New Mexico" value="NM">New Mexico</option>
                            <option data-description="New York" value="NY">New York</option>
                            <option data-description="North Carolina" value="NC">North Carolina</option>
                            <option data-description="North Dakota" value="ND">North Dakota</option>
                            <option data-description="Northern Mariana Islands" value="MP">Northern Mariana Islands</option>
                            <option data-description="Ohio" value="OH">Ohio</option>
                            <option data-description="Oklahoma" value="OK">Oklahoma</option>
                            <option data-description="Oregon" value="OR">Oregon</option>
                            <option data-description="Palau" value="PW">Palau</option>
                            <option data-description="Pennsylvania" value="PA">Pennsylvania</option>
                            <option data-description="Puerto Rico" value="PR">Puerto Rico</option>
                            <option data-description="Rhode Island" value="RI">Rhode Island</option>
                            <option data-description="South Carolina" value="SC">South Carolina</option>
                            <option data-description="South Dakota" value="SD">South Dakota</option>
                            <option data-description="Tennessee" value="TN">Tennessee</option>
                            <option data-description="Texas" value="TX">Texas</option>
                            <option data-description="Utah" value="UT">Utah</option>
                            <option data-description="Vermont" value="VT">Vermont</option>
                            <option data-description="Virgin Islands" value="VI">Virgin Islands</option>
                            <option data-description="Virginia" value="VA">Virginia</option>
                            <option data-description="Washington" value="WA">Washington</option>
                            <option data-description="West Virginia" value="WV">West Virginia</option>
                            <option data-description="Wisconsin" value="WI">Wisconsin</option>
                            <option data-description="Wyoming" value="WY">Wyoming</option>
                            <option data-description="Armed Forces Americas" value="AA">Armed Forces Americas</option>
                            <option data-description="Armed Forces Europe" value="AE">Armed Forces Europe</option>
                            <option data-description="Armed Forces Pacific" value="AP">Armed Forces Pacific</option>
                        </select>
                        <input id="postal-code" name="postal-code" autoComplete="Billing postal-code" type="text" onChange={this.updateBilling} placeholder="ZIP Code" aria-label="ZIP Code" value={this.props['postal-code']}></input>
                        <input id="tel-national" name="tel-national" autoComplete="Billing tel-national" type="text" onChange={this.updateBilling} placeholder="Phone (Optional)" aria-label="Phone (Optional)" value={this.props['tel-national']}></input>

                        </div>
                </div>

                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.payment)

const mapDispatchToProps = {
    updatePayment
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
