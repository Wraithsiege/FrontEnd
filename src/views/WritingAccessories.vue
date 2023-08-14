<template>
    <div class="about">
      <center>
        <h1>Pisaći Pribor</h1>
        <button @click="loadWritingAccessories()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="writingAccessoriesList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoadedData="resetLoad()"></body>
    </div>
</template>

<script>

    let loadWritingAccessories = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                waID: [],
                waManufacturer: [],
                waType: [],
                waColor: [],
                waPrice: []
            }
        },

        mounted() {
            this.fetchWritingAccessories();

            this.waID = this.writingAccessoryID;
            this.waManufacturer = this.writingAccessoryManufacturer;
            this.waType = this.writingAccessoryType;
            this.waColor = this.writingAccessoryColor;
            this.waPrice = this.writingAccessoryPrice;
        },

        methods: {
            ...mapActions([
                'fetchWritingAccessories'
            ]),

            loadWritingAccessories() {
                const writingAccessoriesList = document.getElementById("writingAccessoriesList");
                if(loadWritingAccessories == 0) {
                    let counter = 0;
                    if(this.writingAccessoryID[counter] != undefined) {
                        while(this.waID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let writingAccessoriesManufacturerList = document.createElement("ul");
                            writingAccessoriesManufacturerList.append("Proizvođač: " + this.writingAccessoryManufacturer[counter]);
                            moreList.appendChild(writingAccessoriesManufacturerList);

                            let writingAccessoriesTypeList = document.createElement("ul");
                            writingAccessoriesTypeList.append("Tip: " + this.writingAccessoryType[counter]);
                            moreList.appendChild(writingAccessoriesTypeList);

                            let writingAccessoriesColorList = document.createElement("ul");
                            writingAccessoriesColorList.append("Boja: " + this.writingAccessoryColor[counter]);
                            moreList.appendChild(writingAccessoriesColorList);

                            let writingAccessoryPriceList = document.createElement("ul");
                            writingAccessoryPriceList.append("Cena: " + this.writingAccessoryPrice[counter] + "RSD");
                            moreList.appendChild(writingAccessoryPriceList);

                            let image = document.createElement("img");
                            image.src = "https://cdn4.iconfinder.com/data/icons/stationery-40/64/pen-writing-sign-office-accessory-512.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.waID[counter];

                            let button = document.createElement("button");
                            button.id = this.waID[counter];

                            let value = this.writingAccessoryType[counter] + " " + this.writingAccessoryColor[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            writingAccessoriesList.append(newList);
                            button.append("Više Informacija");
                            writingAccessoriesList.appendChild(button);
                            writingAccessoriesList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            writingAccessoriesList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadWritingAccessories = 1;
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
                loadWritingAccessories = 0;
            }


        },

        computed: {
            ...mapState([
                'writingAccessoryID',
                'writingAccessoryManufacturer',
                'writingAccessoryType',
                'writingAccessoryColor',
                'writingAccessoryPrice'
            ])
        }


    }

</script>

