<template>
  <v-form v-model="valid" ref="form" @submit.prevent="login">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.email]"
          label="Email"
          placeholder="Email"
          v-bind="fieldProps"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          v-on:click:append="show = !show"
          :type="show ? 'text' : 'password'"
          :rules="[rules.required, rules.password.min]"
          label="Password"
          placeholder="Password"
          v-bind="fieldProps"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn :loading="loading" type="submit" v-bind="btnProps">Log in</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
import { rules, fieldProps, btnProps } from "@/helpers";

export default {
  name: "Login",

  data: () => ({
    rules,
    fieldProps,
    btnProps,

    form: {
      email: "",
      password: "",
    },

    loading: false,
    show: false,
    valid: true,
  }),
  methods: {
    async login() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      await firebase
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
