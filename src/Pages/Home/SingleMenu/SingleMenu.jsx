import React, { useContext } from "react";
import "./SingleMenu.css"
import { CartContext } from "../../../Context/CartContext/CartContext";

const SingleMenu = ({ item }) => {
  const { id, name, image, recipe, price } = item;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };
  return (
    <div className="card w-full h-full shadow-xl">
      <figure >
        <img className="w-full h-[300px]" src={image} alt="food" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title lg:text-2xl sm:text-xl font-bold uppercase">{name}</h2>
        <p className=" font-normal">{recipe}</p>
        <p className="text-xl font-bold text-orange-400">${price}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToCart} className="my-3 cart-btn fontPrimary font-bold  uppercase text-orange-400">Add To Cart</button>
        </div>

        
      </div>
    </div>
  );
};

export default SingleMenu;
