import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';


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

    class ForgotPassword extends Component  {
        constructor(props) {
            super(props)
        
            this.state = {
                email : '',
                formErrors : {
                    email : '',
                },
                disabled : false,
                isLoggedIn : false,
                errorMessage : ''
            }
        }
        

    handleChange = (event) => {
        const {name,value} = event.target

        let formErrors = this.state.formErrors
        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value)  ? '' : 'Invalid email address'
                break;
            default:
                break;
        }
        this.setState({formErrors,[name] : value},()=>{this.setState({disabled : !formValid(this.state.formErrors)})})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(formValid(this.state.formErrors)){
        fetch('https://mighty-harbor-37972.herokuapp.com/horeca/forgotpassword',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email : this.state.email,
            })
        }).then(res => res.json()).then((data)=>{
            if(data.data === 'Email sent'){
            this.setState({isLoggedIn: true})}
            if(data.success === false){
                this.setState({errorMessage : data.error})
            }
        })}
    }

    render(){
        if(this.state.isLoggedIn){
            return <Redirect to={`/forgotpassword/${this.state.email}`} />
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
            Forgot Password
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
            {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
            <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                disabled ={this.state.disabled}
                
            >
                reset password
            </Button>
        </div>
        </Container>
        <Footer />
        </div>
    );
    }}

    export default withStyles(useStyles)(ForgotPassword)