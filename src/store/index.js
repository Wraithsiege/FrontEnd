import Vue from 'vue'
import Vuex, { mapMutations } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],

    token: "",

    bookID: [],
    bookTitle: [],
    bookAuthor: [],
    bookGenre: [],
    bookPublisher: [],
    bookPrice: [],

    movieID: [],
    movieName: [],
    movieGenre: [],
    moviePrice: [],
    musicID: [],

    musicAlbumName: [],
    musicPerformer: [],
    musicGenre: [],
    musicPrice: [],

    giftCardsID: [],
    giftCardsValue: [],

    toyID: [],
    toyManufacturer: [],
    toyType: [],
    toyName: [],
    toyColor: [],
    toyPrice: [],

    congratulationsCardsID: [],
    congratulationsCardsType: [],
    congratulationsCardsPrice: [],

    schoolAccessoryID: [],
    schoolAccessoryManufacturer: [],
    schoolAccessoryType: [],
    schoolAccessoryColor: [],
    schoolAccessoryPrice: [],

    writingAccessoryID: [],
    writingAccessoryManufacturer: [],
    writingAccessoryType: [],
    writingAccessoryColor: [],
    writingAccessoryPrice: [],

    username: [],
    createdAtUser: [],

    messageID: [],
    messageUsername: [],
    messageContent: [],

    currentUserUsername: ""
    
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setUsername(state, currentUserUsername) {
      state.currentUserUsername = currentUserUsername;
      localStorage.currentUserUsername = currentUserUsername;
    },

    removeUsername(state) {
      state.currentUserUsername = "";
      localStorage.currentUserUsername = "";
    }
  },
  actions: {

    async fetchBooks({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/books/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.bookID[i] = `${el.id}`
            this.state.bookTitle[i] = `${el.title}`
            this.state.bookAuthor[i] = `${el.author}`
            this.state.bookGenre[i] = `${el.genre}`
            this.state.bookPublisher[i] = `${el.publisher}`
            this.state.bookPrice[i] = `${el.price}`
            i++;
          })
      })
    },


    async fetchMovies({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/movies/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.movieID[i] = `${el.id}`
            this.state.movieName[i] = `${el.name}`
            this.state.movieGenre[i] = `${el.genre}`
            this.state.moviePrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchMusic({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/music/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.musicID[i] = `${el.id}`
            this.state.musicAlbumName[i] = `${el.albumName}`
            this.state.musicPerformer[i] = `${el.performer}`
            this.state.musicGenre[i] = `${el.genre}`
            this.state.musicPrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchGiftCards({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/gift_cards/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.giftCardsID[i] = `${el.id}`
            this.state.giftCardsValue[i] = `${el.value}`
            i++;
          })
      })
    },

    async fetchToys({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/toys/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.toyID[i] = `${el.id}`
            this.state.toyManufacturer[i] = `${el.manufacturer}`
            this.state.toyType[i] = `${el.type}`
            this.state.toyName[i] = `${el.name}`
            this.state.toyColor[i] = `${el.color}`
            this.state.toyPrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchCongratulationsCards({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/congratulations_cards/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.congratulationsCardsID[i] = `${el.id}`
            this.state.congratulationsCardsType[i] = `${el.type}`
            this.state.congratulationsCardsPrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchSchoolAccessories({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/school_accessories/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.schoolAccessoryID[i] = `${el.id}`
            this.state.schoolAccessoryManufacturer[i] = `${el.manufacturer}`
            this.state.schoolAccessoryType[i] = `${el.type}`
            this.state.schoolAccessoryColor[i] = `${el.color}`
            this.state.schoolAccessoryPrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchMessages({ commit }) {
      let i = 0;
      await fetch('http://127.0.0.1/8000/api/messages')
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.messageID[i] = `${el.id}`
            this.state.messageUsername = `${el.username}`
            this.state.messageContent = `${el.content}`
            i++;
          })
        })
    },

    async fetchWritingAccessories({ commit }) {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/writing_accessories/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.writingAccessoryID[i] = `${el.id}`
            this.state.writingAccessoryManufacturer[i] = `${el.manufacturer}`
            this.state.writingAccessoryType[i] = `${el.type}`
            this.state.writingAccessoryColor[i] = `${el.color}`
            this.state.writingAccessoryPrice[i] = `${el.price}`
            i++;
          })
      })
    },

    async fetchUsers() {
      let i = 0;
      await fetch(`http://127.0.0.1:8000/api/users/`)
        .then( res => res.json() )
        .then( obj => {
          obj.forEach(el => {
            this.state.username[i] = `${el.username}`
            this.state.createdAtUser[i] = `${el.createdAt}`
            i++;
          })
        })
    },

    login({ commit }, obj) {
      let i = 0;
      fetch('http://127.0.0.1:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
        .then( res => res.json() )
        .then( tkn => {
          if(tkn.msg) {
            alert(tkn.msg)
            window.location.href = "http://127.0.0.1:8080/login"
          } else {
            commit('setToken', tkn.token)

            let userMail = obj.email;

            fetch(`http://127.0.0.1:8000/api/users`)
              .then( res => res.json() )
              .then( obj => {
                obj.forEach(el => {
                  if(userMail === el.email) {
                    commit('setUsername', el.username)
                  }
                })
              })
          }
        })
    },

    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
      .then( res => res.json() )
      .then( tkn => {
        if(tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)

          let userUsername = obj.username;

          fetch(`http://127.0.0.1:8000/api/users`)
            .then( res => res.json() )
            .then( obj => {
              obj.forEach(el => {
                if(userUsername === el.username) {
                  commit('setUsername', el.username)
                }
              })
            })
        }
      })
    }

  },
  modules: {
  }

})
