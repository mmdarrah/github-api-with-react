import React, { Fragment } from 'react';
import Search from '../../components/users/Search';
import Users from '../../components/users/Users';

export default function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}
