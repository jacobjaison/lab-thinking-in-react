import React from 'react'

const SearchBar = ({searchedString, setSearchedString}) => {
        return <input type="text" placeholder='Search'  value={searchedString}
            onChange = {(e) => setSearchedString(e.target.value)}
        />
    }  

export default SearchBar