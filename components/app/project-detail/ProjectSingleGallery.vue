<template>
  <div>
    <!-- controls -->
    <div
      v-if="numberOfPictures > 1"
      class="flex justify-center pb-4"
    >
      <button
        v-for="index in numberOfPictures"
        :key="index"
        type="button"
        class="
          w-3
          h-3
          mx-1
          bg-third
          mx-2
          rounded-full
          transition
          duration-300
          ease-in-out
          hover:scale-125
        "
        :class="{ ['bg-primary']: currentIndex === index - 1 }"
        @click="goTo(index - 1)"
      />
    </div>

    <!-- wallpaper (single image) -->
    <div v-if="numberOfPictures === 1">
      <img
        class="object-contain"
        width="100%"
        :src="currentPicture"
        alt=""
      />
    </div>

    <!-- slider (gallery) -->
    <div v-else>
      <transition-group
        tag="div"
        class="overflow-hidden relative w-full h-80"
        :name="currentIndex < previousIndex ? 'slide-backward' : 'slide'"
      >
        <div v-for="i in [currentIndex]" :key="i">
          <img
            class="
              absolute
              top-0
              left-0
              bottom-0
              right-0
              object-contain
              w-full
              h-80
              hover:opacity-70
              ease-in-out
              duration-300
            "
            :src="currentPicture"
            alt=""
            @click="showModal = true"
          />
        </div>
      </transition-group>

      <app-image-modal
        :show="showModal"
        :src="currentPicture"
        @close="showModal = false"
      />
    </div>
  </div>
</template>

<script>
import AppImageModal from '@/components/common/AppImageModal.vue';

export default {
  name: 'ProjectSingleGallery',
  components: { AppImageModal },
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
      showModal: false,
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
    // this.startSlide();
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
</style>
