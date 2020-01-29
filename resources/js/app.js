require('./bootstrap');

import Vue from 'vue'
import router from './routes'
import Element from 'element-ui'

import SignIn from './views/SignIn/SignIn'
import Dashboard from './views/app'

Vue.use(Element)

new Vue({
    el : '#app',
    router,
    render: h => h(SignIn),
    data: {
        currentComponent: 'SignIn'
      },
      components: {
        'SignIn': SignIn,
        'DashBoard': Dashboard,
      },
      methods: {
        swapComponent: function(component) {
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
