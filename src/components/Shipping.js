import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import { updateShipping } from '../redux/actions';
import { faShoppingCart, faShippingFast, faFileImage, faFileInvoiceDollar, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Shipping extends Component {

    updateShipping = (e) => {
        console.log(e.target);
        console.log(e.target.checked);
        if (e.target.name === 'news-and-offers' || e.target.name === 'save-info') {
            this.props.updateShipping({[e.target.name]: e.target.checked});
        } else {
            this.props.updateShipping({[e.target.name]: e.target.value});
        }

    }

    render() {
        return (
            <div className="Shipping">
                <Header />
                <div className="container">

                    <h1>Shipping <FontAwesomeIcon icon={faShippingFast} /></h1>
                    <div style={{ display: "grid", gridRowGap: "1rem", width: "90%", margin: ".5rem auto" }}>
                        <h3>Contact Information</h3>
                        <input id="email" name="email" autoComplete="shipping email" type="email" onChange={this.updateShipping} placeholder="Email" aria-label="Email" value={this.props.email}></input>
                        <input id="given-name" name="given-name" autoComplete="shipping given-name" type="text" onChange={this.updateShipping} placeholder="First Name" aria-label="First Name" value={this.props['given-name']}></input>
                        <input id="family-name" name="family-name" autoComplete="shipping family-name" type="text" onChange={this.updateShipping} placeholder="Last Name" aria-label="Last Name" value={this.props['family-name']}></input>
                        <input id="organization" name="organization" autoComplete="shipping organization" type="text" onChange={this.updateShipping} placeholder="Company (Optional)" aria-label="Company (Optional)" value={this.props.organization}></input>
                        <input id="address-line1" name="address-line1" autoComplete="shipping address-line1" type="text" onChange={this.updateShipping} placeholder="Address" aria-label="Address" value={this.props['address-line1']}></input>
                        <input id="address-line2" name="address-line2" autoComplete="shipping address-line2" type="text" onChange={this.updateShipping} placeholder="Apt, Suite, etc (Optional)" aria-label="Apt, Suite, etc (Optional)" value={this.props['address-line2']}></input>
                        <input id="address-level2" name="address-level2" autoComplete="shipping address-level2" type="text" onChange={this.updateShipping} placeholder="City" aria-label="City" value={this.props['address-level2']}></input>
                        <select data-name="foo" id="address-level1" name="address-level1" autoComplete="shipping address-level1" onChange={this.updateShipping} placeholder="State" aria-label="State"  value={this.props['address-level1']}>
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
                        <input id="postal-code" name="postal-code" autoComplete="shipping postal-code" type="text" onChange={this.updateShipping} placeholder="ZIP Code" aria-label="ZIP Code" value={this.props['postal-code']}></input>
                        <input id="tel-national" name="tel-national" autoComplete="shipping tel-national" type="text" onChange={this.updateShipping} placeholder="Phone (Optional)" aria-label="Phone (Optional)" value={this.props['tel-national']}></input>


                        <h3>Shipping Method</h3>
                        <select data-name="foo" id="shipping-method" name="shipping-method" onChange={this.updateShipping} placeholder="Choose Shipping" aria-label="Choose Shipping" value={this.props['shipping-method']}>
                            <option disabled="">Choose Shipping...</option>
                            <option value="USPS">USPS Priority Mail</option>
                        </select>

                        <h3>Remember Me</h3>

                        <label className="tupperware">
                            Keep me up to date on news and exclusive offers
                            <input id="news-and-offers" name="news-and-offers" type="checkbox" onChange={this.updateShipping} checked={this.props['news-and-offers']}></input>
                            <span className="checkmark"></span>
                        </label>

                        <label className="tupperware">
                            Save my information for a faster checkout
                            <input id="save-info" name="save-info" type="checkbox" onChange={this.updateShipping}  checked={this.props['save-info']}></input>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.shipping);

const mapDispatchToProps = {
    updateShipping

}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
