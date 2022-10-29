export const state = () => ({
    counter: 0,
    cart:[],
    elemento:null,
    productsStock:[
      {name:"De todito", price:1500, url:"https://copservir.vtexassets.com/arquivos/ids/772023/DETODITO-PAKETON-BBQ_F.png?v=637951129558800000",description:'Some abut this product'},
      {name:"Chocorramo", price:2000, url:"https://jumbocolombiaio.vtexassets.com/arquivos/ids/201758/7702914596787.jpg?v=637814154800000000",description:'Some abut this product'},
      {name:"Zucaritas en caja", price:16500, url:"https://cdn.miaguila.com/images/alkosto/7702103015082.jpg",description:'Some abut this product'},
      {name:"Leche Alquería", price:3600, url:"https://supertiendascomunal.com/5476-large_default/leche-entera-alqueria-13-ml.jpg",description:'Some abut this product'},
      {name:"Milo", price:4500, url:"https://mercaldas.vtexassets.com/arquivos/ids/227388/MILO-x500-g_79322.jpg?v=637795818162600000",description:'Some abut this product'},
      {name:"Chocolisto", price:4000, url:"https://jumbocolombiaio.vtexassets.com/arquivos/ids/185312/7702007216066.jpg?v=637813978496500000",description:'Some abut this product'}
    ]
  })
  
  export const getters = {
    getProductsStock(state){
      return state.productsStock;
    },
    getCart(state){
      return state.cart;
    },
    getTotal(state){
      let total=0;
      state.cart.forEach(function(a){total += a.quantity*a.price;});
      return total;
    }
  }
  
  export const mutations = {
    addProduct(state){
      state.cart.push(state.element);
    },
    incrementQuantity(state, position){
      state.cart[position].quantity+=1;
    },
    deleteProductOnCart(state,position){
      state.cart.splice(position)
    },
    decrementQuantity(state, position){
      if (state.cart[position].quantity<1) {//Si es menor a 1 eliminamos el producto del carrito
        state.cart.splice(position)
      }else{//Sino le decrementamos
        state.cart[position].quantity-=1;
      }
    },
    emptyCart(state){
      state.cart = [];
    }
  }
  
  export const actions = {
    addProductAction(context){
      context.commit('addProduct');
    },
    incrementQuantityAction(context,position){
      context.commit('incrementQuantity',position);
    },
    deleteProductOnCartAction(context,position){
      context.commit('deleteProductOnCart',position);
    },
    decrementQuantityAction(context,position){
      context.commit('decrementQuantity',position);
    },
    emptyCartAction(context){
      context.commit('emptyCart');
    }
  }