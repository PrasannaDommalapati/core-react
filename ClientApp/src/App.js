import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import FetchData  from './components/FetchData';
import DropZone from './components/DropZone';
import CoursePage from './components/CoursePage';

export default class App extends Component {
    static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/upload' component={DropZone} />
        <Route path='/course' component={CoursePage} />
      </Layout>
    );
  }
}
