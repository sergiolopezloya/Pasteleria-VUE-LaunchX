import { createStore } from 'vuex'
const EMPTY_VALUE = '<span class="uk-badge uk-badge-warning">Sin especificar</span>'

export default createStore({
  state: {
    currency: 'MXN',
    flavors: [
      {
        id: 1,
        name: 'Chocolate',
        price: 5.00,
        image: '/img/sabores/chocolate.jpg',
        inventory: 10,
        unit: 'kg',
        limit: 100,
        notify: 15
      },
      {
        id: 2,
        name: 'Vainilla',
        price: 5.00,
        image: '/img/sabores/vainilla.jpg',
        inventory: 18,
        unit: 'kg',
        limit: 100,
        notify: 15
      },
      {
        id: 3,
        name: 'Fresa',
        price: 5.00,
        image: '/img/sabores/fresa.jpg',
        inventory: 12,
        unit: 'kg',
        limit: 100,
        notify: 15
      },
      {
        id: 4,
        name: 'Nuez',
        price: 8.00,
        image: '/img/sabores/nuez.jpg',
        inventory: 25,
        unit: 'kg',
        limit: 100,
        notify: 15
      },
      {
        id: 5,
        name: 'Limón',
        price: 10.00,
        image: '/img/sabores/limon.jpg',
        inventory: 34,
        unit: 'kg',
        limit: 100,
        notify: 15
      },
      {
        id: 6,
        name: 'Galleta',
        price: 15.00,
        image: '/img/sabores/galleta.jpg',
        inventory: 13,
        unit: 'piezas',
        limit: 100,
        notify: 15
      }
    ],
    decorations: [
      {
        id: 1,
        name: 'Letreros',
        price: 30.00,
        image: '/img/decoraciones/letreros.jpg',
        inventory: 150,
        unit: 'piezas',
        limit: 300,
        notify: 15
      },
      {
        id: 2,
        name: 'Frutales',
        price: 100.00,
        image: '/img/decoraciones/frutales.jpg',
        inventory: -1,
        unit: '',
        limit: 100,
        notify: 15
      },
      {
        id: 3,
        name: 'Flores',
        price: 150.00,
        image: '/img/decoraciones/flores.jpg',
        inventory: -1,
        unit: '',
        limit: 100,
        notify: 15
      },
      {
        id: 4,
        name: 'Fondant',
        price: 80.00,
        image: '/img/decoraciones/fondant.jpg',
        inventory: -1,
        unit: '',
        limit: 100,
        notify: 15
      },
      {
        id: 5,
        name: 'Imágenes',
        price: 120.00,
        image: '/img/decoraciones/imagenes.jpg',
        inventory: -1,
        unit: '',
        limit: 100,
        notify: 15
      },
      {
        id: 6,
        name: 'Globos',
        price: 70.00,
        image: '/img/decoraciones/globos.jpg',
        inventory: 100,
        unit: 'piezas',
        limit: 100,
        notify: 15
      }
    ],
    sizes: [
      {
        id: 1,
        name: 'Chico',
        price: 150.00
      },
      {
        id: 2,
        name: 'Mediano',
        price: 250.00
      },
      {
        id: 3,
        name: 'Grande',
        price: 350.00
      },
      {
        id: 4,
        name: 'Extra Grande',
        price: 700.00
      }
    ],
    form: {
      sizes: EMPTY_VALUE,
      flavors: EMPTY_VALUE,
      decorations: EMPTY_VALUE,
      price: 0.00
    },
    totals: {
      size: 0.00,
      flavor: 0.00,
      decoration: 0.00
    },
    validate: {
      flavor: '',
      decoration: ''
    },
    orders: [
      {
        id: 1,
        name: 'Pedro',
        email: 'pedropascal@gmail.com',
        phone: '+52 1 55 55 55 55',
        description: 'Un diseño sencillo y moderno',
        date: '2022-03-29 14:17:32',
        size: {
          name: 'Chico',
          price: 150.00
        },
        flavors: [
          {
            id: 1,
            name: 'Chocolate',
            price: 5.00,
            image: '/img/sabores/chocolate.jpg'
          }
        ],
        decorations: [
          {
            id: 1,
            name: 'Letreros',
            price: 30.00,
            image: '/img/decoraciones/letreros.jpg'
          },
          {
            id: 2,
            name: 'Frutales',
            price: 100.00,
            image: '/img/decoraciones/frutales.jpg'
          }
        ],
        price: 285.00
      },
      {
        id: 2,
        name: 'Juan',
        email: '',
        phone: '+52 1 55 55 55 55',
        description: '',
        date: '2022-03-29 14:17:32',
        size: {
          name: 'Grande',
          price: 350.00
        },
        flavors: [
          {
            id: 1,
            name: 'Fresa',
            price: 5.00,
            image: '/img/sabores/fresa.jpg'
          },
          {
            id: 2,
            name: 'Nuez',
            price: 8.00,
            image: '/img/sabores/nuez.jpg'
          }
        ],
        decorations: [
          {
            id: 1,
            name: 'Flores',
            price: 150.00,
            image: '/img/decoraciones/flores.jpg'
          }
        ],
        price: 505.00
      }
    ]
  },
  getters: {
  },
  mutations: {
    setFlavor (state, flavor) {
      state.form.flavors = flavor.join('')
    },
    setDecoration (state, decoration) {
      state.form.decorations = decoration.join('')
    },
    setSize (state, size) {
      state.form.sizes = size
    },
    calculatePrice (state) {
      state.form.price = state.totals.size + state.totals.flavor + state.totals.decoration
    }
  },
  actions: {
    setFlavors ({ commit }) {
      const flavors = []
      this.state.totals.flavor = 0.00
      Array.from(document.getElementsByClassName('flavorValue')).forEach(element => {
        if (element.checked) {
          flavors.push('<span class="uk-badge">' + element.value + '</span>')
          this.state.totals.flavor += parseFloat(element.dataset.price)
        }
      })
      if (flavors.length === 0) {
        this.state.validate.flavor = ''
        flavors.push(EMPTY_VALUE)
      } else {
        this.state.validate.flavor = 'has value'
      }
      commit('setFlavor', flavors)
      commit('calculatePrice')
    },
    setDecorations ({ commit }) {
      const decorations = []
      this.state.totals.decoration = 0.00
      Array.from(document.getElementsByClassName('decorationValue')).forEach(element => {
        if (element.checked) {
          decorations.push('<span class="uk-badge">' + element.value + '</span>')
          this.state.totals.decoration += parseFloat(element.dataset.price)
        }
      })
      if (decorations.length === 0) {
        this.state.validate.decoration = ''
        decorations.push(EMPTY_VALUE)
      } else {
        this.state.validate.decoration = 'has value'
      }
      commit('setDecoration', decorations)
      commit('calculatePrice')
    },
    setSize ({ commit }) {
      this.state.totals.size = 0.00
      Array.from(document.getElementsByClassName('sizeValue')).forEach(element => {
        if (element.checked) {
          commit('setSize', '<span class="uk-badge">' + element.value + '</span>')
          this.state.totals.size = parseFloat(element.dataset.price)
        }
      })
      commit('calculatePrice')
    }
  },
  modules: {
  }
})
