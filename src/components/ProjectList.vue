<template>
  <section class="projects">
    <h2>Projects</h2>
    <ul>
      <li v-for="item in projects" :key="item.name" >
        <a :href="item.uri" target="_blank" :style="{backgroundImage: `url(${item.background})`}">
          <span>{{ item.name }}</span>
          <div class="overlay" :style="{backgroundImage: `url(${item.backgroundBlur})`}" />
        </a>
        <div class="description">
          <p v-for="paragraph in item.description" :key="paragraph.slice(0, 5)">{{ paragraph }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import tapcatBackground from '@/assets/tapcat.jpg';
import tapcatBackgroundBlurred from '@/assets/tapcat-blur.jpg';
import alienBackground from '@/assets/area-52.jpg';
import alienBackgroundBlurred from '@/assets/area-52-blur.jpg';

const projects = [
  {
    name: 'Tapcat',
    uri: 'https://play.google.com/store/apps/details?id=com.wildcardstudios.tapcat',
    background: tapcatBackground,
    backgroundBlur: tapcatBackgroundBlurred,
    description: [
      'Simple infinite runner for iOS and Android.',
      'High score system with social sharing capability via Facebook and high score tracking via Google Play Services.',
    ],
  },
  {
    name: 'Area 52',
    uri: 'https://play.google.com/store/apps/details?id=com.wildcardstudios.tap',
    background: alienBackground,
    backgroundBlur: alienBackgroundBlurred,
    description: [
      'Arcade fidget-clicker for Android.',
      'Rapid-prototyped arcade game built in Unity3D, heavily utilizing its animations engine, event system.',
    ],
  },
];

export default {
  name: 'ProjectList',
  data() {
    return {
      projects,
    };
  },
  components: {

  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    justify-content: center;
    margin: 30px 20px;
  }
}

a {
  display: inline-block;
  width: 200px;
  height: 150px;
  flex: 0 1 200px;
  position: relative;

  border-radius: 10px;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0;
  }

  span {
    position: absolute;

    left: 0;
    right: 0;
    vertical-align: middle;

    top: 50%;
    transform: translateY(-50%);
    margin: auto;

    z-index: 1;

    color: #ffffff;
    text-shadow: 0 0 10px #000000, 0 0 10px #000000, 0 0 10px #000000;
  }
}

a,
.overlay {
  background-size: 200px 150px;
  background-position: center;
  transition: all 200ms linear;
}

a:hover,
.overlay {
  background-size: 220px 165px;
}

a:hover {
  .overlay {
    background-size: 220px 165px;
    opacity: 1;
  }
}

.description {
  flex: 1 1 200px;
  max-width: 600px;

  p {
    margin: 10px 30px;
    text-align: left;
    line-height: 20px;

    &:first-child {
      font-size: 20px;
      line-height: 25px;
      font-weight: 500;
    }
  }
}

section {
  // Apply gradient to improve text visibility.
  // Have this be done on the client, as the height of this section will
  // change between devices, thus the gradient may not be properly placed.
  background: radial-gradient(
      ellipse 30% 70%,
      rgba(0, 0, 0, 0.5) 50%,
      transparent 100%
    ),
    url("../assets/projects-background.jpg") 50% 80% / cover;
  color: #ffffff;
  text-shadow: 0 0 2px #000000;
}
</style>
