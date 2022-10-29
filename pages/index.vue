<template>
  <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <h2>Store</h2>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="4" v-for="(product, index) in $store.getters['getProductsStock']" class="pa-2" :key="index">
            <v-card class="pa-2">
              <v-img :src="product.url" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                <v-card-title v-text="product.name"></v-card-title>
              </v-img>
              <v-card-actions>
                <p>${{product.price}}</p>
                <v-spacer></v-spacer>
                <v-btn icon color="pink" v-on:click="addtoCart(index, product.name, product.price, product.url, product.description)">
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-badge v-if="product.quantity>0" color="pink" :content="product.quantity"></v-badge>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <h2>Shopping Cart</h2>
        <v-card class="pa-2" outlined tile>

          <v-list rounded v-if="$store.getters['getCart'].length>0">
            <v-list-item-group color="primary">
              <v-list-item two-line v-for="(product, index) in $store.getters['getCart']" :key="index">
                <v-list-item-avatar>
                  <v-img
                    :alt="`${product.name} avatar`"
                    :src="product.url"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="product.name"></v-list-item-title>
                  <v-list-item-subtitle>{{product.description}}</v-list-item-subtitle>
                </v-list-item-content>
                {{product.quantity}}
                <v-btn class="mx-2" fab dark small color="gray">
                  <v-icon dark v-on:click="increment(index)">
                    mdi-plus
                  </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="secondary">
                  <v-icon dark v-on:click="decrement(index)">
                    mdi-minus
                  </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="pink">
                  <v-icon dark v-on:click="deleteItem(index)">
                    mdi-close
                  </v-icon>
                </v-btn>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <Center v-else><p>Por favor elige un producto de la izquierda</p></Center>

          <br>
          <h3>TOTAL $ {{$store.getters['getTotal']}}</h3>
          <Center>
              <script
                src="https://checkout.wompi.co/widget.js"
                data-render="button"
                data-public-key="pub_test_Kw4aC0rZVgLZQn209NbEKPuXLzBD28Zx"
                data-currency="COP"
                :data-amount-in-cents="(($store.getters['getTotal']===0)?1:$store.getters['getTotal'])"
                data-reference="4XMPGKWWPKWQ"
                data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
                >
              </script>
          </Center>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      // products:[
      //   {name:"De todito", price:1500, url:"https://copservir.vtexassets.com/arquivos/ids/772023/DETODITO-PAKETON-BBQ_F.png?v=637951129558800000"},
      //   {name:"Chocorramo", price:2000, url:"https://jumbocolombiaio.vtexassets.com/arquivos/ids/201758/7702914596787.jpg?v=637814154800000000"},
      //   {name:"Zucaritas en caja", price:16500, url:"https://cdn.miaguila.com/images/alkosto/7702103015082.jpg"},
      //   {name:"Leche Alquería", price:3600, url:"https://supertiendascomunal.com/5476-large_default/leche-entera-alqueria-13-ml.jpg"}
      // ],
      storedProducts:[]
    }
  },
  methods: {
    addtoCart(index, name, price, url, description){
      let element = {id:index, name:name, price:price, url:url, quantity:1, description:description};

      const search = this.$store.state.cart.find( product => product.name === name );
      let indice = this.$store.state.cart.findIndex(product => product.name === name);

      if(search===undefined){//No existe
        this.$store.state.element = element;
        this.$store.dispatch('addProductAction');
      }else{//Si existe
        // this.$store.dispatch('incrementQuantityAction',indice);
      }

    },
    increment(index){
      this.$store.dispatch('incrementQuantityAction',index);
    },
    deleteItem(index){
      this.$store.dispatch('deleteProductOnCartAction',index);
    },
    decrement(index){
      this.$store.dispatch('decrementQuantityAction',index);
    }
  }
}
</script>
