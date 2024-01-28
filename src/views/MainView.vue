<template>
  <ResumeModal :is-active="resumeOpen" @close="resumeOpen = false" />
  <div class="layout">
    <main class="main-wrapper">
      <ProfileImage
        :imageSrc="profileImageSrc"
        :isDark="isDark"
        :emojiDark="emojiDark"
        :emojiLight="emojiLight"
      />
      <h1 class="hero-title">Macawls</h1>
      <h3 style="margin-top: -15px">Game Developer</h3>
      <HeroSubtitle :words="words" />
      <IconRow :icons="toolIcons" />
      <ProfileLinks style="margin-top: 20px" :items="profileLinks" />
    </main>
    <div class="blog-title-wrapper">
      <h1 class="blog-title">Games</h1>
    </div>
    <GamesContainer />
    <div class="blog-title-wrapper">
      <h1 class="blog-title">Latest Posts</h1>
    </div>
    <BlogContainer :limit="blogLimit" :logData="shouldLog" />
    <h1 class="blog-title">Apu Apustaja</h1>
    <div
      style="
        width: 750px;
        height: 350px;
        border-radius: 10px;
        overflow: hidden;
        max-width: 80%;
        margin-top: -20px;
      "
    >
      <RenderThreeJs :isDark="isDark" />
    </div>
    <div class="blog-title-wrapper">
      <h1 class="blog-title">DJ Booth</h1>
    </div>
    <AudioPlayer :tracks="tracks" />
    <PageFooterVue />
  </div>
</template>

<script>
import GamesContainer from "@/components/GamesContainer.vue";
import RenderThreeJs from "@/components/RenderThreeJS.vue";
import ResumeModal from "@/components/ResumeModal.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import ProfileLinks from "@/components/ProfileLinks.vue";
import IconRow from "@/components/IconRow.vue";
import BlogContainer from "@/components/BlogContainer.vue";
import PageFooterVue from "@/components/PageFooter.vue";
import HeroSubtitle from "@/components/HeroSubtitle.vue";
import AudioPlayer from "@/components/AudioPlayerWrapper.vue";

export default {
  components: {
    GamesContainer,
    RenderThreeJs,
    IconRow,
    ProfileImage,
    ProfileLinks,
    BlogContainer,
    PageFooterVue,
    HeroSubtitle,
    AudioPlayer,
    ResumeModal,
  },
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      emojiDark: "🌊",
      emojiLight: "🌸",
      profileImageSrc:
        "https://avatars.githubusercontent.com/u/80009513?v=4.jpg",
      blogLimit: 4,
      words: ["Developer", "Creator", "Engineer", "Mentor"],
      tracks: [
        {
          src: "https://drive.google.com/uc?export=download&id=1p6pP7H7S8HxnFvxb1E8436ltU0-wYJTM",
          artist: "d4vd",
          song: "Here With Me",
          coverImage:
            "https://i1.sndcdn.com/artworks-FOxak51X4YUKVOUt-wMsuZQ-t500x500.jpg",
        },
        {
          src: "https://drive.google.com/uc?export=download&id=1EyVIloOUWBZvk65MHhodKqySAQwruoho",
          artist: "Drake",
          song: "Sticky",
          coverImage:
            "https://i1.sndcdn.com/artworks-UMD8M9P6EkGy8krZ-xkFoIw-t500x500.jpg",
        },
        {
          src: "https://drive.google.com/uc?export=download&id=1m9utxFjGVRs3KOiDif5IvPVKoexlglmy",
          artist: "070 Shake",
          song: "Skin & Bones",
          coverImage:
            "https://lastfm.freetls.fastly.net/i/u/300x300/b3143dfae6d8e6a41d3cddddd1f2f52b.jpg",
        },
        {
          src: "https://drive.google.com/uc?export=download&id=1gIwhvoZeAaxpbvIIbNi3VnLlFBKtuD9T",
          artist: "21 Savage",
          song: "Close My Eyes",
          coverImage:
            "https://i1.sndcdn.com/artworks-6C8o5QEBKoSd-0-t500x500.jpg",
        },
        {
          src: "https://drive.google.com/uc?export=download&id=1c-z6i2PZ9ctl7q3dLIfeUdPeK692Dqcm",
          artist: "Will Sparks",
          song: "Annihilate",
          coverImage:
            "https://i1.sndcdn.com/artworks-bmZ6mUsZj8AB-0-t500x500.png",
        },
      ],
      resumeOpen: false,
      profileLinks: [
        {
          id: "blog",
          link: "https://macawls.dev/blog/",
          title: "Blog",
          color: "var(--yellow)",
        },
        {
          id: "email",
          link: "mailto:josh@macawls.dev",
          title: "Email",
          color: "var(--purple)",
        },
        {
          id: "resume",
          link: "",
          title: "Resume",
          color: "var(--cyan)",
          callback: () => {
            this.resumeOpen = true;
          },
        },
        {
          id: "github",
          link: "https://github.com/Macawls",
          title: "Github",
          color: "var(--blue)",
        },
        {
          id: "linkedin",
          link: "https://www.linkedin.com/in/joshua-macauley/",
          title: "LinkedIn",
          color: "var(--green)",
        },
        {
          id: "itchio",
          link: "https://macawls.itch.io/",
          title: "Itch.io",
          color: "var(--red)",
        },
      ],
      toolIcons: [
        {
          class: "devicon-unity-original",
          link: "https://unity.com/",
          title: "Unity",
          hoverColor: "white",
        },
        {
          class: "devicon-csharp-plain",
          link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          title: "C#",
          hoverColor: "var(--purple)",
        },
        {
          class: "devicon-typescript-plain",
          link: "https://www.typescriptlang.org/",
          title: "Typescript",
          hoverColor: "var(--blue)",
        },
        {
          class: "devicon-git-plain",
          link: "https://git-scm.com/",
          title: "Git",
          hoverColor: "var(--red)",
        },
        {
          class: "devicon-bash-plain",
          link: "https://www.gnu.org/software/bash/",
          title: "Bash",
          hoverColor: "var(--yellow)",
        },
        {
          class: "devicon-python-plain",
          link: "https://www.python.org/",
          title: "Python",
          hoverColor: "var(--green)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.layout {
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 30px;
}

.hero-wrapper {
  align-items: center;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  gap: 20px;
}

.hero-title {
  font-size: 45px;
  font-weight: 900;
}

.blog-title {
  font-size: 35px;
  font-weight: 900;
  color: var(--blue);
}
</style>
