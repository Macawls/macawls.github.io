<template>
    <div v-if="isLoading" class="blog-wrapper">
        <BlogPostSkeleton v-for="index in limit" :key="index" />
    </div>
    <div v-else class="blog-wrapper">
        <BlogPost v-for="post in posts" :key="post.title" :post="post" />
    </div>
</template>
  
<script>
import BlogPost from './BlogPost.vue';
import BlogPostSkeleton from './BlogPostSkeleton.vue';
import axios from 'axios';
import cheerio from 'cheerio';

export default {
    props: {
        limit: {
            type: Number,
            default: 3,
        },
        logPosts: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        BlogPost,
        BlogPostSkeleton,
    },
    data() {
        return {
            isLoading: true,
            posts: [],
        };
    },
    created() {
        this.fetchPostData();
    },
    methods: {
        async fetchPostData() {
            const startTime = performance.now();
            const baseUrl = 'https://macawls.dev';
            try {
                const response = await axios.get(baseUrl + '/blog/');
                const $ = cheerio.load(response.data);

                const $articleList = $('.article-list');
                const blogPosts = [];

                $articleList.find('article.has-image').each((index, element) => {
                    if (index < this.limit) {
                        const $currentArticle = $(element);
                        const titleElement = $currentArticle.find('.article-title a');
                        
                        const post = {
                            title: titleElement.text(),
                            subtitle: $currentArticle.find('.article-subtitle').text().trim(),
                            imageSrc: baseUrl + $currentArticle.find('.article-image img').attr('src'),
                            href: baseUrl + titleElement.attr('href'),
                            date: $currentArticle.find('.article-time--published').text(),
                        };

                        blogPosts.push(post);
                    }
                });

                this.posts = blogPosts;
                this.isLoading = false;

                if (this.logPosts) {
                    console.log(`Posts:\n${JSON.stringify(blogPosts, null, 2)}"\n\nFetch time: ${performance.now() - startTime} milliseconds`);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        },
    },
};
</script>
  
<style scoped>
.blog-wrapper {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: safe center;
    justify-content: center;
    gap: 25px;
}
</style>
  