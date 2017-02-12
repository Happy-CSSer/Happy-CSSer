<template>
<div class="container">
    <HeaderContent :showDetail="showDetail" />
    <MainContent :showDetail="showDetail" :toggleType="toggleType" />
    <FooterContent :showDetail="showDetail" :toggleType="toggleType" />
</div>
</template>

<script>
import HeaderContent from './Topbar.vue';
import MainContent from './Main.vue';
import FooterContent from './Footer.vue';

export default {
    data () {
        return {
            showDetail: false,
        };
    },

    components: {
        HeaderContent,
        MainContent,
        FooterContent,
    },

    methods: {
        toggleType () {
            this.showDetail = !this.showDetail;
        },
    },
}
</script>

<style lang="scss">
html,
body {
    margin: 0;
}

button {
    outline: 0;
    cursor: pointer;
}

body {
    background: #58a8e5 linear-gradient(#99d3f9, #58a8e5);
}

.container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

$header-height: 70px;
$footer-height: 70px;

header { flex: 0 0 $header-height; }
footer { flex: 0 0 $footer-height; }
main { flex: auto; }

</style>
