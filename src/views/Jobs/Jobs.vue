<template>
    <h1>Jobs</h1>
    <div v-for="Jobs in Jobs" : key="Jobs.id" class="Jobs">
        <router-link to="{ name: 'JobDetails', params: { id : job.id }}">
            <h2>{{ job.title }}</h2>
        </router-link>
    <div>
</template>
<script>
esport default {
    data() {
        return {
            jobs: [
                { title: "Ninja UX Designer", id: 1, details: 'lorem'},
                { title: "Ninja Web Designer", id: 2, details: 'lorem'},
                { title: "Ninja Vue Designer", id: 3, details: 'lorem'},
            ]
        }
    }
}
</script>
<style>
.Jobs h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.Jobs h2:hoover {
    background: #ddd;
}

.Jobs a{
    text-decoration: none;
}
</style>