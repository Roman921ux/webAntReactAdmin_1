import * as React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

const PostsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

export default PostsList;
