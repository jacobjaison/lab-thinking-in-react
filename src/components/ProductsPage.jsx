import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import SearchInstock from './SearchInstock';
import ProductTable from './ProductTable';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    const [searchedString, setSearchedString] = useState("")
    const [searchedInStock, setSearchedInStock] = useState(false);
   
    let searchedFoundProducts = null;

   /* searchedProducts !== '' ? (searchedProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchedString.toLowerCase())
    }))
    : (searchedProducts = products)
*/

    searchedInStock && searchedString !== '' ? (searchedFoundProducts = products.filter(product => {
        return product.inStock === searchedInStock && product.name.toLowerCase().includes(searchedString.toLowerCase());
    }))
    : searchedString !== '' ? (searchedFoundProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchedString.toLowerCase())
    })) 
    :  searchedInStock  ? (searchedFoundProducts = products.filter(product => {
        return product.inStock === searchedInStock}))
        : (searchedFoundProducts = products);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar searchedString={searchedString} 
                setSearchedString={setSearchedString}
            />
            <SearchInstock searchedInStock = {searchedInStock}
                setSearchedInStock = {setSearchedInStock}
            />

            <ProductTable products = {searchedFoundProducts}/>

        </div>
    )
}

export default ProductsPage;