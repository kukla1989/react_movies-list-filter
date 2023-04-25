import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === ' ') {
      return event.target.value;
    }

    return setQuery(event.target.value.trim());
  };

  const VisibleMovies = moviesFromServer.filter(movie => {
    const queryLower = query.toLowerCase();

    return movie.title.toLowerCase().includes(queryLower)
      || movie.description.toLowerCase().includes(queryLower);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={VisibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
