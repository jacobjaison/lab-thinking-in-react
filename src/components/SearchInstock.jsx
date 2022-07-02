import React from 'react'


const SearchInstock = ({searchedInStock, setSearchedInStock}) => {
    
  return <div>
  <br />
    <input type="checkbox" className ='searchedInStock' id='searchedInStock' onChange= {(e) => setSearchedInStock(e.target.checked)}
    />
    <label forHTML='searchedInStock'> Only Show Products in stock  </label>

    <hr />
  </div>
  
  
}

export default SearchInstock