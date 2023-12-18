<script>
export default {
    name: 'Card',
    props: ['poster', 'title', 'originalTitle', 'language', 'vote', 'overview'],
}
</script>

<template>
    <!-- flip card container per girare le card -->
    <div class="flip-card">
        <div class="flip-card-inner">
            <!-- poster - front card -->
            <div class="flip-card-front">
                <img :src="poster" :alt="title" class="img-fluid h-100 w-100 object-fit-cover">
            </div>
            <!-- info cards - back of the card-->
            <div class="flip-card-back p-3">
                <div class="title">
                    <h3 class="fs-6 text-secondary">{{ title }}</h3>
                </div>
                <div class="original-title">
                    <h3 class="fs-6 text-secondary">{{ originalTitle }}</h3>
                </div>
                <div class="language text-secondary">
                    <p v-if="language === 'it'">
                        <img src="../assets/img/itflag.png" alt="It Flag">
                    </p>
                    <p v-else-if="language === 'en'">
                        <img src="../assets/img/ukflag.png" alt="UK Flag">
                    </p>
                    <p v-else>
                        {{ language }}
                    </p>
                </div>
                <div class="vote">
                    <p>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" class="text-warning" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote" />
                    </p>
                </div>
                <div class="overview">
                    <p class="fs-6 text-secondary">{{ overview }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
// cards flip
.flip-card {
    background-color: transparent;
    width: 200px;
    height: 250px;
    border: 5px solid $primarybgcolor;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: $headerbgcolor;
    transform: rotateY(180deg);
    overflow-y: auto;
}
// language flag
.language img {
    width: 25px;
}
// card scrollbar
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #171616;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #291e1e;
}
</style>
