import axios from "axios";

export default {
    getIdeas() {
        return axios.get("https://suitmedia-backend.suitdev.com/api/ideas");
    },
};