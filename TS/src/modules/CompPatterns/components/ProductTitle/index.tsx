import { useContext } from "react";
import styles from '../../styles/styles.module.scss';
import { ProductContext } from "../ProductCard";

const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.producDescription}>{title ?? product.title}</span>
  );
};

export default ProductTitle