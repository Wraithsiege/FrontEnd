<template>
    <div class="about">
      <center>
        <h1>Music</h1>
        <button @click="loadMusic()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="musicList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>

    let loadMusic = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                mID: [],
                mAlbumName: [],
                mPerformer: [],
                mGenre: [],
                mPrice: []
            }
        },

        mounted() {
            this.fetchMusic();

            this.mID = this.musicID;
            this.mAlbumName = this.musicAlbumName;
            this.mPerformer = this.musicPerformer;
            this.mGenre = this.musicGenre;
            this.mPrice = this.musicPrice;
        },

        methods: {
            ...mapActions([
                'fetchMusic'
            ]),

            loadMusic() {
                const musicList = document.getElementById("musicList");
                if(loadMusic == 0) {
                    let counter = 0;
                    if(this.musicID[counter] != undefined) {
                        while(this.mID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let musicAlbumNameList = document.createElement("ul");
                            musicAlbumNameList.append("Naziv albuma: " + this.musicAlbumName[counter]);
                            moreList.appendChild(musicAlbumNameList);

                            let musicPerformerList = document.createElement("ul");
                            musicPerformerList.append("Izvođač: " + this.musicPerformer[counter]);
                            moreList.appendChild(musicPerformerList);

                            let musicGenreList = document.createElement("ul");
                            musicGenreList.append("Žanr: " + this.musicGenre[counter]);
                            moreList.appendChild(musicGenreList);

                            let musicPriceList = document.createElement("ul");
                            musicPriceList.append("Cena: " + this.musicPrice[counter] + "RSD");
                            moreList.appendChild(musicPriceList);

                            let image = document.createElement("img");
                            image.src = "https://cdn-icons-png.flaticon.com/512/3175/3175047.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.mID[counter];

                            let button = document.createElement("button");
                            button.id = this.mID[counter];

                            let value = this.mAlbumName[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            musicList.append(newList);
                            button.append("Više Informacija");
                            musicList.appendChild(button);
                            musicList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            musicList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadMusic = 1;
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
                loadMusic = 0;
            }
        },

        computed: {
            ...mapState([
                'musicID',
                'musicAlbumName',
                'musicPerformer',
                'musicGenre',
                'musicPrice'
            ])
        }
    }

</script>