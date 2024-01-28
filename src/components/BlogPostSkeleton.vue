<template>
    <div class="blog-post">
        <div class="blog-post-image">
            <img src="../assets/media/blank.png" />
        </div>
        <div class="text-container">
            <h2 class="blog-post-title"></h2>
            <p class="blog-post-subtitle"></p>
        </div>
    </div>
</template>
  
<script>
</script>
  
<style scoped>
.blog-post .blog-post-title,
.blog-post-subtitle,
.blog-post-image img {
    animation: loading 1s infinite;
    border-radius: 10px;
}

[theme="dark"] .blog-post .blog-post-title,
.blog-post-subtitle,
.blog-post-image img {
    background-color: var(--text-dark);
}

[theme="light"] .blog-post .blog-post-title,
.blog-post-subtitle,
.blog-post-image img {
    background-color: var(--text-light);
}

.blog-post-image img {
    pointer-events: none;
    object-fit: cover;
    padding: -10px;
    width: 100%;
    height: 100px;
    animation: loading 1s infinite;
}

@keyframes loading {
    0% {
        opacity: 0.8;
    }

    50% {
        opacity: 0.2;
    }

    100% {
        opacity: 0.8;
    }
}
</style>
