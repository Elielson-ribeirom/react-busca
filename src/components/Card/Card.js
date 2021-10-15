import React from 'react';
import './Card.css';

const SearchCard = ({ searchList }) => (
  <div className="card">
    <img src={searchList.picture} alt={searchList.name} />
    <span>
      Name: <p>{searchList.name}</p>
    </span>
    <span>
      Age: <p>{searchList.age}</p>
    </span>
    <span>
      EyeColor: <p>{searchList.eyeColor}</p>
    </span>
    <span>
      Company: <p>{searchList.company}</p>
    </span>
    <span>
      Email: <p>{searchList.email}</p>
    </span>
  </div>
);

export default SearchCard;
