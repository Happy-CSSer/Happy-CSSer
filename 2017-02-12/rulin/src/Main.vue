<template>
<main :class="mainClass">
    <template v-if="!showDetail">
        <div class="cover-container">
            <img
                class="cover"
                src="./assets/cover.jpg"
                :alt="coverText"
            />
        </div>
        <div class="info-container">
            <h1>{{ title }}</h1>
            <h2>{{ subTitle }}</h2>
        </div>
        <button @click="toggleType" class="btn--main">{{ buttonText }}</button>
    </template>

    <template v-else>
        <div class="video-container">
            <iframe width="224" height="126" src="https://www.youtube.com/embed/x3IWwnNe5mc" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="row row--main">
            <h1 class="fullname">{{ fullTitle }} ({{ year }})</h1>
            <span class="score">{{ score }}</span>
        </div>
        <div class="row">
            <span>PG</span>
            <span>{{ tagString }}</span>
        </div>
        <div class="row">
            <span>{{ length }}</span>
            <span>{{ date }}</span>
        </div>
        <p class="desc">{{ desc }}</p>
        <button class="btn--main">{{ buttonText }}</button>
    </template>
</main>
</template>

<script>
export default {
    data () {
        return {
            title: 'Alice',
            subTitle: 'Through the Looking Glass',
            desc: 'Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen\'s reign of terror.',
            fullTitle: 'Alice 2',
            year: 2016,
            score: 6.4,
            length: '1h53min',
            tags: ['Adventure', 'Family', 'Fastasy'],
            date: '27 May 2016 (Taiwan)',
        };
    },

    props: ['showDetail', 'toggleType'],

    computed: {
        mainClass () {
            const { showDetail } = this;
            return showDetail ? 'move-top' : '';
        },

        buttonText () {
            const { showDetail } = this;
            return showDetail ? 'Buy Now' : 'Read More';
        },

        coverText () {
            const { title, subTitle } = this;
            return `${title} ${subTitle}`;
        },

        tagString () {
            const { tags } = this;
            return tags.join(', ');
        },
    },
}
</script>

<style lang="scss">
$blue: #8abfec;

main {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 20px 30px;
    padding: 0 0 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    transition: transform .5s;

    &.move-top {
        transform: translate(0, -20px);
    }
}

.cover-container {
    height: 45vh;
    overflow: hidden;
}

img {
    width: 100%;
}

.info-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
}

h1 {
    margin: 0;
    font-size: 20px;
    line-height: 2;
}

h2 {
    margin: 0 0 20px;
    font-size: 14px;
}

.video-container {
    margin: -20px 0 20px;
}

.row {
    display: flex;
    margin: 0 20px;
    color: $blue;
    font-size: 13px;
    justify-content: space-between;

    &.row--main {
        margin-bottom: 10px;
    }
}

.fullname {
    color: #398180;
    font-size: 18px;
}

.desc {
    margin: 20px;
    color: #aaa;
    font-size: 14px;
    text-align: left;
}

.score {
    font-size: 24px;

    &::after {
        content: " / 10";
        color: #c7c7c7;
        font-size: 14px;
    }
}

.btn--main {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 150px;
    height: 40px;
    border: 0;
    color: #67afe6;
    font-size: 14px;
    background-color: #d6ebf0;
    border-radius: 5px;
    transform: translate(-50%, 50%);
}
</style>
