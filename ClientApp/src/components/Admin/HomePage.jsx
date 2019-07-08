import React, { Component } from 'react'
import { connect } from 'react-redux';

export class _HomePage extends Component {

    constructor() {
        super();
        console.log(this.props)
        this.state = {
          articles: [
            { title: "React Redux Tutorial for Beginners", id: 1 },
            { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
          ]
        };
      }
    render() {
        return <div className="row">
          
        </div>
    }
}

export default connect()(_HomePage);
