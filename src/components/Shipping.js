import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';

export class Shipping extends Component {
    render() {
        return (
            <div className="Shipping">
                <Header />
                <div className="container">

                    <h1>Shipping</h1>
                    <div style={{ display: "grid", gridRowGap: "1rem", width: "90%", margin: ".5rem auto" }}>
                        <h3>Contact Information</h3>
                        {/* <label htmlFor="email">Email</label> */}
                        <input id="email" name="email" autoComplete="shipping email" type="email" placeholder="Email" aria-label="Email"></input>

                        {/* <label htmlFor="first-name">First Name</label> */}
                        <input id="first-name" name="first-name" autoComplete="shipping given-name" type="text" placeholder="First Name" aria-label="First Name"></input>
                        {/* <label htmlFor="last-name">Last Name</label> */}
                        <input id="last-name" name="last-name" autoComplete="shipping family-name" type="text" placeholder="Last Name" aria-label="Last Name"></input>
                        {/* <label htmlFor="shipping-organization">Company</label> */}
                        <input id="shipping-organization" name="shipping-organization" autoComplete="shipping organization" type="text" placeholder="Company (Optional)" aria-label="Company (Optional)"></input>
                        {/* <label htmlFor="shipping-address-line1">Address</label> */}
                        <input id="shipping-address-line1" name="shipping-address-line1" autoComplete="shipping address-line1" type="text" placeholder="Address" aria-label="Address"></input>
                        {/* <label htmlFor="shipping-address-line2">Apt, Suite, etc (Optional)</label> */}
                        <input id="shipping-address-line2" name="shipping-address-line2" autoComplete="shipping address-line2" type="text" placeholder="Apt, Suite, etc (Optional)" aria-label="Apt, Suite, etc (Optional)"></input>
                        {/* <label htmlFor="shipping-address-level2">City</label> */}
                        <input id="shipping-address-level2" name="shipping-address-level2" autoComplete="shipping address-level2" type="text" placeholder="City" aria-label="City"></input>
                        {/* <label htmlFor="shipping-address-level1">State</label> */}
                        <select data-name="foo" id="shipping-address-level1" name="shipping-address-level1" autoComplete="shipping address-level1" type="text" placeholder="State" aria-label="State">
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
                        {/* <label htmlFor="postal-code">ZIP Code</label> */}
                        <input id="postal-code" name="postal-code" autoComplete="shipping postal-code" type="text" placeholder="ZIP Code" aria-label="ZIP Code"></input>
                        {/* <label htmlFor="tel-national">Phone (Optional)</label> */}
                        <input id="tel-national" name="tel-national" autoComplete="shipping tel-national" type="text" placeholder="Phone (Optional)" aria-label="Phone (Optional)"></input>


                        <h3>Shipping Method</h3>
                        <select data-name="foo" id="shipping-address-level1" name="shipping-address-level1" autoComplete="shipping address-level1" type="text" placeholder="Choose Shipping" aria-label="Choose Shipping">
                            <option disabled="">Choose Shipping...</option>
                            <option value="USPS">USPS Priority Mail</option>
                        </select>

                        <h3>Remember Me</h3>

                        <label className="tupperware">
                            Keep me up to date on news and exclusive offers
                            <input type="checkbox" defaultChecked="checked"></input>
                            <span className="checkmark"></span>
                        </label>

                        <label className="tupperware">
                            Save my information for a faster checkout
                            <input type="checkbox" defaultChecked="checked"></input>
                            <span className="checkmark"></span>
                        </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
