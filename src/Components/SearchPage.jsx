import React from 'react';
import './searchPage.css';
import { Link } from 'react-router-dom';

const SearchPage = () => {

  const [searchQuery,setSearchQuery] = React.useState('');
  const [searchHistory, SetSearchHistory] = React.useState([]);

  const handleSearch = () => {
    if(searchQuery.trim() !== ''){
      SetSearchHistory(prevHistory => {
        const updatedHistory = Array.isArray(prevHistory) ? [...prevHistory, searchQuery] : [searchQuery];
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        return updatedHistory;
      });
      //onSearch(searchQuery);
      setSearchQuery('');
    }
  };

  React.useEffect(() => {
    // get saved data
    try {
      const savedHistoryString = localStorage.getItem('searchHistory');
      const savedHistory = JSON.parse(savedHistoryString) || [];
      SetSearchHistory(savedHistory);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }, []);

  

  const handleClick = (event) => {
    if(event.key === "Enter"){
      handleSearch();
    }
  }

  const handleHistoryItemClick = (query) => {
    setSearchQuery(query);
    //onSearch(query);
  };

  const handleRemoveItemClick = (index) => {
    SetSearchHistory(prevHistory => {
      const updatedHistory = [...prevHistory];
      updatedHistory.splice(index, 1);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
    // console.log(searchHistory);
  }

  return (
    <div>
      <div className='search-page'>
        <Link to="/" className='link'>
          <i className='material-icons'>arrow_back</i>
        </Link>
        <input 
        type='text'
        id='searchQuery' 
        placeholder='Search Youtube' 
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={handleClick}
        />
        <p><i className='material-icons'>mic</i></p>
      </div>
      <ul className='search-history'>
        {searchHistory.map((query, index) => (
          <li key={index}>
            <i onClick={() => handleHistoryItemClick(query)} className='material-icons'>history</i>
            <span >{query}</span>
            <i className='material-icons' onClick={() => handleRemoveItemClick(index)}>close</i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPage;