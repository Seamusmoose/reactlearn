import ProductTable from "../productTable/ProductTable";
import SearchBar from "../searchBar/SearchBar";

export default function FilterableProductTable({ products }) {
   
    return (
        <div>
         <SearchBar products={products}/>
         <ProductTable products={products} /> 
        </div>
    )
};
