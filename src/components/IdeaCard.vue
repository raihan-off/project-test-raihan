<template>
    <div class="card">
        <div>{{ idea.file }}</div>
        <!-- <p>{{ idea.class }}</p> -->
    </div>
</template>

<script>
export default {
    props: {
        idea: Object,
    },
};
</script>