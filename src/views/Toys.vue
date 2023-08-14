<template>
    <div class="about">
      <center>
        <h1>Igračke</h1>
        <button @click="loadToys()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="toysList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>

    let loadToys = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                tID: [],
                tManufacturer: [],
                tType: [],
                tName: [],
                tColor: [],
                bPrice: []
            }
        },

        mounted() {
            this.fetchToys();

            this.tID = this.toyID;
            this.tManufacturer = this.toyManufacturer;
            this.tType = this.toyType;
            this.tName =  this.toyName;
            this.tColor = this.toyColor;
            this.bPrice = this.toyPrice;
        },

        methods: {
            ...mapActions([
                'fetchToys'
            ]),

            loadToys() {
                const toysList = document.getElementById("toysList");
                if(loadToys == 0) {
                    let counter = 0;
                    if(this.toyID[counter] != undefined) {
                        while(this.tID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let toyManufacturerList = document.createElement("ul");
                            toyManufacturerList.append("Proizvođač: " + this.toyManufacturer[counter]);
                            moreList.appendChild(toyManufacturerList);

                            let toyTypeList = document.createElement("ul");
                            toyTypeList.append("Tip igračke: " + this.toyType[counter]);
                            moreList.appendChild(toyTypeList);

                            let toyNameList = document.createElement("ul");
                            toyNameList.append("Ime igračke: " + this.toyName[counter]);
                            moreList.appendChild(toyNameList);

                            let toyColorList = document.createElement("ul");
                            toyColorList.append("Boja igračke: " + this.toyColor[counter]);
                            moreList.appendChild(toyColorList);

                            let toyPriceList = document.createElement("ul");
                            toyPriceList.append("Cena: " + this.toyPrice[counter] + "RSD");
                            moreList.appendChild(toyPriceList);

                            let image = document.createElement("img");
                            image.src = "https://cdn-icons-png.flaticon.com/512/3082/3082048.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.tID[counter];

                            let button = document.createElement("button");
                            button.id = this.tID[counter];

                            let value = this.tName[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            toysList.append(newList);
                            button.append("Više Informacija");
                            toysList.appendChild(button);
                            toysList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            toysList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadToys = 1;
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
                loadToys = 0;
            }


        },

        computed: {
            ...mapState([
                'toyID',
                'toyManufacturer',
                'toyType',
                'toyName',
                'toyColor',
                'toyPrice'
            ])
        }


    }

</script>

