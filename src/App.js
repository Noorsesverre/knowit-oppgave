import React, { useEffect, useState } from 'react';
import List from './List';
import PaginationButton from './PaginationButton';

const url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100"

// Styling in same document due to project size being small
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'space-around',
    background: 'linear-gradient(90deg, #5C946E 0%, #80C2AF 50%, #A0DDE6 100%)',
  },
  title: {
    color: '#fff',
    fontSize: '50px',
    textShadow: '2px 2px #000'
  }
}


function App() {

  // useState for things that change, and const for value used in pagination logic.
  const [ loading, setLoading ] = useState(true)
  const [ repositories, setRepositories ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1);
  const paginationLength = 20;
  const numberOfPages = repositories.length / paginationLength;

  // Fetch logic in a useEffect for proper lifecycle
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>  { 
      setRepositories(data.items);
      setLoading(false) 
    })
    .catch(err => console.log(err))
  }, [])

  // Pagination logic
  const lastIndex = currentPage * paginationLength;
  const firstIndex = lastIndex - paginationLength;
  const currentRepos = repositories.slice(firstIndex, lastIndex);

  
  // Simple return, passing props to components that interact with them.
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Most popular JS repositories on GitHub</h1>
      <List list={currentRepos}/>
      { loading && <h1 style={styles.title}>Loading...</h1>}
      <PaginationButton setCurrentPage={setCurrentPage} currentPage={currentPage} numberOfPages={numberOfPages}/>
    </div>
  );
}

export default App;
