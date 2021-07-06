<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12"
        ><v-card max-width="500" class="mx-auto"> <AuthForm /> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
  name: "Authentication",
  components: {
    AuthForm,
  },
};
</script>

<style></style>
