<template>
  <div>
    <!-- controls -->
    <div
      v-if="numberOfPictures > 1"
      class="flex justify-center pb-4"
    >
      <a
        v-for="index in numberOfPictures"
        :key="index"
        class="w-3 h-3 mx-1 bg-third mx-2 rounded-full transition duration-300 ease-in-out"
        :class="{ ['bg-primary']: currentIndex === index - 1 }"
        href="#"
        @click="goTo(index - 1)"
      />
    </div>

    <!-- slider -->
    <div>
      <transition-group
        tag="div" class="slider"
        :name="currentIndex < previousIndex ? 'slide-backward' : 'slide'"
      >
        <div v-for="i in [currentIndex]" :key="i">
          <img
            :src="currentPicture"
            alt=""
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSingleGallery',

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      timer: null,
      previousIndex: 0,
      currentIndex: 0,
    };
  },

  computed: {
    numberOfPictures() {
      const { pictures } = this.$props.project;
      return pictures ? pictures.length : 0;
    },

    currentPicture() {
      const { pictures } = this.$props.project;
      return pictures
        ? pictures[Math.abs(this.currentIndex) % pictures.length].url
        : null;
    },
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 6000);
    },

    goTo(index) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index >= this.numberOfPictures || index < 0
        ? 0
        : index;
    },

    next() {
      this.goTo(this.currentIndex + 1);
    },

    previous() {
      this.goTo(this.currentIndex - 1);
    }
  },
};
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active,
.slide-backward-leave-active,
.slide-backward-enter-active{
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.slide-backward-enter {
  transform: translate(-100%, 0);
}
.slide-backward-leave-to {
  transform: translate(100%, 0);
}

.slider {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 320px;
}

.slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  object-fit: contain;
  width: 100%;
  height: 320px;
}
</style>
