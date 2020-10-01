import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }
    
    

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Redirect to='/blog' />||<h1 className='text-center'>Something went wrong.</h1>;
        }

        return this.props.children; 
        }
}


export default ErrorBoundary
