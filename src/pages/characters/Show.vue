<script>
import axios from 'axios';


export default {
    props: ['id'],
    data() {
        return {
            character: null,
            BASE_URL: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        fetchCharacter() {

            axios.get(`${this.BASE_URL}/characters`, {
                params: {
                    id: this.id
                }
            })
                .then(res => {
                    this.character = res.data.results;
                    console.log(this.character);
                });
        }
    },
    created() {
        this.fetchCharacter()
    }
}
</script>

<template>
    <ul>
        <li>{{ id }}</li>
        <li></li>
    </ul>
</template>

<style lang="scss" scoped></style>