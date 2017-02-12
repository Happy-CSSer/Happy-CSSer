<template>
<header :class="topbarClass">
    <button class="btn--back" />
    <h3 class="group">{{ group }}</h3>
    <button class="btn--search" />
</header>
</template>

<script>
export default {
    data () {
        return {
            group: 'Popular',
        }
    },

    props: ['showDetail'],

    computed: {
        topbarClass () {
            const { showDetail } = this;
            return showDetail ? 'hide' : '';
        },
    },
}
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    opacity: 1;
    transition: opacity .5s;

    &.hide {
        opacity: 0;
        pointer-events: none;
    }
}

.group {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
}

%btn {
    border: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    background: transparent center no-repeat;
    background-size: 20px;
    filter: invert(1);
}

.btn--back {
    @extend %btn;
    background-image: url(./assets/icon--left-arrow.png);
}

.btn--search {
    @extend %btn;
    background-image: url(./assets/icon--search.png);
}
</style>
