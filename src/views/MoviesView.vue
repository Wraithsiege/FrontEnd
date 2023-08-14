<template>
    <div class="about">
      <center>
        <h1>Filmovi</h1>
        <button @click="loadMovies()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="moviesList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>
    let loadMovies = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                mID: [],
                mName: [],
                mGenre: [],
                mPrice: []
            }
        },

        mounted() {
            this.fetchMovies();

            this.mID = this.movieID;
            this.mName = this.movieName;
            this.mGenre = this.movieGenre;
            this.mPrice = this.moviePrice;
        },

        methods: {
            ...mapActions([
                'fetchMovies'
            ]),

            loadMovies() {
                const moviesList = document.getElementById("moviesList");
                if(loadMovies == 0) {
                    let counter = 0;
                    if(this.movieID[counter] != undefined) {
                        while(this.mID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let movieNameList = document.createElement("ul");
                            movieNameList.append("Naziv filma: " + this.movieName[counter]);
                            moreList.appendChild(movieNameList);

                            let movieGenreList = document.createElement("ul");
                            movieGenreList.append("Žanr: " + this.movieGenre[counter]);
                            moreList.appendChild(movieGenreList);

                            let moviePriceList = document.createElement("ul");
                            moviePriceList.append("Cena: " + this.moviePrice[counter] + "RSD");
                            moreList.appendChild(moviePriceList);

                            let image = document.createElement("img");
                            image.src = "https://www.pngmart.com/files/5/Movie-PNG-Transparent-Image.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.mID[counter];

                            let button = document.createElement("button");
                            button.id = this.mID[counter];

                            let value = this.mName[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            moviesList.append(newList);
                            button.append("Više Informacija");
                            moviesList.appendChild(button);
                            moviesList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            moviesList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadMovies = 1;
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
                loadMovies = 0;
            }
        },

        computed: {
            ...mapState([
                'movieID',
                'movieName',
                'movieGenre',
                'moviePrice'
            ])
        }
    }
</script>