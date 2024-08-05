import './styles.product/productCard.css';

import { Tooltip } from 'react-tooltip';
import { useState } from 'react';

import Loader from './Loader';
import ProductDetail from './ProductDetail';

const ProductCard = ({
  title,
  price,
  description,
  image,
  category,
  rating,
  count,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardOnCLickHandler = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <section className="productItemCard" onClick={cardOnCLickHandler}>
        <div
          data-tooltip-id={title}
          data-tooltip-content={title}
          className="productTitle">
          {title}
          <Tooltip id={title} />
        </div>
        <br />
        <div>{price} $ </div>
        <br></br>

        <div>{category}</div>
        <br />
        {image ? (
          <img
            src={image}
            alt={`${category} - ${title}`}
            width={180}
            height={180}
          />
        ) : (
          <Loader size="150"></Loader>
        )}
        <br />
        <div>
          Rating: ({rating} /5) out of {count}
        </div>
        <br />
      </section>

      {isModalOpen && <ProductDetail onClose={closeModal} title={title} />}
    </div>
  );
};

export default ProductCard;
