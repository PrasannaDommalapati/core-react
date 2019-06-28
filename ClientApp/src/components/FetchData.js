import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor() {
        super();
        this.state = { data: [], loading: true };     
    }
    async componentDidMount() {
        let data = await fetch('api/Rest/Test');
        this.setState({data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.data;

        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
