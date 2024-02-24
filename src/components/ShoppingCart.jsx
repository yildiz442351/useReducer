import { removeFromCart } from "../actions/cartActions"

const ShoppingCart = () => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartReducer.map((item) => (
                    <li key={item.id}>
                        {item.name}-$ {item.price}
                        <button onClick={() => dispatchEvent(removeFromCart(item.id))}>
                            Remove from Cart
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default ShoppingCart
