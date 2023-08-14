<template>
    <div id="app">
        <Header subtitle="Home" />
        <img
        src="https://staticsmartlife.mondo.rs/Picture/88891/jpeg/Otvorena-knjiga.jpeg?ts=2022-04-20T13:23:25"
        width="400"
        />
        <p>est. 2023 Wraithsiege™ eKnjižara®</p>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        name: 'Home',

        components: {
            Header
        }
    }
</script>