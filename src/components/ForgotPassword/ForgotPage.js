import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class ForgotPage extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <div className='pb-5 mx-5 mt-5 pt-5'>
                A link to reset your password has been sent to <strong>{this.props.match.params.id}</strong>
            </div>
            <Footer />
            </div>
        )
    }
}

export default ForgotPage
