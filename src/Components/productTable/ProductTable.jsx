import { tab } from "@testing-library/user-event/dist/tab";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductTableHeader from "./ProductTableHeader";
import ProductRow from "./ProductRow";
export default function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductRow
          key={product.category}
          category={product.category}
        />
      );

    }
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <ProductTableHeader />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
