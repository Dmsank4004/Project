import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyDTbR6EqHm5Jyz7gEP-RVuWkDlyIFgn26c';

// Create new component. Should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take compenent's HTML and put it o the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));