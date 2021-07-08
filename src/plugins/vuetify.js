import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      dark: {},
      light: {
        primary: "#41B883",
      },
    },
  },
});
