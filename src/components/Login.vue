<template>
  <v-form v-model="valid" ref="form" @submit.prevent="login">
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Email"
          name="email"
          required
          :rules="[rules.required, rules.email]"
          v-model="form.email"
          autocomplete="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Password"
          name="password"
          required
          :rules="[rules.required, rules.password.min]"
          v-model="form.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          v-on:click:append="show = !show"
          :type="show ? 'text' : 'password'"
        ></v-text-field>
        <div class="text-end">
          <a href="/forgot" style="text-decoration: none" class="primary--text"
            >Forgot Password?</a
          >
        </div>
      </v-col>

      <v-col cols="12">
        <v-btn
          block
          large
          depressed
          :loading="loading"
          :disabled="!valid"
          class="primary"
          :dark="valid"
          type="submit"
          >Login</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  name: "Login",
  props: {
    rules: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {
      email: "",
      password: "",
    },

    loading: false, // form button loading status
    show: false, //password visibility status
    valid: true, // form validity
  }),
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
      this.loading = false;
    },
  },
};
</script>

<style></style>
