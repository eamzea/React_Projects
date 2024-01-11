import { createContext } from 'react';
import styles from '../../styles/styles.module.scss';
import useProduct from '../../hooks/useProduct';
import {
  ProductContextProps,
  ProductCardProps,
} from 'modules/CompPatterns/interfaces';
import ProductTitle from '../ProductTitle';
import ProductImg from '../ProductImage';
import ProductButtons from '../ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

	return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImg
ProductCard.Buttons = ProductButtons

export default ProductCard;