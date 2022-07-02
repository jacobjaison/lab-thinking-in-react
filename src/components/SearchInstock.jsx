import React from 'react'


const SearchInstock = ({searchedInstock, setSearchedInstock}) => {
    
  return <div>
  <br />
    <input type="checkbox" className ='searchedInstock' id='searchedInstock' onChange= {(e) => setSearchedInstock(e.target.checked)}
    />
    <label forHTML='searchedInstock'> Only Show Products in stock  </label>

    <hr />
  </div>
  
  
}

export default SearchInstock