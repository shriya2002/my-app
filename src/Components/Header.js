import React from 'react'

const Header = () => {
  return (
    <header className="row block center">
      <div>
        <a href="/">
          <h1> Small shopping cart</h1>
        </a>
      </div>
      <div>
        <a href="/Cart">Cart</a> <a href="/signin">signin</a>
      </div>
    </header>
  );
}

export default Header
