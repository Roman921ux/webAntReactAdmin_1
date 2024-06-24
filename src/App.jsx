import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import UsersList from './components/UsersList';
import PostsList from './components/PostsList';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} />
    <Resource name="posts" list={PostsList} />
  </Admin>
);

export default App;
