<template>
  <v-form v-model="valid" ref="form" @submit.prevent="register">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.firstname"
          :rules="[rules.required]"
          label="First Name"
          name="firstname"
          v-bind="fieldProps"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="form.lastname"
          :rules="[rules.required]"
          label="Last Name"
          name="lastname"
          v-bind="fieldProps"
        ></v-text-field>
      </v-col>
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
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="cpassword"
          :rules="confirmPasswordRule"
          :append-icon="showcp ? 'mdi-eye' : 'mdi-eye-off'"
          v-on:click:append="showcp = !showcp"
          :type="showcp ? 'text' : 'password'"
          label="Confirm Password"
          name="cpassword"
          v-bind="fieldProps"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-btn
          :loading="loading"
          :disabled="!valid"
          :dark="valid"
          type="submit"
          v-bind="btnProps"
          >Sign up</v-btn
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
  name: "Signup",

  data: () => ({
    rules,
    fieldProps,
    btnProps,

    form: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    cpassword: "",

    loading: false,
    show: false,
    showcp: false,
    valid: true,
  }),
  computed: {
    confirmPasswordRule() {
      return [
        (v) => !!v || "Please confirm your password",
        (v) => v === this.form.password || "Passwords must match.",
      ];
    },
  },
  methods: {
    register() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((result) => {
          alert("Successfully registered! Please login.");
          result.user
            .updateProfile({
              displayName: `${this.form.firstname} ${this.form.lastname}`,
            })
            .then(
              () => {
                alert("Username added! Please login.");
              },
              (error) => {
                alert(error.message);
              }
            );
          console.log(result);
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
a,
a:hover,
a:active {
  text-decoration: none;
}
</style>
