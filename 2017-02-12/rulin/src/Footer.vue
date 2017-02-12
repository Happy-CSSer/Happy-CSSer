<template>
<footer>
    <template v-if="!showDetail">
        <button class="dot" />
        <button class="dot" />
        <button class="dot active" />
    </template>
    <button v-else class="btn--close" @click="toggleType" />
</footer>
</template>

<script>
export default {
    props: ['showDetail', 'toggleType'],
}
</script>

<style lang="scss">
footer {
    display: flex;
    height: 50px;
    justify-content: center;
}

.dot {
    position: relative;
    width: 20px;
    height: 50px;
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 7px;
        height: 7px;
        background-color: #afd7f5;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    &.active {
        &::after {
            background-color: #057ad5;
        }
    }
}

.btn--close {
    width: 50px;
    height: 50px;
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent url(./assets/icon--cross.png) center no-repeat;
    background-size: 20px;
    filter: invert(1);
}
</style>
