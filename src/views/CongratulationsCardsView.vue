<template>
    <div class="about">
      <center>
        <h1>Čestitke</h1>
        <button @click="loadCongratulationsCards()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="congratulationsCardsList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
  </template>

<script>

  let loadCongratulationsCards = 0;

  const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                ccID: [],
                ccType: [],
                ccPrice: []
            }
        },

        mounted() {
            this.fetchCongratulationsCards();

            this.ccID = this.congratulationsCardsID;
            this.ccType = this.congratulationsCardsType;
            this.ccPrice = this.congratulationsCardsPrice;
        },

        methods: {
            ...mapActions([
                'fetchCongratulationsCards'
            ]),

            loadCongratulationsCards() {
                const congratulationsCardsList = document.getElementById("congratulationsCardsList");
                if(loadCongratulationsCards == 0) {
                    let counter = 0;
                    if(this.congratulationsCardsID[counter] != undefined) {
                        while(this.ccID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let congratulationsCardsTypeList = document.createElement("ul");
                            congratulationsCardsTypeList.append("Tip čestitke: " + this.congratulationsCardsType[counter]);
                            moreList.appendChild(congratulationsCardsTypeList);

                            let congratulationsCardsPriceList = document.createElement("ul");
                            congratulationsCardsPriceList.append("Cena: " + this.congratulationsCardsPrice[counter] + "RSD");
                            moreList.appendChild(congratulationsCardsPriceList);

                            let image = document.createElement("img");
                            image.src = "https://play-lh.googleusercontent.com/BrJfbG71QlV-P4bMzv9cbY31UjZuBd-BKThMsXRJcr34owr-BHOm6SueA6pbtN44_Eo"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.ccID[counter];

                            let button = document.createElement("button");
                            button.id = this.ccID[counter];

                            let value = "Čestitka: " + this.ccType[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            congratulationsCardsList.append(newList);
                            button.append("Više Informacija");
                            congratulationsCardsList.appendChild(button);
                            congratulationsCardsList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            congratulationsCardsList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadCongratulationsCards = 1;
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
                loadCongratulationsCards = 0;
            }
        },

        computed: {
            ...mapState([
                'congratulationsCardsID',
                'congratulationsCardsType',
                'congratulationsCardsPrice'
            ])
        }
    }
</script>