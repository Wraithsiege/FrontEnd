<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">eKnjižara</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Kategorije" right>
          <b-dropdown-item @click="goToBooks()">Knjige</b-dropdown-item>
          <b-dropdown-item @click="goToMovies()">Filmovi</b-dropdown-item>
          <b-dropdown-item @click="goToMusic()">Muzika</b-dropdown-item>
          <b-dropdown-item @click="goToToys()">Igračke</b-dropdown-item>
          <b-dropdown-item @click="goToSchoolAccessories()">Školski Pribor</b-dropdown-item>
          <b-dropdown-item @click="goToWritingAccessories()">Pisaći Pribor</b-dropdown-item>
          <b-dropdown-item @click="goToCongratulationsCards()">Čestitke</b-dropdown-item>
          <b-dropdown-item @click="goToGiftCards()">Poklon Kartice</b-dropdown-item>
          <b-dropdown-item @click="goToMessages()">Knjiga Utisaka</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em v-if="!token">Uloguj Se</em>
            <em v-else>{{ currentUserUsername }}</em>
          </template>
          <b-dropdown-item @click="goToUsers()">Korisnici</b-dropdown-item>
          <b-dropdown-item v-if="!token" to="/login">Uloguj Se</b-dropdown-item>
          <b-dropdown-item v-if="!token" to="/register">Registruj Se</b-dropdown-item>
          <b-dropdown-item v-else @click="logout()">Izloguj Se</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view />
</div>
</template>

<script>

  import Header from '@/components/Header.vue'
  import { computed } from 'vue';

  import { mapActions, mapMutations, mapState } from 'vuex';

  export default {
    name: 'App',
    components: {
    },

    data() {
      return {
        current: 0,
      }
    },

    mounted() {
    if(localStorage.token) {
      this.setToken(localStorage.token);

      }
    
    if(localStorage.currentUserUsername) {
      this.setUsername(localStorage.currentUserUsername)
    }
    },

    methods: {

      ...mapMutations([
        'removeToken',
        'setToken',
        'login',
        'setUsername',
        'removeUsername'
      ]),

      goToGiftCards() {
        this.$router.push({ name: 'GiftCards' })
      },

      goToCongratulationsCards() {
        this.$router.push({ name: 'CongratulationsCards' })
      },

      goToBooks() {
        this.$router.push({ name: 'Books' })
      },

      goToMovies() {
        this.$router.push({ name: 'Movies' })
      },

      goToMusic() {
        this.$router.push({ name: 'Music' })
      },

      goToToys() {
        this.$router.push({ name: 'Toys' })
      },

      goToSchoolAccessories() {
        this.$router.push({ name: 'SchoolAccessories' })
      },

      goToWritingAccessories() {
        this.$router.push({ name: 'WritingAccessories' })
      },

      goToUsers() {
        this.$router.push({ name: 'Users' })
      },

      goToMessages() {
        this.$router.push({ name: 'Guestbook' })
      },

      logout() {
        this.removeToken();
        this.removeUsername();
      }
    },


    computed: {
      ...mapState([
        'token',
        'currentUserUsername'
      ])
    }
  }

</script>

<style>

.lists {
  float: left
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
