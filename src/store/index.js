import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    stocks: [],
    orders: [],

  },
  mutations: {

    createnewstock (state, pay) {
      state.stocks.push(pay)
    },

    stockset (state, pay) {
      state.stocks = pay
    },

    createneworder (state, pay) {
      state.orders.push(pay)
    },

    orderset (state, pay) {
      state.orders = pay
    }



  },
  actions: {

    fetchOrders ({commit}) {
      firebase.database().ref('orders').once('value')
      .then((data) => {
        const order = []
        const obj = data.val()
        for(let key in obj) {
          order.push({
              id: key,
              item: obj[key].item,
              quantity: obj[key].number,
              phone: obj[key].phone,
              packaging: obj[key].packaging,
              address: obj[key].address,
              message: obj[key].message,
              name: obj[key].name

          })
      }
      commit('orderset',order)
      })
      .catch(
          (error) => {
              console.log(error)
          }
      )
      

    },

    checkout ({ commit }, pay) {
      const order = {
        item: pay.item,
        name: pay.name,
        number: pay.number,
     //   city: pay.city,
     //   amount: pay.amount,
        phone: pay.phone,
        message: pay.address,
        address: pay.adrs,
        packaging: pay.packaging

      }

      firebase.database().ref('orders').push(order)
      .then((data) => {
        const key = data.key

        commit('createneworder', {
          ...order,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    } ,


    createnewstock ({ commit }, pay) {
      const item = {
        item: pay.item,
        quantity: pay.quantity,
        price: pay.price,
        description: pay.description,
        img: pay.img,
        img0: pay.img0,
        img1: pay.img1,
        itemtype: pay.itemtype
      }

      firebase.database().ref('stock').push(item)
      .then((data) => {
        const key = data.key

        commit('createnewstock', {
          ...item,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    
    stocksfetch ({commit}) {
      firebase.database().ref('stock').once('value')
      .then((data) => {
          const stock = []
          const obj = data.val()
          for(let key in obj) {
              stock.push({
                  id: key,
                  item: obj[key].item,
                  price: obj[key].price,
                  img: obj[key].img,
                  img0: obj[key].img0,
                  img1: obj[key].img1,
                  quantity: obj[key].quantity,
                  description: obj[key].description,
              })
          }
          commit('stockset',stock)
      })
      .catch(
          (error) => {
              console.log(error)
          }
      )
  },



  },
  modules: {
  },

  getters: {

    
    orders (state) {
      return state.orders
    },

    stocks (state) {
      return state.stocks
    },

    stocksfind (state) {
      return (stockid) => {
        return state.stocks.find((stock) => {
          return stock.id == stockid
        })
      }
    }
  }
})
