import React, { Component } from 'react'

class ForgotPage extends Component {
    render() {
        return (
            <div className='pb-5 mx-5 mt-5 pt-5'>
                A link to reset your password has been sent to <strong>{this.props.match.params.id}</strong>
            </div>
        )
    }
}

export default ForgotPage
