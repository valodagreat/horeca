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
const jwt = require('jsonwebtoken');


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

    class UpdatePassword extends Component  {
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
                currentPassword : '',
                newPassword: '',
                formErrors : {
                    currentPassword : '',
                    newPassword : '',
                },
                errorMessage : '',
                disabled : false,
                isLoggedIn : false,
                SignedIn
            }
        }
        

    handleChange = (event) => {
        const {name,value} = event.target
        let formErrors = this.state.formErrors
        switch (name) {
            case 'currentPassword':
                formErrors.currentPassword = value.length <6 ? 'Minimum of 6 characters required' : ''
                break;
            case 'newPassword':
                    formErrors.newPassword = value.length <6 ? 'Minimum of 6 characters required' : ''
                    break;
        
            default:
                break;
        }
        this.setState({formErrors,[name] : value},()=>{this.setState({disabled : !formValid(this.state.formErrors)})})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(formValid(this.state.formErrors)){
        fetch('https://mighty-harbor-37972.herokuapp.com/horeca/updatepassword',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                currentPassword : this.state.currentPassword,
                newPassword : this.state.newPassword
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
        if(this.state.SignedIn === false){
            return <Redirect to={`/blog/login`} />
        }
        if(this.state.isLoggedIn){
            return(<Redirect to='/admin'/>)
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
            Update Password
            </Typography>
            
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="currentPassword"
                label="Current Password"
                type="password"
                id="password"
                value = {this.state.currentPassword}
                onChange={this.handleChange}
            />
            {formErrors.currentPassword.length > 0 && (<span className="text-danger">{formErrors.currentPassword}</span>)}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newpassword"
                value = {this.state.newPassword}
                onChange={this.handleChange}
            />
            {formErrors.newPassword.length > 0 && (<span className="text-danger">{formErrors.newPassword}</span>)}
            {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
            <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                disabled={this.state.disabled}
            >
                Update Password
            </Button>
        </div>
        </Container>
        <Footer />
        </div>
    );
    }}

    export default withStyles(useStyles)(UpdatePassword)