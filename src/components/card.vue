<script>

export default{

    name: "card", // assefgnamo un nome al componente
    props: {
        info: Object
    }
}


</script>

<template>
    <p>{{ info.name }}</p>
</template>

<style scoped>
h1{
    color: white;
}
</style>
        