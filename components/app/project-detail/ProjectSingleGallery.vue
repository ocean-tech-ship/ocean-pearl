<template>
  <div>
    <!-- controls -->
    <div v-if="numberOfImages > 1" class="flex justify-center pb-4">
      <button
        v-for="index in numberOfImages"
        :key="index"
        type="button"
        class="w-3 h-3 mx-1 mx-2 rounded-full transition duration-300 ease-in-out hover:scale-125"
        :class="{
          'bg-primary': currentIndex === index - 1,
          'bg-base-content': currentIndex !== index - 1,
        }"
        @click="goTo(index - 1)"
      />
    </div>

    <!-- wallpaper (single image) -->
    <div v-if="numberOfImages === 1">
      <img class="object-contain" width="100%" :src="currentImage" alt="" />
    </div>

    <!-- slider (gallery) -->
    <div v-else>
      <div class="flex items-center">
        <div class="hidden lg:block">
          <button @click="previous()">
            <app-icon
              class="text-base-content transition duration-300 ease-in-out hover:scale-125"
              :size="32"
              :data="icons.angleLeft"
            />
          </button>
        </div>

        <div class="flex-grow">
          <transition-group
            tag="div"
            class="overflow-hidden relative w-full h-64 lg:h-80"
            :name="currentIndex < previousIndex ? 'slide-backward' : 'slide'"
          >
            <div v-for="i in [currentIndex]" :key="i">
              <img
                v-touch:swipe="onSwipe"
                class="absolute top-0 left-0 bottom-0 right-0 object-contain w-full h-64 lg:h-80 hover:opacity-70 ease-in-out duration-300"
                :src="currentImage"
                alt=""
                @click="showModal = true"
              />
            </div>
          </transition-group>
        </div>

        <div class="hidden lg:block">
          <button @click="next()">
            <app-icon
              class="text-third transition duration-300 ease-in-out hover:scale-125"
              :size="32"
              :data="icons.angleRight"
            />
          </button>
        </div>
      </div>

      <app-image-modal
        :show="showModal"
        :src="currentImage"
        @close="showModal = false"
      />
    </div>
  </div>
</template>

<script>
import angleLeft from '@iconify/icons-la/angle-left';
import angleRight from '@iconify/icons-la/angle-right';
import AppImageModal from '@/components/common/AppImageModal.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ProjectSingleGallery',

  components: { AppIcon, AppImageModal },

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      icons: {
        angleLeft,
        angleRight,
      },
      previousIndex: 0,
      currentIndex: 0,
      showModal: false,
    };
  },

  computed: {
    numberOfImages() {
      const { images } = this.$props.project;
      return images ? images.length : 0;
    },

    currentImage() {
      const { images } = this.$props.project;
      return images
        ? images[Math.abs(this.currentIndex) % images.length].url
        : null;
    },
  },

  methods: {
    goTo(index) {
      this.previousIndex = this.currentIndex;

      if (index >= this.numberOfImages) {
        this.currentIndex = 0;
      } else if (index < 0) {
        this.currentIndex = this.numberOfImages - 1;
      } else {
        this.currentIndex = index;
      }
    },

    next() {
      this.goTo(this.currentIndex + 1);
    },

    previous() {
      this.goTo(this.currentIndex - 1);
    },

    onSwipe(direction) {
      if (direction === 'left') {
        this.next();
      } else if (direction === 'right') {
        this.previous();
      }
    },
  },
};
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active,
.slide-backward-leave-active,
.slide-backward-enter-active {
  transition: 0.5s;
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
