import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = [
    { id: 1, name: "Product 1", price: 25, quantity: 2 },
    { id: 2, name: "Product 2", price: 30, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <header className="text-gray-400 transition ease-in duration-300 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl cursor-pointer">HSBlogs</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-white transition ease-in duration-300 cursor-pointer"
              to="/"
            >
              {"Home "}
            </Link>
            <Link
              className="mr-5 hover:text-white transition ease-in duration-300 cursor-pointer"
              to="/products"
            >
              {"Products "}
            </Link>
            <a className="mr-5 hover:text-white transition ease-in duration-300 cursor-pointer">
              Profile
            </a>
          </nav>
          <button className="inline-flex items-center transition ease-in duration-300  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Logout
          </button>
        </div>
      </header>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-0">
              Your Shopping Cart
            </h1>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-white text-center">Your cart is empty</p>
          ) : (
            <>
              <div className="flex flex-wrap -m-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 md:w-1/2">
                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <h2 className="text-white text-lg title-font font-medium mb-3">
                        {item.name}
                      </h2>
                      <p className="leading-relaxed text-base">
                        Price: ${item.price} | Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border rounded-lg p-4">
                <h2 className="text-xl font-medium title-font text-white mb-2">
                  Total Price: ${totalPrice}
                </h2>
                <button className="inline-flex items-center transition ease-in duration-300  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                  More Shopping
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
