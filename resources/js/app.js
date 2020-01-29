require('./bootstrap');

import Vue from 'vue'
import router from './routes'
import Element from 'element-ui'
import axios from 'axios'

import SignIn from './views/SignIn/SignIn'
import Dashboard from './views/app'

Vue.use(Element)

v_inst = new Vue({
    el : '#app',
    router,
    data: {
        currentComponent: SignIn
      },
      components: {
        'SignIn': SignIn,
        'DashBoard': Dashboard,
      },
      methods: {
        swapComponent: function(component) {
            console.log('swapping....')
          this.currentComponent = component;
        }
      }
})

function addFontFace(){
    var fontName = "Material icons";
    var url = "fonts/Material-icons.woff2";
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
        font-family: " + fontName + ";\
        src: url('" + url + "') format('woff2');\
    }\
    "));

    document.head.appendChild(newStyle);
}

addFontFace();
