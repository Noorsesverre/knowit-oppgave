import React from 'react';

// Styling in same document due to project size being small
const styles = {
    container: {
        boxShadow: '2px 2px darkgrey',
        boxSizing: 'border-box',
    },
    button_active: {
        width: '100px',
        height: '50px',
        border: 'none',
        backgroundColor: '#A0DDE6',
        fontSize: '20px',
        outline: 'none',
        cursor: 'pointer',
    },
    button_default: {
        width: '100px',
        height: '50px',
        border: 'none', 
        boxSizing: 'border-box',
        backgroundColor: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        outline: 'none',
    },
    lastItem: {
        backgroundColor: 'red'
    }
}

// Create array from props recieved and use props function to update current page. Simple conditional styling on buttons
export default function PaginationButton({ currentPage, setCurrentPage, numberOfPages }) {
  return (
    <div style={styles.container}>
        {Array.from({ length: numberOfPages }, (v, k) => k + 1).map(elem => (
            <button 
                key={elem}
                style={(elem === currentPage ? styles.button_active : styles.button_default) } 
                onClick={() => setCurrentPage(elem)}
            >
                {elem}
            </button>
            ))
        }
    </div>
  );
}
