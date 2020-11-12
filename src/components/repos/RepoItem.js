import React from 'react';
import propTypes from 'prop-types';

RepoItem.propTypes = {
  repo: propTypes.object.isRequired,
};
export default function RepoItem({ repo }) {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}
