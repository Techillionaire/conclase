import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <div className="logo">Conclase</div>
            </div>

            <div className="middle">
                <ul>
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/shop">Shop</a>
                </ul>
            </div>

            <div className="right">
                <img src="./assets/shopping_cart_black_24dp.svg" alt="cart-icon" />
                <img src="./assets/account_circle_black_24dp.svg" alt="user-icon" />
            </div>
        </nav>
    )
}

export default Navbar
