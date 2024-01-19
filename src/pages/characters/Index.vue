<script>

import axios from 'axios';
export default {
    data() {
        return {
            characters: [],
            BASE_URL: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        fetchCharacters() {

            axios.get(`${this.BASE_URL}/characters`)
                .then(res => {
                    this.characters = res.data.results;
                    // console.log(this.characters);
                });
        }
    },
    created() {
        this.fetchCharacters()
    }


}
</script>

<template>
    <div class="container">
        <div class="char-list">
            <ul>
                <li v-for="character in characters" key="character.id">
                    <router-link :to="{ name: 'characters.show', params: { id: character.id } }">
                        <h4>{{ character.name }}</h4>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.container {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .char-list {
        border: 2px solid black;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 10px;
        font-size: 2rem;
    }
}
</style>