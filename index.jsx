
import React, { useState } from 'react';

  const List = () => {
    const dataset = [
        { id: 7, avatar: 'https://reqres.in/img/faces/7-image.jpg ', first_name: 'Michael' },
        { id: 8, avatar: 'https://reqres.in/img/faces/8-image.jpg', first_name: 'Lindsay' },
        { id: 9, avatar: 'https://reqres.in/img/faces/9-image.jpg', first_name: 'Tobias' },
        { id: 10,avatar: 'https://reqres.in/img/faces/10-image.jpg', first_name: 'Byron' },
        { id: 11,avatar: 'https://reqres.in/img/faces/11-image.jpg', first_name: 'George' },
        { id: 12,avatar: 'https://reqres.in/img/faces/12-image.jpg', first_name: 'Rachel' },
    ]; 
  
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const Data = dataset.filter((item) =>
      item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className='container'>
        
        <input className='textbox'
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearch}/>
        {Data.map((item) => (
          <div key={item.id} className="list-item">
            <div className='id-container'>{item.id}</div>
            <img src={item.avatar} alt="Avatar" className="avatar" />
            <span>{item.first_name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default List;
  