import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPostsAction } from '../redux/actions/postActions'

export class FetchData extends Component {
    static displayName = FetchData.name;

    componentDidMount() {
        this.props.getPostsAction();
    }

    render() {
        const { posts } = this.props
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server using Redux.</p>
                {posts && posts.map((post, i) => <div key={i}>
                    {post.data.first_Name}
                    <img alt="avatar" src={post.data.avatar} />
                </div>)}
            </div>
        );
    }
}

//what is passed to the component via props
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { getPostsAction })(FetchData);
