<template>
  <div class="p-4 shadow rounded bg-base-200">
    <app-form-control>
      <!-- label -->
      <template #label>
        <span class="label-text text-primary">
          {{ $t('manage.project.images.title') }}
        </span>
      </template>

      <!-- image counter -->
      <template #altLabel>
        <span class="label-text-alt">
          {{ `(${project.images.length} / ${PROJECT_IMAGES_MAX_COUNT})` }}
        </span>
      </template>

      <!-- upload element - hidden for styling reasons -->
      <input
        ref="upload"
        class="hidden"
        type="file"
        multiple
        :accept="IMAGE_ALLOWED_TYPES"
        @change="uploadImages($event)"
      />

      <div class="grid gap-4 2xl:grid-cols-2">
        <!-- image items -->
        <project-images-item
          v-for="image in project.images"
          :key="image.id"
          :image="image"
          @delete="deleteImage(image)"
        />

        <!-- upload action -->
        <app-button
          class="w-full h-64 btn-ghost border-primary border-dashed border-2 hover:border-primary text-primary"
          :class="{ loading: pendingUpload }"
          :btn-text="$t('manage.project.images.upload')"
          @click="$refs.upload.click()"
        />
      </div>
    </app-form-control>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppFormControl from '@/components/common/AppFormControl';
import AppButton from '@/components/common/AppButton';
import ProjectImagesItem from '@/components/app/manage/project/ProjectImagesItem';
import ProjectConstants from '@/mixins/ProjectConstants';
import ImageConstants from '@/mixins/ImageConstants';

export default {
  name: 'ProjectImages',

  components: { ProjectImagesItem, AppButton, AppFormControl },

  mixins: [ProjectConstants, ImageConstants],

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState('image-upload', {
      pendingUpload: 'loading',
    }),
  },

  methods: {
    async uploadImages(event) {
      const images = event.target.files;

      // No image has been provided
      if (images?.length === 0) {
        return;
      }

      // Reached limit
      if (
        images.length + this.project.images.length >
        this.PROJECT_IMAGES_MAX_COUNT
      ) {
        await this.$store.dispatch('alert/error', {
          content: this.$t('manage.project.images.limit', {
            limit: this.PROJECT_IMAGES_MAX_COUNT,
          }),
          autoFade: true,
        });
        return;
      }

      // Check file type / size
      for (const image of images) {
        if (!this.IMAGE_ALLOWED_TYPES.includes(image.type)) {
          await this.$store.dispatch('alert/error', {
            content: this.$t('manage.project.images.types', {
              types: this.IMAGE_ALLOWED_TYPES,
            }),
            autoFade: true,
          });
          return;
        }

        if (image.size > this.IMAGE_MAX_SIZE) {
          await this.$store.dispatch('alert/error', {
            content: this.$t('manage.project.images.size', {
              size: `${this.IMAGE_MAX_SIZE / 1000000}MB`,
            }),
            autoFade: true,
          });
          return;
        }
      }

      // upload part & preview changes
      const data = await this.$store.dispatch('image-upload/images', images);
      this.$emit('change', [...this.project.images, ...data]);
    },

    deleteImage(image) {
      this.$emit(
        'change',
        this.project.images.filter((el) => el !== image),
      );
    },
  },
};
</script>
