import { useState } from 'react';
const Search = ({ onClick }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // If no text
        if (!text) {
            alert('Please add a username');
            return;
        }

        onClick(text);
    };

    return (
        <form className='user-form' onSubmit={onSubmit}>
            <div className='container_input'>
                <input placeholder='Enter a username to grab their user profile' type='input' onChange={(e) => setText(e.target.value)} />
                <input id='search-btn' className='search-btn' type='submit' value='Search' />
            </div>
        </form>
    );
};

export default Search;
