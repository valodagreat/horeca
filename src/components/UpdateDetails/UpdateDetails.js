import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Redirect } from 'react-router-dom';
const jwt = require('jsonwebtoken');


const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = formErrors => {
    let valid = true
    Object.values(formErrors).forEach(val=> {
        val.length>0 &&(valid=false)
    });
    return valid;
}

const useStyles =(theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    })

    class UpdateDetails extends Component  {
        constructor(props) {
            super(props)
            const token = localStorage.getItem('token');
            let SignedIn = true
        if(token=== null){
            SignedIn = false
        }
        if(token=== undefined){
            SignedIn = false
        }
        if(token){
            const decoded =jwt.verify(token,'valodagreat')
            if(!decoded){
                SignedIn = false
            }
        }
        
            this.state = {
                email : '',
                name : '',
                formErrors : {
                    email : '',
                    name : '',
                },
                disabled : false,
                isLoggedIn : false,
                errorMessage : '',
                SignedIn 
            }
        }
        

    handleChange = (event) => {
        const {name,value} = event.target

        let formErrors = this.state.formErrors
        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value)  ? '' : 'Invalid email address'
                break;
            case 'name':
                formErrors.name = value.length <3 ? 'Minimum of 3 characters required' : ''
                    break;
            default:
                break;
        }
        this.setState({formErrors,[name] : value},()=>{this.setState({disabled : !formValid(this.state.formErrors)})})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(formValid(this.state.formErrors)){
        fetch('https://mighty-harbor-37972.herokuapp.com/horeca/updatedetails',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                email : this.state.email,
                name : this.state.name
            })
        }).then(res => res.json()).then((data)=>{
            if(data.data){
            this.setState({isLoggedIn: true})}
            if(data.success === false){
                this.setState({errorMessage : data.error})
            }
        })}
    }

    render(){
        if(this.state.SignedIn === false){
            return <Redirect to={`/blog/login`} />
        }
        if(this.state.isLoggedIn){
            return <Redirect to={`/admin`} />
        }
    const {classes} = this.props
    const {formErrors} = this.state
    return (
        <div>
        <Navigation />
        <Container className='mb-5' component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            </Avatar>
            <Typography component="h1" variant="h5">
            Update Details
            </Typography>
            
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value = {this.state.email}
                onChange={this.handleChange}
                autoFocus
            />
            {formErrors.email.length > 0 && (<span className="text-danger">{formErrors.email}</span>)}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="text"
                id="name"
                value = {this.state.name}
                onChange={this.handleChange}
            />
            {formErrors.name.length > 0 && (<span className="text-danger">{formErrors.name}</span>)}
            {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
            <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                disabled ={this.state.disabled}
                
            >
                Update Details
            </Button>
        </div>
        </Container>
        <Footer />
        </div>
    );
    }}

    export default withStyles(useStyles)(UpdateDetails)