<template>
    <div class="about">
      <center>
        <h1>Knjiga Utisaka</h1>
        <button @click="loadGuestbook()">Load Data</button>
        <br>
        <ul></ul>
        <button v-if="!token" style="color:#FF0000" @click="loginClick()">Ulogujte Se</button>
        <textarea v-else class="form-control" id="content" name="content" rows="2">Unesite komentar</textarea>
        <button v-if="token">Postavi komentar</button>
        <ul id="guestbookList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoad="resetLoad()"></body>
    </div>
</template>

<script>

    let loadGuestbook = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                gID: [],
                gUsername: [],
                gContent: []
            }
        },

        mounted() {
            this.fetchMessages();

            this.gID = this.messageID;
            this.gUsername = this.messageUsername;
            this.gContent = this.messageContent;
        },

        methods: {
            ...mapActions([
                'fetchMessages'
            ]),

            loadGuestbook() {
                const guestbookList = document.getElementById("guestbookList");
                if(loadGuestbook == 0) {
                    let counter = 0;
                    if(this.messageID[counter] != undefined) {
                        while(this.gID[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {

                            let moreList = document.createElement("ul");

                            let usernameList = document.createElement("ul");
                            usernameList.append("Korisnik: " + this.messageUsername[counter]);
                            moreList.appendChild(usernameList);

                            let messageContentList = document.createElement("ul");
                            messageContentList.append("Poruka: " + this.bookAuthor[counter]);
                            moreList.appendChild(messageContentList);

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.gID[counter];

                            let button = document.createElement("button");
                            button.id = this.gID[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            guestbookList.append(newList);
                            button.append("Više Informacija");
                            guestbookList.appendChild(button);
                            guestbookList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            guestbookList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadBooks = 1;
                            check[button.id] = 1;
                            counter++;
                        }
                    }
                }
            },
/*
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
*/
            resetLoad() {
                loadGuestbook = 0;
            },

            loginClick() {
                window.location.assign("/login")
            }


        },

        computed: {
            ...mapState([
                'messageID',
                'messageUsername',
                'messageContent',
                'token'
            ])
        }


    }

</script>

