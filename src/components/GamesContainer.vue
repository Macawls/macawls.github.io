<template>
  <div class="games-container">
    <BlogPost
      v-for="game in games"
      :key="game.id"
      :post="convertGameToPost(game)"
    />
  </div>
</template>

<script>
import BlogPost from "./BlogPost.vue";
import gamesData from "../assets/data/games.json";

export default {
  data() {
    return {
      games: gamesData.games.filter((game) => game.published),
    };
  },
  methods: {
    convertGameToPost(game) {
      return {
        title: game.title,
        subtitle: game.short_text,
        imageSrc: game.cover_url,
        href: game.url,
        date: this.formatDate(game.published_at),
      };
    },
    formatDate(timestamp) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const formattedDate = new Date(timestamp).toLocaleDateString(
        "en-US",
        options
      );
      return formattedDate;
    },
  },
  components: {
    BlogPost,
  },
};
</script>

<style scoped>
.games-container {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: safe center;
  justify-content: center;
  gap: 25px;
}
</style>
