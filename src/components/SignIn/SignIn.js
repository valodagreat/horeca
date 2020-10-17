import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { withStyles } from '@material-ui/core/styles';
import './SignIn.css'
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path : '..../.env'})

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

    class SignIn extends Component  {
        constructor(props) {
            super(props)
        const token = localStorage.getItem('token');
            let isLoggedIn = true
        if(token=== null){
            isLoggedIn = false
        }
        if(token){
            const decoded =jwt.verify(token,process.env.REACT_APP_JWT_SECRET)
            if(!decoded.id){
                isLoggedIn = false
            }
        }
            this.state = {
                email : '',
                password : '',
                isLoggedIn ,
                errorMessage : '',
                formErrors : {
                    email : '',
                    password : '',
                },
                disabled : false
            }
        }
        

    handleChange = (event) => {
        const {name,value} = event.target

        let formErrors = this.state.formErrors
        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value)  ? '' : 'Invalid email address'
                break;
            case 'password':
                    formErrors.password = value.length <6 ? 'Minimum of 6 characters required' : ''
                    break;
        
            default:
                break;
        }
        this.setState({formErrors,[name] : value},()=>{this.setState({disabled : !formValid(this.state.formErrors)})})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(formValid(this.state.formErrors)){
        fetch('https://mighty-harbor-37972.herokuapp.com/horeca/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email : this.state.email,
                password : this.state.password
            })
        }).then(res => res.json()).then((data)=>{
            if(data.token){
            localStorage.setItem('token', data.token)
            this.setState({isLoggedIn: true})
        }
            if(data.error){
                this.setState({errorMessage : data.error,isLoggedIn : false})
            }
        })}
    }

    render(){
    const {formErrors} = this.state
    const {classes} = this.props
        if(this.state.isLoggedIn){
            return <Redirect to='/admin' />
        }
    return (
        <HelmetProvider>
            <Navigation />
            <Helmet>
                <title>Login</title>
            </Helmet>
        <Container className='mb-3' component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
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
                name="password"
                label="Password"
                type="password"
                id="password"
                value = {this.state.password}
                onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (<span className="text-danger">{formErrors.password}</span>)}
            {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                disabled={this.state.disabled}
                
            >
                Sign In
            </Button>
            <Grid container>
                <Grid className='pt-3' item xs>
                <Link href="/forgotpassword" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
            </Grid>
            
        </div>
        </Container>
        <Footer />
        </HelmetProvider>
    );
    }}

    export default withStyles(useStyles)(SignIn)