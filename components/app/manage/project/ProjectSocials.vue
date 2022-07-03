<template>
  <div class="p-4 rounded shadow bg-base-200">
    <div class="flex justify-between">
      <span class="text-primary label-text">
        {{ $t('project.socials') }}
      </span>

      <!-- add new action -->
      <app-dropdown
        class="dropdown-end"
        btn-class="btn-circle btn-xs btn-primary"
        :icon="icons.plus"
        :icon-size="22"
      >
        <app-dropdown-menu class="bg-base-300 h-60 overflow-y-auto">
          <li v-for="social in socialMediaList" :key="social.Id">
            <app-button
              class="btn-ghost"
              :icon="social.Icon"
              :btn-text="social.Title"
              @click="addSocial(social)"
            />
          </li>
        </app-dropdown-menu>
      </app-dropdown>
    </div>

    <!-- social items -->
    <div class="pt-4">
      <project-socials-item
        v-for="(value, propertyName) in project.socialMedia"
        :key="propertyName"
        :type="propertyName"
        :url="value"
        @change="updateSocial(propertyName, $event)"
        @delete="deleteSocial(propertyName)"
      />

      <!-- empty hint -->
      <span
        v-if="Object.values(project.socialMedia).length === 0"
        class="italic"
        >{{ $t('manage.project.socials.empty') }}</span
      >
    </div>
  </div>
</template>

<script>
import plus from '@iconify/icons-la/plus';
import AppButton from '@/components/common/AppButton';
import ProjectSocialsItem from '@/components/app/manage/project/ProjectSocialsItem';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import { SocialMedia } from '@/models/SocialMedia';

export default {
  name: 'ProjectSocials',

  components: {
    AppDropdownMenu,
    AppDropdown,
    ProjectSocialsItem,
    AppButton,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        plus,
      },
    };
  },

  computed: {
    socialMediaList() {
      return Object.values(SocialMedia);
    },
  },

  methods: {
    addSocial(social) {
      const socials = { ...this.project.socialMedia };
      socials[social.Id.toLowerCase()] = '';
      this.$emit('change', socials);
    },
    updateSocial(social, value) {
      const socials = { ...this.project.socialMedia };
      socials[social] = value;
      this.$emit('change', socials);
    },
    deleteSocial(social) {
      const socials = { ...this.project.socialMedia };
      delete socials[social];
      this.$emit('change', socials);
    },
  },
};
</script>
