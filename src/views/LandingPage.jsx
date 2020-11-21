/* eslint-disable valid-jsdoc */
/* eslint-disable react/no-array-index-key */
import React, { Fragment, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

// Components
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import Loader from "../components/Loader";

// CSS
import "../css/LandingPage.css";

// Queries
import { getCurrenciesQuery, getProductsQuery } from "../queries";

const formatAmount = (amount, currency) => {
  return amount.toLocaleString("en", {
    style: "currency",
    currency
  });
};

const LandingPage = () => {
  const [state, setState] = useState({
    products: [],
    cart: [],
    showCart: false,
    activeCurrency: "USD",
    currencyOptions: ["USD", "NGN"]
  });
  const { data: currencyData } = useQuery(getCurrenciesQuery);
  const { data: productsData, loading: productsLoading } = useQuery(
    getProductsQuery,
    {
      variables: { currency: state.activeCurrency }
    }
  );

  useEffect(() => {
    if (currencyData) {
      setState({
        ...state,
        currencyOptions: currencyData?.currency
      });
    }
  }, [currencyData]);

  const getUpdatedCart = updatedProducts => {
    const { cart } = state;

    if (!cart.length) {
      return [];
    }

    return cart.map(cartItem => ({
      ...cartItem,
      price: updatedProducts.find(product => product.id === cartItem.id).price
    }));
  };

  useEffect(() => {
    if (productsData) {
      const { products } = productsData;
      setState({
        ...state,
        products,
        cart: getUpdatedCart(products)
      });
    }
  }, [productsData]);

  const toggleCartDisplay = () => {
    const { showCart } = state;

    setState({
      ...state,
      showCart: !showCart
    });
  };

  const changeCurrency = e => {
    setState({
      ...state,
      activeCurrency: e.target.value
    });
  };

  const addToCart = id => {
    const { cart, products } = state;

    const itemInCart = cart.find(item => item.id === id);

    if (itemInCart) {
      itemInCart.quantity += 1;
      setState({
        ...state,
        showCart: true
      });
    } else {
      const chosenProduct = products.find(product => product.id === id);
      setState({
        ...state,
        showCart: true,
        cart: [
          ...cart,
          {
            quantity: 1,
            ...chosenProduct
          }
        ]
      });
    }
  };

  const changeQuantity = (id, quantity) => {
    const { cart } = state;

    if (!quantity) {
      setState({
        ...state,
        cart: cart.filter(item => item.id !== id)
      });
    } else {
      const cartItem = cart.find(item => item.id === id);
      cartItem.quantity = quantity;
      setState({
        ...state
      });
    }
  };

  const getTotal = () => {
    const { cart } = state;

    return cart.reduce(
      (acc, currVal) => acc + currVal.quantity * currVal.price,
      0
    );
  };

  const getCartNumber = () => {
    const { cart } = state;

    return cart.reduce((acc, currVal) => acc + currVal.quantity, 0);
  };
  const { products, showCart, activeCurrency, currencyOptions, cart } = state;

  return (
    <Fragment>
      <Navbar cartNo={getCartNumber()} openCart={toggleCartDisplay} />
      <main className="landing-page">
        <section className="landing-page-header">
          <div>
            <h1>All Products</h1>
            <p>A 360° look at Lumin</p>
          </div>
        </section>

        <section className="landing-page-products">
          {!productsLoading && (
            <div>
              {products.map((product, i) => (
                <ProductCard
                  key={i}
                  {...product}
                  image={product.image_url}
                  priceText={`From ${formatAmount(
                    product.price,
                    activeCurrency
                  )}`}
                  handleAddToCart={() => addToCart(product.id)}
                />
              ))}
            </div>
          )}
          {productsLoading && (
            <div className="loader-wrapper">
              <Loader />
            </div>
          )}
        </section>

        <div className={`landing-page-cart ${showCart ? "open" : ""}`}>
          <div
            className="landing-page-cart-bg"
            onClick={toggleCartDisplay}
            role="presentation"
          />
          <div className="landing-page-cart-sidebar">
            <h2>YOUR CART</h2>

            <button
              className="cart-close-btn"
              type="button"
              onClick={toggleCartDisplay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 492.004 492.004"
              >
                <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"></path>
              </svg>
            </button>

            <div className="cart-currency">
              <select value={activeCurrency} onChange={changeCurrency}>
                {currencyOptions.map(currency => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            {cart.length === 0 && (
              <p className="empty-cart-text">There are no items in your cart</p>
            )}

            {cart.length > 0 && (
              <Fragment>
                {productsLoading && (
                  <div className="loader-wrapper">
                    <Loader />
                  </div>
                )}
                {!productsLoading && (
                  <Fragment>
                    <div className="cart-items">
                      {cart.map(item => (
                        <CartItem
                          {...item}
                          image={item.image_url}
                          changeQuantity={quantity =>
                            changeQuantity(item.id, quantity)
                          }
                          priceText={formatAmount(
                            item.price * item.quantity,
                            activeCurrency
                          )}
                          key={item.id}
                        />
                      ))}
                    </div>
                    <hr />
                    <div className="cart-total">
                      <span>Subtotal</span>
                      <span>{formatAmount(getTotal(), activeCurrency)}</span>
                    </div>
                    <button className="black-btn checkout-btn" type="button">
                      PROCEED TO CHECKOUT
                    </button>
                  </Fragment>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default LandingPage;
