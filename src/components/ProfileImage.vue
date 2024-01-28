<template>
  <div class="profile-image-wrapper">
    <div>
      <img class="profile-image" rel="preload" :src="imageSrc" alt="profile image"  />
      <span class="emoji">{{ isDark ? emojiDark : emojiLight }}</span>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    emojiDark: {
      type: String,
      required: true,
    },
    emojiLight: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.profile-image {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  transition: box-shadow 0.3s;
  user-select: none;
}

[theme="dark"] .profile-image {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
}

[theme="light"] .profile-image {
  box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.4);
}

.emoji {
  position: relative;
  font-size: x-large;
  text-align: center;
  width: 100%;
  margin-left: -20%;
  line-height: 1.5;
  border-radius: 100%;
  padding: 0.2rem;
  user-select: none;
  -webkit-user-select: none;
  transition: background-color 0.3s, box-shadow 0.3s;
}

[theme="dark"] .emoji {
  background-color: var(--emoji-dark);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.50);
}

[theme="light"] .emoji {
  background-color: var(--emoji-light);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.40)
}

@media (max-width: 480px) {
  .profile-image {
    width: 140px;
    height: 140px;
  }

  .emoji {
    font-size: large;
  }
}
</style>
