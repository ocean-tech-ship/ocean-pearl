<template>
  <div class="shadow rounded p-4">
    <span class="text-primary small-text">
      {{ $t('manage.project.logo') }}
    </span>

    <div class="flex flex-wrap items-center">
      <div class="w-16 h-16 mr-4">
        <img
          v-if="logo"
          :src="logo"
          :alt="$t('general.logo')"
          class="w-16 h-16 inline-block rounded-full"
        />
      </div>

      <div class="flex items-center">
        <div class="mx-2">
          <app-upload
            secondary
            :text="$t('general.upload')"
            :accept="LOGO_ALLOWED_TYPES"
            @change="uploadLogo($event)"
          />
        </div>

        <div class="mx-2">
          <app-button
            class="text-third border-none shadow-none"
            secondary
            :text="$t('general.delete')"
            @click="deleteLogo()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from '@/mixins/Constants';
import AppUpload from '@/components/common/AppUpload.vue';
import AppButton from '@/components/common/AppButton.vue';

export default {
  name: 'ProjectLogo',

  components: {
    AppUpload,
    AppButton,
  },

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
      newLogo: undefined,
    }
  },

  computed: {
    logo() {
      if (this.newLogo === null) { // Logo has been deleted
        return null;
      }

      return this.newLogo || this.$props.project?.logo?.url;
    },
  },

  methods: {
    deleteLogo() {
      this.newLogo && URL.revokeObjectURL(this.newLogo);
      this.newLogo = null;
      this.$emit('delete');
    },

    uploadLogo(handler) {
      if (handler.target.files.length !== 1) {
        return;
      }

      const file = handler.target.files[0];

      if (!this.LOGO_ALLOWED_TYPES.includes(file.type)) {
        this.$store.commit(
          'account/error',
          this.$t('general.error.upload.type', {
            types: this.LOGO_ALLOWED_TYPES,
          })
        );
        return;
      }

      if (file.size > this.LOGO_MAX_SIZE) {
        this.$store.commit(
          'account/error',
          this.$t('general.error.upload.size', {
            size: `${this.LOGO_MAX_SIZE / 1000}KB`,
          })
        );
        return;
      }

      this.newLogo = URL.createObjectURL(file);
      this.$emit('change', file);
    },
  },
}
</script>

<style scoped></style>
