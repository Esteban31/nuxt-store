<template>
  <v-app dark>
   <v-app-bar
      absolute
      color="white"
    >
      <v-btn icon color="pink">
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-chip
        class="ma-2"
        color="pink"
        text-color="white"
      >
        $ {{$store.getters['getTotal']}}
        <v-icon right>
          mdi-cart
        </v-icon>
         <v-btn class="mx-2" fab dark small color="pink" v-if="$store.getters['getTotal']>0" v-on:click="emptyCart()">
            <v-icon dark>
              mdi-close
            </v-icon>
          </v-btn>
      </v-chip>
    </v-app-bar>
    <v-main>
      <v-container style="margin-top:10%;">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Fake Store',
      totalProducts:0
    }
  },
  methods:{
    emptyCart(){
      this.$store.dispatch('emptyCartAction');
    }
  }
}
</script>
