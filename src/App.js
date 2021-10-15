import React from 'react';
import SearchCard from 'components/Search/Card/Card';

function App() {
  const card = {
    _id: '5f1d7f3e5dc58af42fc39242',
    index: 0,
    picture: 'https://i.pravatar.cc/200?u=5f1d7f3e5dc58af42fc39242',
    age: 32,
    eyeColor: 'blue',
    name: 'Dotson Jennings',
    company: 'HOPELI',
    email: 'dotsonjennings@hopeli.com',
    phone: '+1 (919) 551-3493',
    friends: [
      {
        _id: '5f1d7f3e8882c9c811b111ce',
        index: 0,
        picture: 'https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce',
        age: 23,
        eyeColor: 'green',
        name: 'Patti Mckenzie',
        company: 'DAISU',
        email: 'pattimckenzie@daisu.com',
        phone: '+1 (960) 566-3327',
      },
    ],
  };

  return (
    <div>
      <SearchCard card={card} />
    </div>
  );
}

export default App;
