import ProductTable from "../productTable/ProductTable";
import SearchBar from "../searchBar/SearchBar";

export default function FilterableProductTable() {
    return (
        <div>
         <SearchBar />
         <ProductTable /> 
        </div>
    )
};
