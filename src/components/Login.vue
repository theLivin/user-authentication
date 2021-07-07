<template>
  <v-form v-model="valid" ref="form" @submit.prevent="login">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.email]"
          label="Email"
          name="email"
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
          name="password"
          v-bind="fieldProps"
        ></v-text-field>
        <div class="text-end">
          <a href="/forgot" style="text-decoration: none" class="primary--text"
            >Forgot Password?</a
          >
        </div>
      </v-col>

      <v-col cols="12">
        <v-btn
          :loading="loading"
          :disabled="!valid"
          :dark="valid"
          type="submit"
          v-bind="btnProps"
          >Login</v-btn
        >
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
