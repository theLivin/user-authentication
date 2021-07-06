<template>
  <v-form v-model="valid" ref="form" @submit.prevent="">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="First Name"
          name="firstname"
          required
          :rules="[rules.required]"
          v-model="form.firstname"
          autocomplete="false"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Last Name"
          name="lastname"
          required
          :rules="[rules.required]"
          v-model="form.lastname"
          autocomplete="false"
        ></v-text-field>
      </v-col>
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
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Confirm Password"
          name="cpassword"
          required
          :rules="confirmPasswordRule"
          v-model="form.cpassword"
          :append-icon="showcp ? 'mdi-eye' : 'mdi-eye-off'"
          v-on:click:append="showcp = !showcp"
          :type="showcp ? 'text' : 'password'"
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="text-center">
        By signing up, you agree to our
        <a href="#" target="_blank" class="primary--text">Terms of Service</a>
        and
        <a href="#" target="_blank" class="primary--text">Privacy Policy</a>
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
          >Sign up</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "Signup",
  props: {
    rules: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    form: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    },

    loading: false,
    show: false,
    showcp: false,
    valid: true,
  }),
  computed: {
    confirmPasswordRule() {
      // confirm password validation rule
      return [
        (v) => !!v || "Please confirm your password",
        (v) => v === this.password || "Passwords must match.",
      ];
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
