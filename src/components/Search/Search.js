import React, { useEffect, useRef, useState } from 'react';
import SearchList from 'components/List/List';
import useApi from 'components/utils/useApi';
import './Search.css';

const ComponentSeach = () => {
  const mountRef = useRef(null);
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    debouncedDelay: 500,
    url: 'http://localhost:5000/posts',
    method: 'get',
    params: {
      _order: 'desc',
      name_like: search || undefined,
    },
  });

  useEffect(() => {
    load({
      debounced: mountRef.current,
    });

    if (!mountRef.current) {
      mountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <header>
        <h1>My Social</h1>
        <input type="searchList" placeholder="Search" value={search} onChange={ev => setSearch(ev.target.value)} />
      </header>
      <SearchList searchList={loadInfo.data} loading={loadInfo.loading} error={loadInfo.error} />
    </div>
  );
};

export default ComponentSeach;
