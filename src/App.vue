<template>
  <v-app>
    <v-snackbar v-model="installAlert" color="info" top timeout="10000">
      Install App?

      <template v-slot:action="{ attrs }">
        <v-btn
          small
          depressed
          color="white info--text"
          class="mr-2"
          v-bind="attrs"
          @click="installer()"
        >
          Install
        </v-btn>
        <v-btn
          small
          depressed
          color="white"
          outlined
          v-bind="attrs"
          @click="installAlert = false"
        >
          Cancel
        </v-btn>
      </template>
    </v-snackbar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    installer: undefined,
    installAlert: false,

    insideApp: true,
  }),

  created() {
    let installPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      installPrompt = e;
      this.installAlert = true;
    });

    this.installer = () => {
      this.installAlert = false;
      installPrompt.prompt();
      installPrompt.userChoice.then((result) => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!");
        } else {
          console.log("Install denied!");
        }
      });
    };
  },
};
</script>

<style>
* {
  font-family: "ABeeZee", sans-serif;
}

html,
body {
  overflow-x: hidden;
}
</style>
