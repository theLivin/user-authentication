<template>
  <v-container fill-height fluid style="padding: 0; margin: 0">
    <v-row style="height: 100%">
      <v-col
        cols="12"
        md="5"
        lg="4"
        v-bind="colProps"
        class="py-3 px-8 mx-auto"
      >
        <div>
          <v-img
            :src="require('@/assets/chelsea.png')"
            height="30%"
            width="30%"
            class="mx-auto my-5"
            contain
          />
          <v-card flat color="transparent">
            <h2 class="text-center text-uppercase form-title">
              <span
                class="link"
                :class="{ active: isLogin }"
                @click.prevent="toggleForm"
                >Login</span
              ><span> | </span
              ><span
                class="link"
                @click.prevent="toggleForm"
                :class="{ active: !isLogin }"
                >Register</span
              >
            </h2>
            <v-card-text>
              <v-container>
                <Login v-if="isLogin" />
                <Register v-else />
              </v-container>
            </v-card-text>
          </v-card>
        </div>
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
      class: "d-flex align-center justify-center",
    },
  }),

  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
  },

  computed: {
    tooltipMsg() {
      return this.isLogin ? "Register instead!" : "Log in instead!";
    },
  },
};
</script>

<style>
.link:hover,
.link:focus,
.link:active {
  cursor: pointer;
}

.form-title span {
  color: rgb(223, 223, 223);
  font-weight: bold;
}

.form-title span.active {
  color: var(--v-primary-base);
}
</style>
