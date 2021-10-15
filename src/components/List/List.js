import React from 'react';
import SearchCard from 'components/Card/Card';
import './List.css';

const SearchListCom = ({ loading, error, searchList }) => {
  if (error) {
    return <div>Algo esta errado.</div>;
  }
  if (loading || searchList === null) {
    return <div>Carregando...</div>;
  }
  if (searchList.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }
  return (
    <div className="search_list">
      {searchList.map(searchList => (
        <SearchCard searchList={searchList} />
      ))}
    </div>
  );
};

export default SearchListCom;
