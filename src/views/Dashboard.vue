<template>
  <v-app-bar app color="primary" dark>
    <v-btn @click="logout">logout</v-btn>
  </v-app-bar>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>
