import { useContext } from "react";
import styles from '../../styles/styles.module.scss';
import { ProductContext } from "../ProductCard";
import NoImage from '../../assets/no-image.jpg';

const ProductImg = ({ img }: { img?: string | undefined }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = NoImage;
  }

  return <img src={imgToShow} alt="Image" className={styles.img} />;
};

export default ProductImg