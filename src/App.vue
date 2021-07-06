<template>
  <div id="app">
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

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    installer: undefined,
    installAlert: false,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
