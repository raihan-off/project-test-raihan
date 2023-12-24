<template>
    <div class="container">
        <!-- <IdeaCard v-for="idea in ideas" :key="idea.id" :idea="idea" /> -->
    </div>
</template>

<script>
// import IdeaCard from "@/components/IdeaCard.vue";
import api from "../api.js";

export default {
    // components: {
    //     IdeaCard,
    // },
    data() {
        return {
            ideas: [],
        };
    },
    async created() {
        try {
            const response = await api.getIdeas();
            this.ideas = response.data;
        } catch (error) {
            console.error("Error fetching ideas:", error);
        }
    },
};
</script>