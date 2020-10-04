import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Blog.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const useStyles =(theme) => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    });

class Blog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content: [],
        }
    }


    componentDidMount() {
        fetch('https://mighty-harbor-37972.herokuapp.com/horecacloud/blog').then((response) => response.json()).then(data => this.setState({content : data.data}))
    }

    render() {
        const {classes} = this.props
        return (
            <div className='pb-5 mt-5 pt-5'>
                <HelmetProvider>
                    <Helmet>
                        <title>Blog</title>
                    </Helmet>
                {this.state.content.length > 0 ? this.state.content.map(user=>{
                    return(
                <div key={user._id} className='py-4 px-5' >
                    <Card className={`${classes.root} mx-auto`}>
                        <CardHeader
                            title={user.title}
                            subheader={new Date(user.createdAt).toDateString()}
                        />
                        <CardMedia
                            className={classes.media}
                            image={user.photo}
                            title={user.title}
                        />
                        <CardContent>
                        <Typography paragraph>{user.description}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            <Link to ={`/blog/${user.slug}`} >Continue Reading</Link>
                            </Typography>
                        </CardContent>
                        </Card>
                    </div>)}): <h2 className='text-center'>No Blog Posts</h2>}
                </HelmetProvider>
            </div>
        )
    }
}

export default  withStyles(useStyles)(Blog)
