<template>
  <div class="shadow rounded p-4">
    <div class="flex justify-between">
      <p class="small-text text-primary">
        {{ $t('manage.project.socials.title') }}
      </p>

      <main-dropdown>
        <template slot-scope="context">
          <button @click="context.toggleOpen()">
            <app-icon
              class="text-primary"
              :size="32"
              :data="icons.plus"
              :tooltip="$t('general.add')"
            />
          </button>

          <div
            v-if="context.open"
            class="
                shadow
                origin-top-right
                absolute
                right-0
                mt-4
                p-2
                w-44
                z-50
                bg-grey
                border border-primary
                rounded
                overflow-hidden
                shadow-md
              "
          >
            <ul>
              <li
                v-for="social in getSocialMediaList()"
                :key="social.Id"
                class="pb-1"
              >
                <button
                  class="flex items-center"
                  @click="addSocial(social)"
                >
                  <img
                    class="w-4 h-4 mr-2"
                    :src="social.Icon"
                    alt=""
                  />

                  <span>{{ social.Title }}</span>
                </button>
              </li>
            </ul>
          </div>
        </template>
      </main-dropdown>
    </div>

    <project-socials-item
      v-for="(value, propertyName) in socials"
      :key="propertyName"
      class="pb-2"
      :type="propertyName"
      :url="value"
      @change="updateSocial(propertyName, $event)"
      @delete="deleteSocial(propertyName)"
    />

    <p
      v-if="Object.values(socials).length === 0"
      class="small-text"
    >
      {{ $t('manage.project.socials.empty') }}
    </p>
  </div>
</template>

<script>
import plus from '@iconify-icons/la/plus';
import { SocialMedia } from '@/model/SocialMedia';
import MainDropdown from '@/components/common/MainDropdown.vue';
import ProjectSocialsItem from '@/components/app/account/project/socials/ProjectSocialsItem.vue';
import AppIcon from '@/components/common/AppIcon.vue';

export default {
  name: 'ProjectSocials',

  components: { AppIcon, ProjectSocialsItem, MainDropdown },

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
        plus,
      },
      socials: ({ ...this.$props.project.socialMedia}),
    };
  },

  watch: {
    project() {
      // Reset if project gets switched
      this.socials = ({ ...this.$props.project.socialMedia});
    },
  },

  methods: {
    addSocial(social) {
      this.$set(this.socials, social.Id.toLowerCase(), '');
    },

    updateSocial(socialId, newVal) {
      this.$set(this.socials, socialId, newVal);
      this.$emit('change', this.socials);
    },

    deleteSocial(socialId) {
      this.$delete(this.socials, socialId);
      this.$emit('change', this.socials);
    },

    getSocialMediaList() {
      return Object.values(SocialMedia);
    },
  }
}
</script>
