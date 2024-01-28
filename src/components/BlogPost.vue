<template>
  <div class="blog-post" @click="openUrl">
    <span class="date">{{ date }}</span>
    <div class="blog-post-image">
      <img :src="imageSrc" alt="Blog Post Image" />
    </div>
    <div class="text-container">
      <h2 class="blog-post-title">{{ title }}</h2>
      <p class="blog-post-subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return this.post;
  },
  methods: {
    openUrl() {
      window.open(this.post.href, "_blank");
    },
  },
};
</script>

<style>
.blog-post {
  position: relative;
  border-radius: 10px;
  text-align: left;
  width: 220px;
  height: 245px;
  transition: background-color 0.3s ease-in-out, border-color 0.5s ease,
    transform 0.3s ease;
  overflow: hidden;
}

[theme="dark"] .blog-post {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
  background-color: var(--icon-background-dark);
  border: solid 2px transparent;
}

[theme="light"] .blog-post {
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.4);
  background-color: var(--icon-background-light);
  border: solid 2px transparent;
}

.text-container {
  padding: 10px;
  transition: color 0.3s ease-in-out;
}

.blog-post:hover {
  transform: scale(1.15);
  border-color: var(--blue);
  cursor: pointer;
}

.blog-post-image img {
  pointer-events: none;
  object-fit: cover;
  width: 100%;
  height: 100px;
  filter: grayscale(50%);
  transition: filter 0.3s ease-in-out;
}

.blog-post:hover img {
  filter: grayscale(0%);
}

.blog-post-title {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  font-weight: 700;
  font-size: larger;
  line-height: 1.2em;
}

.blog-post-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
}

[theme="dark"] .text-container {
  color: var(--text-dark-waiting);
}

[theme="light"] .text-container {
  color: var(--text-light-waiting);
}

[theme="dark"] .blog-post:hover .text-container {
  color: var(--text-dark);
}

[theme="light"] .blog-post:hover .text-container {
  color: var(--text-light);
}

.blog-post:hover .date {
  transform: scale(1);
}

.date {
  z-index: 1;
  position: absolute;
  top: -2px;
  right: -15px;
  border-radius: 10px;
  padding: 5px;
  padding-right: 20px;
  padding-top: 8px;
  font-weight: 800;
  transform: scale(0);
  font-size: x-small;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.7);
}

[theme="dark"] .date {
  color: var(--text-light);
  background-color: var(--text-dark);
}

[theme="light"] .date {
  color: var(--text-dark);
  background-color: var(--text-light);
}

@media only screen and (max-width: 600px) {
  .blog-post {
    width: 280px;
    height: 235px;
  }

  .blog-post:hover {
    transform: none;
    border-color: transparent;
  }

  .blog-post-image img {
    pointer-events: none;
    object-fit: cover;
    width: 100%;
    height: 100px;
    filter: grayscale(0%);
  }

  .date {
    transform: scale(1);
  }

  [theme="dark"] .text-container {
    color: var(--text-dark);
  }

  [theme="light"] .text-container {
    color: var(--text-light);
  }
}
</style>
