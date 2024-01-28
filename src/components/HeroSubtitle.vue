<template>
    <div class="hero-sub-title">
        <div class="left">
            <p>I'm an aspiring</p>
        </div>
        <div class="right">
            <span>
                <textra :data="words" :timer="2" :infinite="true" filter="top-bottom" />
            </span>
        </div>
    </div>
</template>

<script>
import Textra from 'vue-textra/src/Textra.vue';

export default {
    components: {
        Textra
    },

    props: {
        words: {
            type: Array,
            required: true,
        },
    },
}

</script>

<style scoped>
.hero-sub-title {
    width: 600px;
    align-items: center;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    height: auto;
    min-height: 100px;
    margin: 0 auto;
}

.left {
    font-size: 20px;
    width: 40%;
    margin-left: 17%;
    float: left;
    text-align: center;
}

.right {
    width: 60%;
    margin-left: 6%;
    text-align: left;
    float: right;
}

.textra {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--blue);
    text-align: left;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

/* do a media query for mobile */
@media only screen and (max-width: 600px) {
    .hero-sub-title {
        width: 100%;
    }
}

</style>