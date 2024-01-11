import { ProductCard } from '../components';

const product = {
  id: '1',
  title: 'Product 1',
  img: '/assets/coffee-mug.png',
};

const Shopping = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default Shopping;
