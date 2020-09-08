import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems=(
            <div key={this.props.posts.id}>
                <h3>Username: {this.props.posts.name}</h3>
                <h3>Number of followers:{this.props.posts.followers}</h3>
                <h3>Number of following:{this.props.posts.following}</h3>
                <h3>Public Repos:{this.props.posts.public_repos}</h3>
                <h3>Public Gists:{this.props.posts.public_gists}</h3>
            </div>
        );
        return (
            <div>
                <h1>Users Infos</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStatetoProps = state =>({
    posts:state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStatetoProps,{ fetchPosts })(Posts);

