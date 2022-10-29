import React, {useState} from 'react';
const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const cartLenght = cart.length;
    const deleteAllProducts = () => {
        setCart([]);
    }
    
    const deleteProduct = (id) => {
        const newCart = cart.filter ((item) =>item.info.id !==id);
        console.log(newCart);
        setCart(newCart);
    }

    const addProductToCart = (product, quantity) => {
        const productIndex = cart.findIndex(
            (cartProduct) => cartProduct.info.id === product.info.id
        );
        if (productIndex > -1) {
            
            setCart((cart) =>
                cart.map((cartProduct) => {
                    if (cartProduct.info.id === product.info.id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + quantity,
                        };
                    }
                    return cartProduct;
                })
            );
        } else {
            
            product.quantity = quantity;
            console.log("he agregado la cantidad")
            console.log(product)
            setCart([...cart, product]);
            console.log(cart)
        }
    }
   

return (
    <CartContext.Provider value= {{cart,setCart,addProductToCart, deleteAllProducts, deleteProduct, cartLenght}}>
        {children}
    </CartContext.Provider>
)
}
export {CartContext, CartProvider};