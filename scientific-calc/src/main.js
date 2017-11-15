// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  data: {
    current: ''
  },
  methods: {
    press: function (event) {
    // we make a reference to the inner text
    // of each button to dispatch our functions
      let key = event.target.innerText
      switch (key) {
        case '=':
          this.equals()
          break
        case 'C':
          this.clear()
          break
        case '*':
          this.multiply()
          break
        case '/':
          this.divide()
          break
        case '√':
          this.squareRoot()
          break
        case 'x ²':
          this.square()
          break
        default:
          app.current += key
          break
      }
    },

    // our ' = ' button
    equals () {
      if ((app.current).indexOf('^') > -1) {
        var base = (app.current).slice(0, (app.current).indexOf('^'))
        var exponent = (app.current).slice((app.current).indexOf('^') + 1)
        // eslint-disable-next-line
        app.current = eval('Math.pow(' + base + ',' + exponent + ')')
      } else {
        // eslint-disable-next-line
        app.current = eval(app.current)
      }
    },

    // our ' C ' button
    clear () {
      app.current = ''
    },

    // our ' <= ' button
    backspace () {
      app.current = app.current.substring(0, app.current.length - 1)
    },

    // our ' * ' button
    multiply () {
      app.current += '*'
    },

    // our ' / ' button
    divide () {
      app.current += '/'
    },

    // our ' + ' button
    plus () {
      app.current += '+'
    },

    // our ' - ' button
    minus () {
      app.current += '-'
    },

    // our ' sin ' button
    sin () {
      app.current = Math.sin(app.current)
    },

    // our ' cos ' button
    cos () {
      app.current = Math.cos(app.current)
    },

    // our ' tan ' button
    tan () {
      app.current = Math.tan(app.current)
    },

    // our ' log ' button
    log () {
      app.current = Math.log10(app.current)
    }
  }
})
