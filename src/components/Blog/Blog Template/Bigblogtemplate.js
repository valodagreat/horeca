import React, { Component } from 'react';
import Navigation from '.../Navigation/Navigation';
import Footer from '.../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Bigblogtemplate.css'

class Bigblogtemplate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content: [],
        }
    }

    componentDidMount() {
        fetch(`https://mighty-harbor-37972.herokuapp.com/horecacloud/blog/${this.props.match.params.id}`).then((response) => response.json()).then(data => this.setState({content : data.message}))
    }
    
    render() {
        return (
            <div>
            <HelmetProvider>
            <Navigation />
            <div className='pb-5 mt-5 pt-5'>
                        {this.state.content.map(user=>{
                            return(<Helmet key={user._id}>
                                <title>{user.title}</title>
                                <meta name="description" content={`${user.description}`} />
                                <meta name="keyword" content={`${user.title},${user.description}`} />
                                </Helmet>
                            )
                        })}
                {this.state.content.length < 0 ? <h1>loading...</h1> : this.state.content.map(user=>{
                    return (<div className='mx-auto blog' key = {user._id}><div className='py-4'><h2 className='font-weight-bold h1 py-1'>{user.title}</h2>
                    <span className=''>{new Date(user.createdAt).toDateString()}</span>
                    </div>
                    <section  
                        dangerouslySetInnerHTML={{ __html: user.content }}
                    /></div>)
                })}
            </div>
            <Footer />
            </HelmetProvider>
            </div>
        )
    }
}

export default Bigblogtemplate
