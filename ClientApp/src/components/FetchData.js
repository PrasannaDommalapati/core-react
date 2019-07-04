import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor() {
        super();
        this.state = { data: [], loading: true };
    }
    async componentDidMount() {
        let response = await fetch('api/Rest/Test').then(res => res.json());
        this.setState({ data: response.data, loading: false });
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {data && <div>{data.name}</div>}
            </div>
        );
    }
}
