import React, { useEffect, useRef, useState } from "react";

import {
  setQuery,
  setStartFetching,
  setFetchingSucccess,
  setFetchingError,
} from "../utils/githubSearch";
import { useSelector, useDispatch } from "react-redux";

//{/* //https://api.github.com/search/users?q={query} */}

const GithubSearch = () => {
  const dispatch = useDispatch();
  const { query, users, loading, error } = useSelector(
    (state) => state.githubsearch
  );

  const debouncRef = useRef(null);

  const handelChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  useEffect(() => {
    if (!query) {
      dispatch(setFetchingSucccess([]));
      return;
    }

    if (debouncRef.current) {
      clearTimeout(debouncRef.current);
    }

    debouncRef.current = setTimeout(async () => {
      dispatch(setStartFetching());

      try {
        const res = await fetch(
          `https://api.github.com/search/users?q=${query}`
        );

        if (!res.ok) {
          throw new Error("fetching request failed");
        }

        const data = await res.json();

        dispatch(setFetchingSucccess(data?.items));
      } catch (error) {
        dispatch(setFetchingError(error.message));
      }
    }, 500);
    return () => clearTimeout(debouncRef.current);
  }, [query, dispatch]);

  return (
    <div>
      <h2>Github user search</h2>

      <input
        type="text"
        placeholder="Enter your github username"
        value={query}
        onChange={handelChange}
      />

      <div>
        {/* to display users */}

        {loading && <h2>Data is loading...</h2>}
        {error && <p>Error while fetching</p>}

        <ul>
          {users.map((u) => {
          return  <li key={u.id}>{u.login}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default GithubSearch;
