<template>
  <div>
    <section-container>
      <account-header
        :wallet="wallet"
        :projects="projects"
        :selected-project="selectedProject"
        @selectProject="
          updateRequest = {};
          projectIndex = $event;
        "
      />

      <!-- Loading indication -->
      <p v-if="!wallet">Loading...</p>

      <!-- Info Messages -->
      <div v-if="info" class="shadow rounded p-4 my-2">Info: {{ info }}</div>

      <!-- Error Messages -->
      <div v-if="error" class="shadow rounded p-4 my-2">Error: {{ error }}</div>

      <!-- Empty Project -->
      <empty-account v-if="projects && projects.length === 0" class="pt-16" />
    </section-container>

    <div v-if="selectedProject" class="bg-grey py-8">
      <section-container>
        <div class="flex justify-between flex-wrap py-4">
          <div class="flex-grow mr-2">
            <project-title class="pb-4" :project="selectedProject" />

            <project-category
              class="my-4"
              :project="selectedProject"
              @change="updateRequest.category = $event"
            />
          </div>

          <project-logo
            class="pb-4"
            :project="selectedProject"
            @delete="updateRequest.deleteLogo = true"
            @change="updateRequest.logo = $event"
          />
        </div>

        <div class="py-4 grid gap-8 xl:grid-cols-2">
          <div>
            <project-description
              :project="selectedProject"
              @change="updateRequest.description = $event"
              @unset="delete updateRequest.description"
            />
          </div>

          <div>
            <project-socials
              :project="selectedProject"
              @change="updateRequest.socialMedia = $event"
            />
          </div>
        </div>

        <project-pictures
          class="py-4"
          :project="selectedProject"
          @delete="updateRequest.deletedPictures = $event"
          @change="updateRequest.newPictures = $event"
        />

        <!-- save action -->
        <div class="flex justify-center pt-8">
          <app-button :text="$t('general.save')" @click="saveProject()" />
        </div>
      </section-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import SectionContainer from '@/components/common/SectionContainer.vue';
import AppButton from '@/components/common/AppButton.vue';
import AccountHeader from '@/components/app/account/AccountHeader.vue';
import EmptyAccount from '@/components/app/account/EmptyAccount.vue';
import ProjectTitle from '@/components/app/account/project/ProjectTitle.vue';
import ProjectLogo from '@/components/app/account/project/ProjectLogo.vue';
import ProjectDescription from '@/components/app/account/project/ProjectDescription.vue';
import ProjectPictures from '@/components/app/account/project/ProjectPictures.vue';
import ProjectCategory from '@/components/app/account/project/ProjectCategory.vue';
import ProjectSocials from '@/components/app/account/project/socials/ProjectSocials.vue';

export default Vue.extend({
  components: {
    ProjectSocials,
    ProjectCategory,
    SectionContainer,
    AccountHeader,
    AppButton,
    EmptyAccount,
    ProjectTitle,
    ProjectLogo,
    ProjectDescription,
    ProjectPictures,
  },

  middleware: ['session'],

  data() {
    return {
      projectIndex: 0,
      updateRequest: {},
    };
  },

  async fetch({ redirect, store }) {
    try {
      await store.dispatch('account/loadAccount');
    } catch (error) {
      // Authentication failure
      redirect('/');
    }
  },

  head() {
    return {
      title: 'Management',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Login with your favorite wallet provider to manage your project or proposal.',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Login',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Login with your favorite wallet provider to manage your project or proposal.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.rootURL}/management`,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Login | Ocean Pearl`,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content:
            'Login with your favorite wallet provider to manage your project or proposal.',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${this.$config.rootURL}/management`,
        },
      ],
    };
  },

  computed: {
    ...mapState('account', {
      info: 'info',
      error: 'error',
      projects: 'projects',
      wallet: 'wallet',
    }),

    selectedProject() {
      return this.projects?.length > 0
        ? this.projects[this.projectIndex]
        : null;
    },
  },

  methods: {
    saveProject() {
      this.updateRequest.id = this.selectedProject.id;
      this.$store.dispatch('account/updateProject', this.updateRequest);
      this.updateRequest = {};
    },
  },
});
</script>
