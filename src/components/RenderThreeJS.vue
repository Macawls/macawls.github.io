<template>
  <Renderer
    ref="renderer"
    antialias
    resize
    :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }"
  >
    <Camera
      :look-at="{ x: 0, y: 0, z: 0 }"
      ref="camera"
      :fov="50"
      :position="{ x: 0, y: 3.5, z: 20 }"
    />
    <Scene :background="isDark ? '#1e222a' : '#9ea0a4'"
      >:
      <PointLight ref="light0" :intensity="0.6"  :position="{ x: 0, y: 10, z: 0 }">
        <Sphere :radius="1" />
      </PointLight>
      <PointLight ref="light1"  :position="{ x: 10, y: 0, z: 0 }">
        <Sphere :radius="1" />
      </PointLight>
      <PointLight ref="light2"  :position="{ x: 0, y: 0, z: 10 }">
        <Sphere :radius="1" />
      </PointLight>
      <PointLight ref="light3"  :position="{ x: -10, y: 0, z: 0 }">
        <Sphere :radius="1" />
      </PointLight>
      <PointLight ref="light4"  :position="{ x: 0, y: 0, z: -10 }">
        <Sphere :radius="1" />
      </PointLight>
      <RectAreaLight
        color="#61afef"
        :position="{ x: 7, y: 0, z: -7 }"
        v-bind="rectLightsProps"
        cast-shadow
      />
      <RectAreaLight
        color="#e06c75"
        :position="{ x: 7, y: 0, z: 7 }"
        v-bind="rectLightsProps"
        cast-shadow
      />
      <RectAreaLight
        color="#98c379"
        :position="{ x: -7, y: 0, z: -7 }"
        v-bind="rectLightsProps"
        cast-shadow
      />
      <RectAreaLight
        color="#e5c07b"
        :position="{ x: -7, y: 0, z: 7 }"
        v-bind="rectLightsProps"
        cast-shadow
      />
      <RectAreaLight
        color="#c678dd"
        :position="{ x: 0, y: 7, z: 0 }"
        v-bind="rectLightsProps"
        cast-shadow
      />
      <Box
        :size="10"
        :position="{ x: 0, y: 0, z: 0 }"
        receive-shadow
        cast-shadow
      >
      <StandardMaterial color="#abb2bf" :props="{ displacementScale: 0.02, roughness: 0.1, metalness: 0.1 }" >
        <Texture refraction :refraction-ratio="0.95" :props="texturesProps" src="/assets/textures/apu.png" />
            <Texture :props="texturesProps" src="/assets/textures/DisplacementMap.png" name="displacementMap" />
            <Texture :props="texturesProps" src="/assets/textures/NormalMap.png" name="normalMap" />
            <Texture :props="texturesProps" src="/assets/textures/AmbientOcclusionMap.png" name="aoMap" />
      </StandardMaterial>
      </Box>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <!-- Post
      <UnrealBloomPass :strength="1" />
      <HalftonePass :radius="0.01" :scatter="0.005" />
      <UnrealBloomPass :strength="0.1" />
         -->
      <FXAAPass />
      <UnrealBloomPass :strength="0.2" />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Camera, 
  Renderer, Scene, 
  RectAreaLight,
  PointLight 
} from "troisjs";

export default {
  components: {
    PointLight,
    RectAreaLight,
    Camera,
    Renderer,
    Scene,
  },
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const light1 = this.$refs.light1.light;
    const light2 = this.$refs.light2.light;
    const light3 = this.$refs.light3.light;
    const light4 = this.$refs.light4.light;
    const d = 0.1;

    renderer.onBeforeRender(() => {
      const time = Date.now() * 0.001;
      
      light1.intensity = Math.sign(0.1 * time) * d;
      light2.intensity = Math.sign(0.2 * time) * d;
      light3.intensity = Math.sign(0.3 * time) * d;
      light4.intensity = Math.sign(0.4 * time) * d;

    });
  },
  data() {
    return {
      rectLightsProps: {
        lookAt: { x: 0, y: 0, z: 0 },
        intensity: 10,
        width: 5,
        height: 5,
        helper: true,
      },
      lights: [],
      lightIntensities: [1.0, 1.0, 1.0, 1.0]
    };
  },
};
</script>
