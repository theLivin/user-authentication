<template>
  <div>
    <div class="d-none d-sm-flex justify-center mt-6">
      <form action="#" method="GET">
        <v-btn type="submit" class="ma-2" color="#00acee" dark depressed>
          <v-icon left>mdi-twitter</v-icon>twitter
        </v-btn>
      </form>
      <form action="#" method="GET">
        <v-btn type="submit" class="ma-2" color="#db3236" dark depressed>
          <v-icon left>mdi-google</v-icon>google
        </v-btn>
      </form>
      <form action="#" method="GET">
        <v-btn type="submit" class="ma-2" color="#3b5998" dark depressed>
          <v-icon left>mdi-facebook</v-icon>facebook
        </v-btn>
      </form>
    </div>
    <div class="d-flex d-sm-none justify-center mt-6">
      <form action="#" method="GET">
        <v-btn
          type="submit"
          class="ma-2"
          color="#00acee"
          dark
          depressed
          fab
          small
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </form>
      <form action="#" method="GET">
        <v-btn
          type="submit"
          class="ma-2"
          color="#db3236"
          dark
          depressed
          fab
          small
        >
          <v-icon>mdi-google</v-icon>
        </v-btn>
      </form>
      <form action="#" method="GET">
        <v-btn
          type="submit"
          class="ma-2"
          color="#3b5998"
          dark
          depressed
          fab
          outlined
          small
        >
          <v-icon style="font-size: 2.4rem">mdi-facebook</v-icon>
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
