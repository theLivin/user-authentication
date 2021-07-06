<template>
  <v-card flat>
    <v-toolbar color="transparent" flat>
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            fab
            x-small
            outlined
            @click="toggleForm"
          >
            <v-icon>mdi-swap-horizontal</v-icon>
          </v-btn>
        </template>
        <span>{{ tooltipMsg }}</span>
      </v-tooltip>

      <v-spacer></v-spacer>
      <v-toolbar-title class="sokoDeep--text text-uppercase">{{
        isLogin ? "Login" : "Sign up"
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="visibility: hidden" fab x-small outlined>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <LoginForm v-bind:rules="rules" v-if="isLogin" />
        <SignupForm v-bind:rules="rules" v-else />
      </v-container>
    </v-card-text>

    <v-card-actions class="text-uppercase text-center d-block">
      <span class="grey--text"
        >or {{ isLogin ? "login" : "sign up" }} using</span
      >
      <br />

      <OAuthLinks />
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginForm from "./Login.vue";
import SignupForm from "./Signup.vue";
import OAuthLinks from "./OAuthLinks.vue";

export default {
  name: "AuthForm",

  components: {
    LoginForm,
    SignupForm,
    OAuthLinks,
  },

  data: () => ({
    isLogin: true,

    rules: {
      required: (v) => !!v || "Required.",
      name: (v) => (v && v.length >= 2) || "Invalid name.",
      email: (v) => /.+@.+\..+/.test(v) || "Invalid e-mail.",
      password: {
        min: (v) => v.length >= 8 || "Min 8 characters.",
      },
    },
  }),

  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
  },

  computed: {
    tooltipMsg() {
      return this.isLogin ? "Signup instead!" : "Login instead!";
    },
  },
};
</script>
