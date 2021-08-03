<template>
  <div>
    <span class="text-primary small-text">
      {{ $t('manage.project.pictures.title') }}
    </span>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-2">
      <!-- already added images -->
      <project-pictures-item
        v-for="picture in pictures"
        :key="picture.id"
        :src="picture.url"
        @delete="deletePicture(picture.id)"
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
          @change="uploadPicture($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '@/mixins/Constants'
import ProjectPicturesItem from '@/components/app/account/project/ProjectPicturesItem'
import AppUpload from '@/components/common/AppUpload'

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
    pictures() {
      return this.$props.project.pictures.filter(
        (pic) => !this.deletedIds.includes(pic.id)
      )
    },
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.deletedIds = []
      this.newPics.forEach((pic, index) => this.deleteNewPicture(pic, index))
    },
  },

  methods: {
    deletePicture(id) {
      if (
        this.$props.project.pictures.find((pic) => pic.id === id) &&
        !this.deletedIds.includes(id)
      ) {
        this.deletedIds.push(id)
        this.$emit('delete', this.deletedIds)
      }
    },

    deleteNewPicture(picture, index) {
      URL.revokeObjectURL(picture)
      this.newPics.splice(index, 1)
      this.newPicsPreview.splice(index, 1)
      this.$emit('change', this.newPics)
    },

    uploadPicture(handler) {
      if (handler.target.files.length !== 1) {
        return
      }

      // Delete previous images because we only support one image ATM
      this.$props.project.pictures.forEach((pic) => this.deletePicture(pic.id))
      this.newPics.forEach((pic, index) => this.deleteNewPicture(pic, index))

      for (const file of handler.target.files) {
        if (!this.PICTURE_ALLOWED_TYPES.includes(file.type)) {
          this.$store.commit(
            'account/error',
            this.$t('general.error.upload.type', {
              types: this.PICTURE_ALLOWED_TYPES,
            })
          )
          return
        }

        if (file.size > this.PICTURE_MAX_SIZE) {
          this.$store.commit(
            'account/error',
            this.$t('general.error.upload.size', {
              size: `${this.PICTURE_MAX_SIZE / 1000000}MB`,
            })
          )
          return
        }

        this.newPicsPreview.push(URL.createObjectURL(file))
        this.newPics.push(file)
        this.$emit('change', this.newPics)
      }
    },
  },
}
</script>

<style scoped></style>
