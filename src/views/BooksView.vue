<template>
    <div class="about">
      <center>
        <h1>Knjige</h1>
        <button @click="loadBooks()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="booksList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>

    let loadBooks = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                bID: [],
                bTitle: [],
                bAuthor: [],
                bGenre: [],
                bPublisher: [],
                bPrice: []
            }
        },

        mounted() {
            this.fetchBooks();

            this.bID = this.bookID;
            this.bTItle = this.bookTitle;
            this.bAuthor = this.bookAuthor;
            this.bGenre =  this.bookGenre;
            this.bPublisher = this.bookPublisher;
            this.bPrice = this.bookPrice;
        },

        methods: {
            ...mapActions([
                'fetchBooks'
            ]),

            loadBooks() {
                const booksList = document.getElementById("booksList");
                if(loadBooks == 0) {
                    let counter = 0;
                    if(this.bookID[counter] != undefined) {
                        while(this.bID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let bookTitleList = document.createElement("ul");
                            bookTitleList.append("Naziv knjige: " + this.bookTitle[counter]);
                            moreList.appendChild(bookTitleList);

                            let bookAuthorList = document.createElement("ul");
                            bookAuthorList.append("Autor: " + this.bookAuthor[counter]);
                            moreList.appendChild(bookAuthorList);

                            let bookGenreList = document.createElement("ul");
                            bookGenreList.append("Žanr: " + this.bookGenre[counter]);
                            moreList.appendChild(bookGenreList);

                            let bookPublisherList = document.createElement("ul");
                            bookPublisherList.append("Izdavač: " + this.bookPublisher[counter]);
                            moreList.appendChild(bookPublisherList);

                            let bookPriceList = document.createElement("ul");
                            bookPriceList.append("Cena: " + this.bookPrice[counter] + "RSD");
                            moreList.appendChild(bookPriceList);

                            let image = document.createElement("img");
                            image.src = "https://freepngimg.com/thumb/book/37064-8-book-hd.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.bID[counter];

                            let button = document.createElement("button");
                            button.id = this.bID[counter];

                            let value = this.bTItle[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            booksList.append(newList);
                            button.append("Više Informacija");
                            booksList.appendChild(button);
                            booksList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            booksList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadBooks = 1;
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
                loadBooks = 0;
            }


        },

        computed: {
            ...mapState([
                'bookID',
                'bookTitle',
                'bookAuthor',
                'bookGenre',
                'bookPublisher',
                'bookPrice'
            ])
        }


    }

</script>

