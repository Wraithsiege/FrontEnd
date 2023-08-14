<template>
    <div class="about">
      <center>
        <h1 :onLoad="resetLoad()">Korisnici</h1>
        <button @click="loadUsers()">Load Data</button>
        <br>
        <ul></ul>
        <ul id="usersList" class="list" alignContent="center"></ul>
      </center>
      <body :onLoadeddata="resetLoad()"></body>
    </div>
</template>

<script>

    let loadUsers = 0;

    const check = [0]

    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                uName: [],
                uCreatedAt: []
            }
        },

        mounted() {
            this.fetchUsers();

            this.uName = this.username;
            this.uCreatedAt = this.createdAtUser;
        },

        methods: {
            ...mapActions([
                'fetchUsers'
            ]),

            loadUsers() {
                const usersList = document.getElementById("usersList");
                if(loadUsers == 0) {
                    let counter = 0;
                    if(this.username[counter] != undefined) {
                        while(this.uName[counter] != undefined) {
                            counter++;
                        }
                        let maxCounter = counter;
                        counter = 0;
                        while(maxCounter > counter) {
                            
                            let myArray1 = this.uCreatedAt[counter].split("-");
                            let myArray2 = myArray1[2].split("T");
                            let myArray3 = myArray2[1].split(":");

                            console.log(myArray1)
                            console.log(myArray2)


                            let moreList = document.createElement("ul");

                            let usernameList = document.createElement("ul");
                            usernameList.append("Korisničko ime: " + this.username[counter]);
                            moreList.appendChild(usernameList);

                            let userSinceList = document.createElement("ul");
                            userSinceList.append("Registrovan: " + myArray2[0] + "." + myArray1[1] + "." + myArray1[0] + " u " + myArray3[0] + ":" + myArray3[1]);
                            moreList.appendChild(userSinceList);


                            let image = document.createElement("img");
                            image.src = "https://www.shareicon.net/data/2015/08/12/84086_user_512x512.png"

                            let hr = document.createElement("hr");

                            let container = document.createElement("container");
                            container.hidden = true;
                            container.id = "con" + this.username[counter];

                            let button = document.createElement("button");
                            button.id = this.username[counter];

                            let value = this.username[counter];

                            let newList = document.createElement("ul");
                            newList.append(value);
                            usersList.append(newList);
                            button.append("Više Informacija");
                            usersList.appendChild(button);
                            usersList.appendChild(container);
                            container.appendChild(image);
                            container.appendChild(moreList);
                            usersList.appendChild(hr);
                            document.getElementById(`${button.id}`).addEventListener('click', this.saznajVise);
                            loadUsers = 1;
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
                loadUsers = 0;
            }


        },

        computed: {
            ...mapState([
                'username',
                'createdAtUser'
            ])
        }


    }

</script>

