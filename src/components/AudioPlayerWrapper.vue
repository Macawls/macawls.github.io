<template>
  <div class="audio-player-wrapper">
    <AudioPlayer
      :style="{ filter: isLoading ? 'grayscale(1)' : 'grayscale(0)' }"
      ref="player"
      @ended="onEnd"
      :option="config"
      @loadedmetadata="isLoading = false"
    />
    <div class="controls-wrapper">
      <div
        class="controls"
        :style="{ display: isLoading ? 'none' : 'flex' }"
        :class="{
          'animate__animated animate__fadeInDown animate__faster': !isLoading,
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-backward-step"
          @click="previousTrack"
        />
        <div class="middle-icon-wrapper">
          <font-awesome-icon
            class="middle-icon"
            icon="fa-solid fa-circle-pause"
            v-if="isPlaying"
            @click="toggleTrack"
          />
          <font-awesome-icon
            class="middle-icon"
            icon="fa-solid fa-circle-play"
            v-else
            @click="toggleTrack"
          />
        </div>
        <font-awesome-icon icon="fa-solid fa-forward-step" @click="nextTrack" />
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";

export default {
  props: {
    tracks: {
      type: Array,
      required: true,
    },
    volume: {
      type: Number,
      required: false,
      default: 0.1,
    },
  },
  components: {
    AudioPlayer,
  },
  data() {
    return {
      isLoading: true,
      currentTrackIndex: 0,
      isPlaying: false,
      config: {
        src: this.tracks[0].src,
        title: `${this.tracks[0].artist} - ${this.tracks[0].song}`,
        coverImage: this.tracks[0].coverImage,
        progressBarColor: "var(--blue)",
        indicatorColor: "transparent",
        autoPlay: "false",
      },
    };
  },
  watch: {
    currentTrackIndex: function (val) {
      this.setNextTrack(this.tracks[val]);
    }
  },
  setup() {},
  mounted() {
    document.getElementsByClassName("audio__player")[0].children[2].volume =
      this.volume;
  },
  methods: {
    onEnd() {
      this.nextTrack();
    },
    nextTrack() {
      this.currentTrackIndex =
        this.currentTrackIndex < this.tracks.length - 1
          ? this.currentTrackIndex + 1
          : 0;
    },
    previousTrack() {
      this.currentTrackIndex =
        this.currentTrackIndex > 0
          ? this.currentTrackIndex - 1
          : this.tracks.length - 1;
    },
    toggleTrack() {
      if (this.$refs.player.isPlaying) {
        this.$refs.player.pause();
        this.isPlaying = false;
      } else {
        this.$refs.player.play();
        this.isPlaying = true;
      }
    },
    setNextTrack(track) {
      this.isLoading = true;
      this.isPlaying = true;
      this.config.src = track.src;
      this.config.title = `${track.artist} - ${track.song}`;
      this.config.coverImage = track.coverImage;
    },
    getRandomIndex() {
      return Math.floor(Math.random() * this.tracks.length);
    },
  },
};
</script>

<style scoped>


.audio__player {
  
}

svg {
  font-size: xx-large;
  transition: transform 0.1s ease-in-out, color 0.1s ease-in-out;
}

svg:hover {
  transform: scale(1.1);
}

[theme="dark"] svg:hover {
  color: var(--text-dark);
}

[theme="dark"] svg {
  color: var(--text-dark-waiting);
}

[theme="light"] svg:hover {
  color: var(--text-light);
}

[theme="light"] svg {
  color: var(--text-light-waiting);
}

.middle-icon-wrapper svg {
  color: #abb2bf86;
  width: 45px;
  height: 45px;
}

.middle-icon-wrapper svg:hover {
  color: #abb2bf;
}

.middle-icon {
  padding: 10px;
  color: blue;
}

.middle-icon-wrapper {
  display: flex;
  justify-items: center;
  flex-direction: column;
  border-radius: 50%;
}

.controls-wrapper {
  position: absolute;
  bottom: 55%;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 0;
  padding: 0 20px;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
}

.control-button {
  padding: 5px 10px;
  background-color: var(--blue);
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.music-icon {
  object-fit: cover;
  width: 25px;
  height: 25px;
  transition: filter 0.1s ease-in-out;
}

:deep(.audio__player-play-and-title) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

[theme="dark"] .music-icon {
  filter: invert(92%) sepia(2%) saturate(2250%) hue-rotate(186deg)
    brightness(79%) contrast(85%);
}

:deep(.audio__player-play-icon) {
  filter: invert(92%) sepia(2%) saturate(2250%) hue-rotate(186deg)
    brightness(79%) contrast(85%);
}

:deep(.audio__player-progress-container) {
  width: 90%;
}

:deep(.audio__player-progress-wrap) {
  background-color: rgba(255, 255, 255, 0.2);
  height: 6px;
}

[theme="light"] .music-icon {
  filter: invert(21%) sepia(18%) saturate(330%) hue-rotate(190deg)
    brightness(90%) contrast(90%);
}

:deep(.audio__player) {
  gap: 5px;
}

:deep(.audio__player-progress-point) {
  box-shadow: none;
  background-color: var(--purple);
}

:deep(.audio__player-title) {
  all: unset;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

:deep(.audio__player-icon) {
  opacity: 1;
}

:deep(.audio__player-progress-point::after) {
  transform: scale(2);
  background-color: var(--blue);
}

:deep(.audio__player-play) {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  margin-bottom: 10px;
  block-size: fit-content;
}

:deep(.audio__player-play-icon) {
  position: absolute;
  top: 30%;
  left: 30%;
  transform: scale(0);
  transition: transform 0.1s ease-in-out;
  display: none;
}

:deep(.audio__player-time) {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.header-text {
  text-transform: uppercase;
  writing-mode: vertical-lr;
  text-orientation: upright;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

[theme="dark"] .header-text {
  color: var(--text-dark);
}

[theme="light"] .header-text {
  color: var(--text-light);
}

.audio__player-header {
  border-left: 3px solid var(--blue);
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
  width: 30px;
  background-color: #00000032;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9997;
}

.audio-player-wrapper {
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  width: 220px;
  height: 240px;
  z-index: 9995;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out, border-color 0.5s ease,
    transform 0.35s ease-in-out;
}

.audio-player-wrapper {
  transform: translate(-92%);
}

.audio-player-wrapper:hover {
  transform: translate(-20%);
}

[theme="dark"] .audio-player-wrapper {
  background-color: var(--icon-background-dark);
}

[theme="light"] .audio-player-wrapper {
  background-color: var(--icon-background-light);
}

.audio__player-title {
  transition: color 0.3s ease-in-out;
}

/* For future josh, I have no idea what you did */
@media only screen and (max-width: 9000px) {
  .audio-player-wrapper {
    transform: translate(0%);
    width: 280px;
    position: inherit;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: background-color 0.3s ease-in-out, border-color 0.5s ease,
      transform 0.3s ease;
  }

  .audio-player-wrapper:hover {
    transform: translate(0%);
  }

  .audio__player-header {
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
    width: 0px;
    border-left: 0px;
  }

  .header-text {
    display: none;
  }

  :deep(.audio__player-play-icon) {
    transform: scale(1);
  }

  :deep(.audio__player-play:hover .audio__player-play-icon) {
    transform: scale(1);
  }
}
</style>
