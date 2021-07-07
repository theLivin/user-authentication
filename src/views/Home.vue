<template>
  <v-container fill-height fluid style="padding: 0; margin: 0">
    <v-row style="height: 100%">
      <v-col
        cols="12"
        md="5"
        class="d-none d-md-block d-lg-block"
        v-bind="colProps"
      >
        <v-img
          :src="require('../assets/gabriel-alenius.jpg')"
          max-height="100vh"
          cover
        />
        <!-- <div class="mt-8 pa-12">
          <h1 class="mb-3">Brand</h1>
          <h2>
            Discover the world’s top<br />
            Designers & Creatives.
          </h2>
        </div> -->
      </v-col>
      <v-col cols="12" md="7" v-bind="colProps" class="py-3 px-8">
        <v-toolbar color="transparent" class="mb-12" flat>
          <v-spacer></v-spacer>

          {{ isLogin ? "Not a member" : "Already a member" }}? &nbsp;
          <a href="#" @click.prevent="toggleForm">
            {{ tooltipMsg }}
          </a>
        </v-toolbar>
        <v-row>
          <v-col cols="12" sm="8" class="mx-auto"
            ><v-card flat color="transparent">
              <h1 class="px-7">{{ isLogin ? "Log in" : "Register" }}</h1>
              <v-card-text>
                <v-container>
                  <Login v-if="isLogin" />
                  <Register v-else />
                </v-container>
              </v-card-text> </v-card
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    Login,
    Register,
  },

  data: () => ({
    isLogin: true,

    colProps: {
      style: "height: 100%; padding: 0; margin: 0",
    },
  }),

  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
  },

  computed: {
    tooltipMsg() {
      return this.isLogin ? "Register now" : "Log in now";
    },
  },
};
</script>
