import React, { Component } from 'react';
import {fetchPosts} from '../services/ApiCalls'

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor() {
        super();
        this.state = { data: [], loading: true };
    }
    async componentDidMount() {
        let response = await fetchPosts();
        this.setState({ data: response, loading: false });
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {data && data.map((post,index) => <div key={index}>{post.name}</div>)}
            </div>
        );
    }
}
