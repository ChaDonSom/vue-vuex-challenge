<template>
  <div>
    <button @click="sort == 'asc' ? sort = 'desc' : sort = 'asc'">Sort {{ sort }}</button>
    <button @click="sortBy == 'Rating' ? sortBy = 'Roast' : sortBy = 'Rating'">By: {{ sortBy }}</button>
    <div v-for="coffee of sorted" :key="coffee.id">
      <h3>{{ coffee.name }} <button @click="deleteCoffee(coffee)">Delete</button></h3>
      <div style="display: inline-block; text-align: right; width: 150px;">
        <p>Rating: {{ coffee.rating }}</p>
        <p>Roast: {{ coffee.roast }}</p>
      </div>
    </div>
    <hr>
    <h3>Add Another</h3>
    <div class="input-row">
      <label for="name">Name </label>
      <input id="name" v-model="coffeeToAdd.name" />
    </div>
    <div class="input-row">
      <label for="rating">Rating </label>
      <input id="ratig" v-model="coffeeToAdd.rating" type="number" />
    </div>
    <div class="input-row">
      <label for="roast">Roast </label>
      <input id="roast" v-model="coffeeToAdd.roast" type="number" />
    </div>
    <button @click="addCoffee(coffeeToAdd)">Save</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Coffees",
  data() { return {
    coffees: {
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
    },
    sort: 'asc',
    sortBy: 'Rating',
    coffeeToAdd: {
      id: 5,
      name: '',
      rating: 0,
      roast: 0,
    }
  }},
  computed: {
    list() {
      return Object.keys(this.coffees)
    },
    set() {
      return this.list.map(i => this.coffees[i])
    },
    sorted() {
      return this.set.slice().sort((a, b) => {
        if (a[this.sortBy] > b[this.sortBy]) return this.sort == 'desc' ? 1 : -1
        if (a[this.sortBy] < b[this.sortBy]) return this.sort == 'desc' ? -1 : 1
        return 0
      })
    },
  },
  methods: {
    addCoffee(coffee) {
      let coffees = this.coffees
      coffees[coffee.id] = coffee
      Vue.set(this, 'coffees', coffees)
      this.coffeeToAdd.id++
      this.coffeeToAdd.name = ''
      this.coffeeToAdd.roast = 0
      this.coffeeToAdd.rating = 0
    },
    deleteCoffee(coffee) {
      let coffees = this.coffees
      delete coffees[coffee.id]
      Vue.set(this, 'coffees', coffees)
    }
  }  
}
</script>

<style scoped>
.input-row {
  padding: 8px;
}
</style>