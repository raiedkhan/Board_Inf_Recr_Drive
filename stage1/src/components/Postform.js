import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../actions/postActions'


class Postform extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post={
            username: this.state.username
        };
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <h1>Add users</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username : </label>
                        <input type="text" onChange={this.onChange} name="username" value={this.state.username}></input>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes={
    createPost: PropTypes.func.isRequired
};

export default connect(null,{createPost})(Postform);