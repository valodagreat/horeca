import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Redirect} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
//import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageUploading from 'react-images-uploading';
import './Admin.css'
const jwt = require('jsonwebtoken');
const axios = require('axios');


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

class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token');
            let isLoggedIn = true
        if(token=== null){
            isLoggedIn = false
        }
        if(token=== undefined){
            isLoggedIn = false
        }
        if(token){
            const decoded =jwt.verify(token,'valodagreat')
            if(!decoded){
                isLoggedIn = false
            }
        }
    
        this.state = {
            data : [],
            isLoggedIn,
            info : [], 
            open : false,
            content: '',
            title : '',
            description : '',
            done : false,
            errorMessage : '',
            delId : '',
            modName : '',
            delete : '',
            user : {},
            image : [],
            images : [],
            deleted : false,
            updateTitle : '',
            updateDescription : '',
            updateContent : '',
            update : false,
            error : '',
            updable : true
        }
    }
    
    componentDidMount() {
        axios.get('https://mighty-harbor-37972.herokuapp.com/horeca/me', {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            "Access-Control-Allow-Origin": "*"
        }
        }).then((data)=>{
            console.log(data)
            if(data.data.error){
                this.setState({isLoggedIn : false})
            }
            this.setState({data: [data.data.data],user : data.data.data})
        })
        
        axios.get('https://mighty-harbor-37972.herokuapp.com/horecacloud/blog', {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
        }).then(data => this.setState({info : data.data.data},console.log(data)))
    }

    handleEditorChange=(content, editor)=> {
        this.setState({ content });
    }


    handleEditChange=(content, editor)=> {
        this.setState({ updateContent : content },()=>{
            if(this.state.images.length >0){
                this.setState({updable : false, error : ''})
            } if(!(this.state.images.length > 0)){
                this.setState({error : 'Please add an image when updating',updable : true})
            }
        });
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name] : value},()=>{
            if(this.state.images.length >0){
                this.setState({updable : false, error : ''})
            } if(!(this.state.images.length > 0)){
                this.setState({error : 'Please add an image when updating',updable : true})
            }
        })
    }

    onChange = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log(imageList, addUpdateIndex);
        this.setState({image : imageList});
    };

    onChanged = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log(imageList, addUpdateIndex);
        this.setState({images : imageList},()=>{
            if(this.state.images.length >0){
                this.setState({updable : false, error : ''})
            } if(!(this.state.images.length > 0)){
                this.setState({error : 'Please add an image when updating',updable : true})
            }
        });
    };

    

    handleSubmit = (event)=>{
        event.preventDefault();
        
        axios.post('https://mighty-harbor-37972.herokuapp.com/horecacloud/blog', {
            content : this.state.content,
            description : this.state.description,
            title : this.state.title,
            photo : this.state.image[0].data_url
        }, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Access-Control-Allow-Origin": "*"
            },
            }).then(data =>{
                console.log(data)
                if(data.data.success===true){
                    this.setState({done:true})
                }else if(data.data.success===false){
                    this.setState({done:false,errorMessage : data.data.error})
                }
            })
    }

    handlePost = ()=> {
        this.setState({open : true})
    }

    handleCancel = ()=> {
        this.setState({open : false})
    }

    initialFormValue=(rec)=>{
        this.setState({
            updateId : rec._id ,
            updateTitle : rec.title,
            updateDescription : rec.description,
            updateContent : rec.content,
            
        })
    }

    default=()=>{
        this.setState({images : []})
    }

    secondFormValue=(vac)=>{
        this.setState({
            delId : vac._id,
            modName : vac.title
        })
    }


    updateBlog=()=>{
        if(this.state.images.length > 0){
            axios.put(`https://mighty-harbor-37972.herokuapp.com/horecacloud/blog/${this.state.updateId}`, {
                title : this.state.updateTitle,
                description : this.state.updateDescription,
                content : this.state.updateContent,
                photo : this.state.images[0].data_url
            }, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    "Access-Control-Allow-Origin": "*"
                },
                }).then(data=>{
            if(data.data.success === true){
                this.setState({update : true})
            }
        })}else if(!(this.state.images.length > 0)){
            this.setState({error : 'Please add an image when updating',updable : true})
        }
    }

    deletedEmployee=()=>{
        if(this.state.delete==='Yes'){
        fetch(`https://mighty-harbor-37972.herokuapp.com/horecacloud/blog/${this.state.delId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            if(data.success === true) {
                this.setState({deleted : true});
            }
        })
        }
    }
    

    render() {
        const {classes} = this.props
        if(this.state.update){
            return <Redirect to={`/blog/login`} />
        }
        if(this.state.deleted){
            return <Redirect to={`/blog/login`} />
        }
        const admin = this.state.data.length > 0 ? this.state.data.map(user =>{
            return(<div className='text-center pb-5' key={user._id}><div className='mx-auto text-center d-flex justify-content-center'>
            <Avatar>A</Avatar></div><h2 className='text-center'>Welcome {user.name}</h2></div>)
        } ) :(<div className='text-center'>Loading...</div>)


        if(this.state.isLoggedIn === false){
            return <Redirect to="/blog/login" />
        }
        if(this.state.done===true){
            return <Redirect to='/blog' />
        }
        return (
            <div className='pb-5 mt-5 pt-5'>
                <HelmetProvider>
                    <Helmet>
                        <title>Admin</title>
                    </Helmet>
                    <nav className="navbar navbar-expand-md neg" id="navbar">
                    <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown heads p-1">
                                    <a className="nav-link dropdown-toggle ltxt" href='#.' id="navbardrop" data-toggle="dropdown">
                                        Update Details
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link to = {`/admin/updatepassword`}>
                                            <span className="dropdown-item" >Change Password</span>
                                        </Link>
                                        <Link to ='/admin/updatedetails'>
                                            <span className="dropdown-item" >Update Details</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item heads p-1">
                                    <Link to ='/blog/logout'>
                                        <span className="nav-link" >Logout</span>
                                    </Link>
                                </li>
                    </ul>
                    </nav>
                <div>{this.state.open ? null : admin}</div>
                    <div>
                        {this.state.open === false ? <div className='mx-auto text-center'><button onClick={this.handlePost} type="button" className="btn btn-primary">Post New Content</button></div> : null    
                    }
                    </div>
                    {this.state.open ? (<div className='px-5'>
                    <ImageUploading
                            value={this.state.image}
                            onChange={this.onChange}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper py-3">
                                <button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                className='btn btn-primary'
                                >
                                Click or Drop Image here
                                </button>
                                &nbsp;
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img  src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper pt-3">
                                    <span className='p-2'><button className='btn btn-primary' onClick={() => onImageUpdate(index)}>Update</button></span>
                                    <span><button className='btn btn-primary' onClick={() => onImageRemove(index)}>Remove</button></span>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                        </ImageUploading>
                        <input type="text" id="defaultContactFormName" name='title' value={this.state.title} onChange={this.handleChange} className="form-control mb-4" placeholder="Title"/>
                        <div className="form-group">
                            <textarea className="form-control rounded-0" name="description" value={this.state.description} onChange={this.handleChange} id="exampleFormControlTextarea2" rows="3" placeholder="Description"/>
                        </div>
                        <Editor
                        value={this.state.content}
                        onEditorChange={this.handleEditorChange}
                        init={{
                            height: 500,
                            menubar: 'insert',
                            plugins: [
                                'advlist autolink lists link image', 
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste wordcount',
                                'image'
                            ],
                            automatic_uploads: true,
                            /*
                                URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                                images_upload_url: 'postAcceptor.php',
                                here we add custom filepicker only to Image dialog
                            */
                            file_picker_types: 'image',
                            /* and here's our custom image picker*/
                            file_picker_callback: function (cb, value, meta) {
                                var input = document.createElement('input');
                                input.setAttribute('type', 'file');
                                input.setAttribute('accept', 'image/*');

                                /*
                                Note: In modern browsers input[type="file"] is functional without
                                even adding it to the DOM, but that might not be the case in some older
                                or quirky browsers like IE, so you might want to add it to the DOM
                                just in case, and visually hide it. And do not forget do remove it
                                once you do not need it anymore.
                                */

                                input.onchange = function () {
                                var file = this.files[0];

                                var reader = new FileReader();
                                reader.onload = function () {
                                    /*
                                    Note: Now we need to register the blob in TinyMCEs image blob
                                    registry. In the next release this part hopefully won't be
                                    necessary, as we are looking to handle it internally.
                                    */
                                    var id = 'blobid' + (new Date()).getTime();
                                    var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                                    var base64 = reader.result.split(',')[1];
                                    var blobInfo = blobCache.create(id, file, base64);
                                    blobCache.add(blobInfo);

                                    /* call the callback and populate the Title field with the file name */
                                    cb(blobInfo.blobUri(), { title: file.name });
                                };
                                reader.readAsDataURL(file);
                                };

                                input.click();
                            },
                            toolbar:
                                'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | image | help'
                            }}
                        apiKey="h8vbp6f7nutr08hhfm39ugf9neecd2i6m59yydtowtor4gec"
                        />
                        {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
                        <button onClick={this.handleSubmit} className='btn btn-primary btn-rounded  my-4 waves-effect z-depth-0'>Post Article</button>
                        <span className='px-3'><button onClick={this.handleCancel} className='btn btn-danger btn-rounded my-4 waves-effect z-depth-0'>Cancel</button></span>
                        </div>): null}{this.state.info.length > 0 ? <h3 className='text-center pt-5'>Blog Posts</h3>:<h3 className='text-center'>No Blog Posts</h3>}
                        {this.state.info.length > 0 ?  this.state.info.map(user=>{
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
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="update" className='cursor' onClick={()=>this.initialFormValue(user)}  data-toggle="modal" data-target="#modalUpdateForm">
                                                <CreateIcon />
                                            </IconButton>
                                            <IconButton className="cursor" onClick={()=>this.secondFormValue(user)} data-toggle="modal" data-target='#modalContactForm' aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </div>)}): null}
                                <div className="modal fade" id="modalContactForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                <div className="modal-header text-center">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body mx-3">
                                                        <div className="mb-5">
                                                        <p>Are you sure you want to delete <strong>{this.state.modName}</strong> from your posts ? </p>
                                                        </div>
                                                    <div className="form-check mb-5">
                                                        <div className=''>
                                                            <label  htmlFor="defaultForm-email"><input onChange={this.handleChange} checked={this.state.delete==='Yes'} name='delete' value='Yes' type="radio" id="defaultForm-email" className="form-check-input validate"/>Yes</label>
                                                            </div>
                                                            <div className=''>
                                                            <label htmlFor="defaultForm"><input name='delete' onChange={this.handleChange} checked={this.state.delete==='No'} value='No' type="radio" id="defaultForm" className="form-check-input validate"/>No</label>
                                                            </div>
                                                        </div>

                                                </div>
                                                <div className="modal-footer d-flex justify-content-center">
                                                    <button onClick={this.deletedEmployee} data-dismiss="modal" type='button' className="btn btn-danger">Submit</button>
                                                </div>
                                                </div>
                                                </div>
                                                </div>

                                                <div className="modal fade" id="modalUpdateForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                                aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                    <div className="modal-header text-center">
                                                        <h4 className="modal-title w-100 font-weight-bold">Update Blog</h4>
                                                        <button type="button" onClick={this.default} className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body mx-3">
                                                    <ImageUploading
                                                            value={this.state.images}
                                                            onChange={this.onChanged}
                                                            dataURLKey="data_url"
                                                        >
                                                            {({
                                                            imageList,
                                                            onImageUpload,
                                                            onImageUpdate,
                                                            onImageRemove,
                                                            isDragging,
                                                            dragProps,
                                                            }) => (
                                                            // write your building UI
                                                            <div className="upload__image-wrapper py-3">
                                                                <button
                                                                style={isDragging ? { color: 'red' } : undefined}
                                                                onClick={onImageUpload}
                                                                {...dragProps}
                                                                className='btn btn-primary'
                                                                >
                                                                Click or Drop Image here
                                                                </button>
                                                                &nbsp;
                                                                {imageList.map((image, index) => (
                                                                <div key={index} className="image-item">
                                                                    <img  src={image['data_url']} alt="" width="100" />
                                                                    <div className="image-item__btn-wrapper pt-3">
                                                                    <span className='p-2'><button className='btn btn-primary' onClick={() => onImageUpdate(index)}>Update</button></span>
                                                                    <span><button className='btn btn-primary' onClick={() => onImageRemove(index)}>Remove</button></span>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            )}
                                                        </ImageUploading>
                                                        {this.state.error.length > 0 && (<span className="text-danger">{this.state.error}</span>)}
                                                        <div className="md-form mb-5">
                                                        <input type="text" id={`orangeForm-updateTitle`} required name='updateTitle' onChange={this.handleChange}   value={this.state.updateTitle} className="form-control validate"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea className="form-control rounded-0" name="updateDescription" value={this.state.updateDescription} onChange={this.handleChange} id="exampleFormControlTextarea2" rows="3" placeholder="Description"/>
                                                        </div>
                                                        <Editor
                                                        value={this.state.updateContent}
                                                        onEditorChange={this.handleEditChange}
                                                        init={{
                                                            height: 500,
                                                            menubar: 'insert',
                                                            plugins: [
                                                                'advlist autolink lists link image', 
                                                                'charmap print preview anchor help',
                                                                'searchreplace visualblocks code',
                                                                'insertdatetime media table paste wordcount',
                                                                'image'
                                                            ],
                                                            automatic_uploads: true,
                                                            /*
                                                                URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                                                                images_upload_url: 'postAcceptor.php',
                                                                here we add custom filepicker only to Image dialog
                                                            */
                                                            file_picker_types: 'image',
                                                            /* and here's our custom image picker*/
                                                            file_picker_callback: function (cb, value, meta) {
                                                                var input = document.createElement('input');
                                                                input.setAttribute('type', 'file');
                                                                input.setAttribute('accept', 'image/*');

                                                                /*
                                                                Note: In modern browsers input[type="file"] is functional without
                                                                even adding it to the DOM, but that might not be the case in some older
                                                                or quirky browsers like IE, so you might want to add it to the DOM
                                                                just in case, and visually hide it. And do not forget do remove it
                                                                once you do not need it anymore.
                                                                */

                                                                input.onchange = function () {
                                                                var file = this.files[0];

                                                                var reader = new FileReader();
                                                                reader.onload = function () {
                                                                    /*
                                                                    Note: Now we need to register the blob in TinyMCEs image blob
                                                                    registry. In the next release this part hopefully won't be
                                                                    necessary, as we are looking to handle it internally.
                                                                    */
                                                                    var id = 'blobid' + (new Date()).getTime();
                                                                    var blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                                                                    var base64 = reader.result.split(',')[1];
                                                                    var blobInfo = blobCache.create(id, file, base64);
                                                                    blobCache.add(blobInfo);

                                                                    /* call the callback and populate the Title field with the file name */
                                                                    cb(blobInfo.blobUri(), { title: file.name });
                                                                };
                                                                reader.readAsDataURL(file);
                                                                };

                                                                input.click();
                                                            },
                                                            toolbar:
                                                                'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | image | help'
                                                            }}
                                                            apiKey="h8vbp6f7nutr08hhfm39ugf9neecd2i6m59yydtowtor4gec"
                                                            />

                                                            </div>
                                                            <div className="modal-footer d-flex justify-content-center">
                                                                <button disabled={this.state.updable} onClick={this.updateBlog} data-dismiss="modal" type='button' className="btn btn-primary"  >Update</button>
                                                            </div>
                                                            </div>
                                            </div>
                                            </div>
                                    </HelmetProvider>
            </div>
        )
    }
}

export default withStyles(useStyles)(Admin);
