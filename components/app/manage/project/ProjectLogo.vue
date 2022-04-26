<template>
  <div class="p-4 rounded shadow bg-base-200 space-y-1.5">
    <span class="label-text text-primary">{{ $t('manage.project.logo') }}</span>
    <div class="flex justify-between items-center">
      <!-- logo preview -->
      <app-logo :project="project" />

      <div class="pl-4">
        <!-- upload element - hidden for styling reasons -->
        <input
          ref="upload"
          class="hidden"
          type="file"
          :accept="LOGO_ALLOWED_TYPES"
          @change="uploadLogo($event)"
        />

        <!-- upload action -->
        <app-button
          as="button"
          class="btn-primary btn-outline"
          :class="{ loading: pendingUpload }"
          btn-text="upload"
          @click="$refs.upload.click()"
        />

        <!-- delete action -->
        <app-button
          as="button"
          class="btn-ghost"
          btn-text="delete"
          @click="deleteLogo()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppButton from '@/components/common/AppButton';
import ImageConstants from '@/mixins/ImageConstants';
import AppLogo from '@/components/common/AppLogo';

export default {
  name: 'ProjectLogo',

  components: { AppLogo, AppButton },

  mixins: [ImageConstants],

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
    async uploadLogo(event) {
      const image = event.target.files[0];

      // No image has been provided
      if (!image) {
        return;
      }

      // Check file type
      if (!this.LOGO_ALLOWED_TYPES.includes(image.type)) {
        await this.$store.dispatch('alert/error', {
          content: this.$t('general.error.upload.type', {
            types: this.LOGO_ALLOWED_TYPES,
          }),
          autoFade: true,
        });
        return;
      }

      // Check file size
      if (image.size > this.LOGO_MAX_SIZE) {
        await this.$store.dispatch('alert/error', {
          content: this.$t('general.error.upload.size', {
            size: `${this.LOGO_MAX_SIZE / 1000000}MB`,
          }),
          autoFade: true,
        });
        return;
      }

      // upload part & preview changes
      const data = await this.$store.dispatch('image-upload/logo', image);
      this.$emit('change', data);
    },

    deleteLogo() {
      this.$emit('change', {});
    },
  },
};
</script>
