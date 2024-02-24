

const cartReducer = (state, action) => {
    console.log(action);
    switch (action.type){
        // eğer aksiyon type'ı "ADD_TO_CARD" ise
        case "ADD_TO_CART" :
    // state içindeki sepeti dizisine yeni bir ürün eklenir
  return {cart: [...state.cart, action.payload] };
  // eğer aksiyon type'ı "REMOVE_FROM_CART" ise
  case "REMOVE_FROM_CART":
    // state içindeki sepet dizisinden belirli bir ürün çıkarılır.
    return {cart:state.cart.filter((item) =>item.id !== action.payload)} 
    // varsayılan durum, herhangi bir aksiyon türü eşleşmezse
  default;
  // mevcut durumu döndür
  return state;
  }
};

export default cartReducer
