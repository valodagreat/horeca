import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Redirect} from 'react-router-dom';
const dotenv = require('dotenv');

dotenv.config({path : '..../.env'})

class Blogupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title : '',
            description : '',
            done : false,
            errorMessage : ''
        };
    }
    
    handleEditorChange=(content, editor)=> {
        //I'll soon clean everything up
        this.setState({ content });
    }
    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name] : value})
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        fetch('https://mighty-harbor-37972.herokuapp.com/horecacloud/blog',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                content : this.state.content,
                description : this.state.description,
                title : this.state.title
            })
        }).then(res => res.json()).then(data =>{
            if(data.success===true){
                this.setState({done:true})
            }else if(data.success===false){
                this.setState({done:false,errorMessage : data.error})
            }
        })
    }
    
    render() {
        if(this.state.done===true){
            return <Redirect to='/blog' />
        }
        return (
            <div className='pb-5 px-5 mt-5 pt-5'>
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
                    toolbar:
                        'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | image | help'
                    }}
                apiKey={process.env.REACT_APP_EDITOR_API_KEY}
                />
                {this.state.errorMessage && (<div className='back'><span className="text-danger font-weight-bold">{this.state.errorMessage}</span></div>)}
                <button onClick={this.handleSubmit} className='btn btn-primary btn-rounded  my-4 waves-effect z-depth-0'>Post Article</button>
            </div>
    )
    }
}

export default Blogupdate
