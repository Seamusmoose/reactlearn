import { tab } from "@testing-library/user-event/dist/tab";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductTableHeader from "./ProductTableHeader";
import ProductRow from "./ProductRow";
export default function ProductTable() {
  return (
    <div>
      <ProductTableHeader />
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}
