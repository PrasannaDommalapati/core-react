import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import DropZone from './components/DropZone';
import Editor from './components/Editor';
import _HomePage from './components/Admin/HomePage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/upload' component={DropZone} />
        <Route path='/editor' component={Editor} />
        <Route path='/home' component={_HomePage} />
      </Layout>
    );
  }
}
