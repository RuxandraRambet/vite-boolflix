<script>
export default {
    name: 'Card',
    props: ['title', 'originalTitle', 'language', 'vote'],
}
</script>

<template>
    <div class="card-container">
        <div class="title">
            <h3>{{ title }}</h3>
        </div>
        <div class="original-title">
            <h4>{{ originalTitle }}</h4>
        </div>
        <div class="language">
            <p>{{ language }}</p>
        </div>
        <div class="vote">
            <p>{{ vote }}</p>
        </div>
    </div>
</template>

<style scoped></style>
