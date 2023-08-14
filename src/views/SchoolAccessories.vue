<template>
    <div class="about">
      <center>
        <h1>Školski Pribor</h1>
        <button @click="loadSchoolAccessories()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="schoolAccessoriesList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>

    let loadSchoolAccessories = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                scID: [],
                scManufacturer: [],
                scType: [],
                scColor: [],
                scPrice: []
            }
        },

        mounted() {
            this.fetchSchoolAccessories();

            this.scID = this.schoolAccessoryID;
            this.scManufacturer = this.schoolAccessoryManufacturer;
            this.scType = this.schoolAccessoryType;
            this.scColor = this.schoolAccessoryColor;
            this.scPrice = this.schoolAccessoryPrice;
        },

        methods: {
            ...mapActions([
                'fetchSchoolAccessories'
            ]),

            loadSchoolAccessories() {
                const schoolAccessoriesList = document.getElementById("schoolAccessoriesList");
                if(loadSchoolAccessories == 0) {
                    let counter = 0;
                    if(this.schoolAccessoryID[counter] != undefined) {
                        while(this.scID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let schoolAccessoriesManufacturerList = document.createElement("ul");
                            schoolAccessoriesManufacturerList.append("Proizvođač: " + this.schoolAccessoryManufacturer[counter]);
                            moreList.appendChild(schoolAccessoriesManufacturerList);

                            let schoolAccessoriesTypeList = document.createElement("ul");
                            schoolAccessoriesTypeList.append("Tip: " + this.schoolAccessoryType[counter]);
                            moreList.appendChild(schoolAccessoriesTypeList);

                            let schoolAccessoriesColorList = document.createElement("ul");
                            schoolAccessoriesColorList.append("Boja: " + this.schoolAccessoryColor[counter]);
                            moreList.appendChild(schoolAccessoriesColorList);

                            let schoolAccessoryPriceList = document.createElement("ul");
                            schoolAccessoryPriceList.append("Cena: " + this.schoolAccessoryPrice[counter] + "RSD");
                            moreList.appendChild(schoolAccessoryPriceList);

                            let image = document.createElement("img");
                            image.src = "https://cdn1.iconfinder.com/data/icons/education-flat-2/48/81-512.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.scID[counter];

                            let button = document.createElement("button");
                            button.id = this.scID[counter];

                            let value = this.schoolAccessoryManufacturer[counter] + " " + this.schoolAccessoryType[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            schoolAccessoriesList.append(newList);
                            button.append("Više Informacija");
                            schoolAccessoriesList.appendChild(button);
                            schoolAccessoriesList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            schoolAccessoriesList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadSchoolAccessories = 1;
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
                loadSchoolAccessories = 0;
            }


        },

        computed: {
            ...mapState([
                'schoolAccessoryID',
                'schoolAccessoryManufacturer',
                'schoolAccessoryType',
                'schoolAccessoryColor',
                'schoolAccessoryPrice'
            ])
        }


    }

</script>

