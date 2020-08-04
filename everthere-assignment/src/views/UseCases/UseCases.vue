<template>
    <div class="page-container">
       {{ message }},  this is the use-case table placeholder
    </div>
</template>

<script>
export default {
    name: 'UseCases',
    props: {
        message: String
    }
}
</script>

<style scoped>
.page-container {
    padding: 14px;
    background-color: #f6f7f9;
    height: 100vh;
}
</style>