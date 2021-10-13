<template>
  <div>
    <span class="text-primary small-text">
      {{ $t('manage.project.pictures.title') }}
      <span class="text-third">
        {{ `(${totalPicturesCount} / ${PICTURE_MAX_COUNT})`}}
      </span>
    </span>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-2">
      <!-- already added images -->
      <project-pictures-item
        v-for="picture in pictures"
        :key="picture.key"
        :src="picture.url"
        @delete="deletePicture(picture.key)"
      />

      <!-- newly added images preview -->
      <project-pictures-item
        v-for="(picture, index) in newPicsPreview"
        :key="index"
        :src="picture"
        @delete="deleteNewPicture(picture, index)"
      />

      <!-- upload card -->
      <div
        class="
          w-full
          h-64
          rounded
          bg-secondary
          border-2 border-dashed border-primary
          flex
          justify-center
          items-center
        "
      >
        <app-upload
          secondary
          :text="$t('manage.project.pictures.upload')"
          :accept="PICTURE_ALLOWED_TYPES"
          multiple
          @change="uploadPicture($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '@/mixins/Constants';
import ProjectPicturesItem from '@/components/app/account/project/ProjectPicturesItem.vue';
import AppUpload from '@/components/common/AppUpload.vue';

export default {
  name: 'ProjectPictures',

  components: { ProjectPicturesItem, AppUpload },

  mixins: [Constants],

  props: {
    project: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      deletedIds: [],
      newPics: [],
      newPicsPreview: [],
    }
  },

  computed: {
    totalPicturesCount() {
      return this.pictures.length + this.newPicsPreview.length;
    },

    pictures() {
      return this.$props.project.pictures.filter(
        (pic) => !this.deletedIds.includes(pic.key)
      );
    },
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.deletedIds = [];
      this.newPics.forEach((pic, index) => this.deleteNewPicture(pic, index));
      this.newPicsPreview = [];
    },
  },

  methods: {
    deletePicture(key) {
      if (
        this.$props.project.pictures.find((pic) => pic.key === key) &&
        !this.deletedIds.includes(key)
      ) {
        this.deletedIds.push(key);
        this.$emit('delete', this.deletedIds);
      }
    },

    deleteNewPicture(picture, index) {
      URL.revokeObjectURL(picture);
      this.newPics.splice(index, 1);
      this.newPicsPreview.splice(index, 1);
      this.$emit('change', this.newPics);
    },

    uploadPicture(handler) {
      if (handler.target.files.length + this.totalPicturesCount > this.PICTURE_MAX_COUNT) {
        this.$store.commit('account/error',
          this.$t('manage.project.pictures.limit', {
            count: this.PICTURE_MAX_COUNT})
        );
        return;
      }

      for (const file of handler.target.files) {
        if (!this.PICTURE_ALLOWED_TYPES.includes(file.type)) {
          this.$store.commit(
            'account/error',
            this.$t('general.error.upload.type', {
              types: this.PICTURE_ALLOWED_TYPES,
            })
          )
          return;
        }

        if (file.size > this.PICTURE_MAX_SIZE) {
          this.$store.commit(
            'account/error',
            this.$t('general.error.upload.size', {
              size: `${this.PICTURE_MAX_SIZE / 1000000}MB`,
            })
          )
          return;
        }

        this.newPicsPreview.push(URL.createObjectURL(file));
        this.newPics.push(file);
        this.$emit('change', this.newPics);
      }
    },
  },
}
</script>
