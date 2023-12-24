<template>
    <div class="card">
        <img class="card-image" :src="imageUrl" alt="Card Image">
        <div class="card-content">
            <h2 class="card-title">{{ title }}</h2>
            <p class="card-description">{{ description }}</p>
            <a :href="link" class="card-link">{{ linkText }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        title: String,
        description: String,
        link: String,
        linkText: String
    }
};
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 300px;
    margin: 0 auto;
}

.card:hover {
    transform: translateY(-5px);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.card-description {
    margin-bottom: 15px;
}

.card-link {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}
</style>
