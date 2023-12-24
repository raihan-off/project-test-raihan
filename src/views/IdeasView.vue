<template>
    <div class="Idea">
        <div class="jumbotron-container" ref="jumbotronContainer">
            <img class="jumbotron" alt="jumbotron" src="@/assets/jumbotron.jpg">
            <div class="text-overlay" ref="textOverlay">
                <h2>IDEAS</h2>
                <p>Where all our great things begin</p>
            </div>
        </div>
        <!-- <IdeaList /> -->
        <div class="info-action">
            <div class="left-section">
                <p>Showing ?-? of ?? </p>
            </div>
            <div class="middle-section">
            </div>
            <div class="right-section">
                <label for="showPerPage">Show per Page:</label>
                <select id="showPerPage">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <label for="sortBy">Sort by:</label>
                <select id="sortBy">
                    <option value="newest">Newest</option>
                </select>
            </div>
        </div>
        <div class="Cards">
            <CardContent imageUrl="https://via.placeholder.com/300x200" title="Sample Card Title"
                description="This is a sample card description. You can add any text here to describe your content."
                link="https://example.com" linkText="Read More" />
            <CardContent imageUrl="https://via.placeholder.com/300x200" title="Sample Card Title"
                description="This is a sample card description. You can add any text here to describe your content."
                link="https://example.com" linkText="Read More" />
            <CardContent imageUrl="https://via.placeholder.com/300x200" title="Sample Card Title"
                description="This is a sample card description. You can add any text here to describe your content."
                link="https://example.com" linkText="Read More" />
        </div>
        <div class="pagination">
            <ul>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import IdeaList from "./components/IdeaList.vue";
import CardContent from '@/components/CardContent.vue';

export default {
    components: {
        // IdeaList,
        CardContent
    },
    // mounted() {
    //     window.addEventListener('scroll', this.handleParallax)
    // },
    // unmounted() {
    //     window.removeEventListener('scroll', this.handleParallax)
    // },
    // methods: {
    //     handleParallax() {
    //         const jumbotron = this.$refs.jumbotronContainer
    //         //const textOverlay = this.$refs.textOverlay
    //         const scrollPosition = window.scrollY
    //         const parallaxValue = scrollPosition * 0.5
    //         jumbotron.style.transform = `translateY(${parallaxValue}px)`
    //         //const textParallaxValue = scrollPosition * 0.3
    //         //textOverlay.style.transform = `translateY(${textParallaxValue}px)`
    //     }
    // }
};
</script>

<style scoped>
.jumbotron-container {
    position: relative;
    text-align: center;
}

.jumbotron {
    filter: brightness(50%);
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    max-height: 70vh;
    object-fit: cover;
}

.text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

.text-overlay h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.text-overlay p {
    font-size: 1.2em;
    margin-top: 0;
}

.Cards {
    padding: 5%;
    display: flex;
    flex-direction: row;
}

.info-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    padding-top: 3%;
}

.left-section {
    flex: 1;
}

.middle-section {
    flex: 2;
}

.right-section {
    flex: 1;
    display: flex;
    align-items: center;
}

label {
    margin-right: 5px;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 5px;
}

li {
    display: inline;
}

a {
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    color: #333;
    transition: background-color 0.3s ease;
}

a.active,
a:hover {
    background-color: #ff6800;
    color: white;
}

#showPerPage {
    border-radius: 40% !important;
    padding: 10px 15px;
    margin-right: 2%;
}

#sortBy {
    border-radius: 40% !important;
    padding: 10px 15px;
}
</style>
