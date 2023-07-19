/* eslint-disable react/prop-types */
import { register } from "swiper/element/bundle";
register();

import { Card } from "./Card";

export const Slider = ({ data }) => {
  return (
    <div className="slider--container">
      <swiper-container
        slides-per-view="3"
        speed="500"
        loop="true"
        css-mode="true"
        space-between="30"
      >
        {data &&
          data.map((product) => (
            <swiper-slide key={product.id} lazy="true">
              <Card
                id={product.id}
                title={product.title}
                description={product.description}
                brand={product.brand}
                price={product.price}
                quantity={product?.quantity}
                subtotal={product?.subtotal}
                direction="row"
                isFavourite={product?.isFavourite}
                image={product?.images[0]}
              />
            </swiper-slide>
          ))}
      </swiper-container>
    </div>
  );
};
