import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const wiki =
//   'https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=computer';

function List() {
  const [term, setTerm] = useState('computer');
  const [results, setResults] = useState([]);

  console.log(results);
  //useEffect
  useEffect(() => {
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(response.data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [term]);

  const onInputChange = e => {
    setTerm(e.target.value);
  };

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button'>Go</a>
        </div>
        <div className='header'>{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });
  return (
    <div>
      <div className='ui segment'>
        <div className='ui icon input'>
          <input
            onChange={e => {
              onInputChange(e);
            }}
            value={term}
            type='text'
            placeholder={term}
          />
          <i className='search icon'></i>
        </div>
      </div>

      <div className='ui list'>{renderedResults}</div>
    </div>
  );
}

export default List;
