<template>
    <div>
        <h1>ciao</h1>
    </div>
</template>

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
                console.log(this.characters);
});
}
        },
        created() {
            this.fetchCharacters()
        }
        

    }
</script>

<style lang="scss" scoped>

</style>