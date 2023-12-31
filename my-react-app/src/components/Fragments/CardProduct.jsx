/* eslint-disable react/prop-types */
import Button from "../Elements/Button/Index";

const CardProduct = ({ children }) => {
  return <div className="w-full max-w-xs bg-gray-800 border-gray-700 rounded-lg shadow m-2 mx-3 flex flex-col justify-between">{children}</div>;
};

const Header = ({ images }) => {
  return (
    <a href="#">
      <img src={images} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ children, name }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">{name}</h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
