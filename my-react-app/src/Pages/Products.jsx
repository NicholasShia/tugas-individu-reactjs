import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero temporibus voluptates aliquam voluptatem impedit dolores sapiente illo sit repellat quo quaerat officiis officia eos fuga quod eligendi.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero temporibus voluptates aliquam voluptatem.`,
  },
  {
    id: 3,
    name: "Sepatu Nicholas",
    price: 2500000,
    image: "/images/shoes-1.jpg",
    description: `Ini adalah sepatu keluaran terbaru. Sepatu Brand Local Buatan Nicholas.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPages = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-7">
        {email}
        <Button classname="ml-5 bg-slate-800" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header images={product.image} />
                <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-3 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPages;
