export default {
  namespaced: true,
  state: {
    data: {
      // keyed by id,
      // rating: 1 to 5 with 1 being the worst taste and 5 being the best
      // roast: 1 to 10 with 1 being lightest roast and 10 being darkest
      1: {
        id: 1,
        name: "Seattle's Best",
        rating: 4.5,
        roast: 8
      },
      2: {
        id: 2,
        name: "Newman's Own",
        rating: 4,
        roast: 6.5
      },
      3: {
        id: 3,
        name: "Dunkin's Original",
        rating: 3,
        roast: 4
      },
      4: {
        id: 4,
        name: "McCafe Columbian",
        rating: 4,
        roast: 8
      }
    }
  },
  mutations: {
    save: (state, payload) => {
      state[payload.id] = payload
      return state[payload.id]
    },
    deleteCoffee: (state, payload) => {
      delete state[payload.id]
      return true
    }
  },
  getters: {
    list: state => Object.keys(state.data).map(i => state.data[i]),
    byRating: (state, getters) => payload => getters.list.sort((a, b) => {
      if (a.rating > b.rating) return payload == 'desc' ? 1 : -1
      if (a.rating < b.rating) return payload == 'desc' ? -1 : 1
      return 0
    }),
    byRoast: (state, getters) => payload => getters.list.sort((a, b) => {
      if (a.roast > b.roast) return payload == 'desc' ? 1 : -1
      if (a.roast < b.roast) return payload == 'desc' ? -1 : 1
      return 0
    }),
  },
  actions: {
    save: ({ commit }, payload) => commit('save', payload),
    deleteCoffee: ({ commit }, payload) => commit('deleteCoffee', payload)
  }
}