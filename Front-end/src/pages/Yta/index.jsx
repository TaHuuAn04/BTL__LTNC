import classNames from 'classNames/bind';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../SearchContext";
import styles from "./Yta.module.scss";

const cx = classNames.bind(styles)

function Product(props) {
  return (
    <Link to={`/nurse-detail/${props.id}`} className={cx("nurse-card")}>
      <div className={styles.stproduct}>
        <img
          className={cx("nurse-img")}
          src={props.imgUrl}
          alt={props.name}
        />
        <p  className={cx("nurse-name")}>
          {props.name}
        </p>
        {/* bo sung field cua y ta */}
      </div>
    </Link>
  );
}

function Yta() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { searchTerm } = useSearch();
  const [products, setProducts] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <a
        href="#"
        onClick={() => paginate(number)}
        className={
          number === currentPage ? cx("currentPage") : cx("nonCurrentPage")
        }
      >
        {number}
      </a>
    </li>
  ));

  useEffect(() => {
    if (searchTerm) {
      setIsSearch(true);
      fetch(`http://localhost:4001/api/search?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    } else {
      setIsSearch(false);
      fetch("http://localhost:3000/nurses")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, [searchTerm]);

  const listProducts = (
    <ul className={styles.listProducts}>
      {products.map((product, index) => (
        <li key={index} className={styles.listProductsEle}>
          <Product
            id={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
          />
        </li>
      ))}
    </ul>
  );

  // const content =
  // <div className={styles.content}>
  // {listProducts}
  // <ul className={styles.pagination}>{renderPageNumbers}</ul>
  // </div>;

  const content = (
    <div className={styles.content}>
      <ul className={styles.listProducts}>
        {currentProducts.map((product, index) => (
          <li key={index} className={styles.listProductsEle}>
            <Product
              id={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      {isSearch ? (
        <p id="search-result">Kết quả tìm kiếm cho "{searchTerm}":</p>
      ) : null}
      {content}
      <ul className={styles.pagination}>{renderPageNumbers}</ul>

    </React.Fragment>
  );
}
export default Yta;
export { Product };
