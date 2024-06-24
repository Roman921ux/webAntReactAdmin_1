import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { UsersList, UserEdit, UserCreate } from './components/UsersList';
import { PostsList, PostEdit, PostCreate } from './components/PostsList';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate} />
    <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;

