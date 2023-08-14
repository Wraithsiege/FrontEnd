<template>
  <div class="about">
    <center>
      <h1>Poklon Kartice</h1>
      <button @click="loadGiftCards()">Load Data</button>
      <br>
      <ul></ul>
      <ul id="giftCardsList" class="list" alignContent="center"></ul>
    </center>
    <body :onLoad="resetLoad()"></body>
  </div>
</template>

<script>
  let loadGiftCards = 0;

  const check = [0]

  import { computed } from 'vue';

  import { mapActions, mapState } from 'vuex';

  export default {

    data() {
      return {
        gcID: [],
        gcValue: []
      }
    },

    mounted() {
      this.fetchGiftCards();

      this.gcID = this.giftCardsID;
      this.gcValue = this.giftCardsValue;
    },

    methods: {
      ...mapActions([
        'fetchGiftCards'
      ]),

      loadGiftCards() {
        const giftCardsList = document.getElementById("giftCardsList");
        if(loadGiftCards == 0) {
          let counter = 0;
          if(this.giftCardsID[counter] != undefined) {
            while(this.gcID[counter] != undefined) {
              counter++;
            }
            let maxCounter = counter;
            counter = 0
            while(maxCounter > counter) {

              let moreList = document.createElement("ul");

              let giftCardsValueList = document.createElement("ul");
              giftCardsValueList.append("Vrednost kartice: " + this.giftCardsValue[counter] + "RSD");
              moreList.appendChild(giftCardsValueList);


              let image = document.createElement("img");
              image.src = "https://cdn-icons-png.flaticon.com/512/6664/6664569.png"

              let hr = document.createElement("hr");

              let container = document.createElement("container");
              container.hidden = true;
              container.id = "con" + this.gcID[counter];

              let button = document.createElement("button");
              button.id = this.gcID[counter];

              let value = "Poklon Kartica: " + this.gcValue[counter] + "RSD";

              let newList = document.createElement("ul");
              newList.append(value);
              giftCardsList.append(newList);
              button.append("Više Informacija");
              giftCardsList.appendChild(button);
              giftCardsList.appendChild(container);
              container.appendChild(image);
              container.appendChild(moreList);
              giftCardsList.appendChild(hr);
              document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
              loadGiftCards = 1;
              check[button.id] = 1;
              counter++;
            }
          }
        }
      },

      saznajVise() {
        let idButton = event.srcElement.id;
        if(check[idButton] == 1) {
          document.getElementById("con" + idButton).hidden = false;
          check[idButton] = 0;
        }
        else if(check[idButton] == 0) {
          document.getElementById("con" + idButton).hidden = true;
          check[idButton] = 1;
        }
      },

      resetLoad() {
        loadGiftCards = 0;
      }

    },

    computed: {
        ...mapState([
          'giftCardsID',
          'giftCardsValue'
        ])
      }
  }
</script>

<style scoped>
  .list {
    margin-top: 10px;
    border-style: outset;
    border-radius: 15px;
  }
</style>