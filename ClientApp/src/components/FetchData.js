import React, { Component } from 'react';
import { fetchPosts } from '../services/ApiCalls'

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor() {
        super();
        this.state = { post: null, loading: true };
    }
    async componentDidMount() {
        let response = await fetchPosts();
        this.setState({ post: response.data, loading: false });
    }

    render() {
        const { post } = this.state
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {post && <div>{post.first_Name}</div>}
            </div>
        );
    }
}
