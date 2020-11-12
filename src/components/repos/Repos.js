import React from 'react';
import RepoItem from './RepoItem';
import propTypes from 'prop-types';

Repos.propTypes = {
  repos: propTypes.array.isRequired,
};

export default function Repos({ repos }) {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
}
