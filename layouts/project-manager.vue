<template>
  <div tabindex="0">
    <notification-bar />
    <manage-scaffold>
      <!-- project navigator -->
      <template #navigation>
        <ul class="menu p-4 py-8 overflow-y-auto space-y-2">
          <li class="text-md text-center border-b p-2">
            {{ $t('manage.projects.associated') }}
          </li>

          <!-- loading indicator -->
          <li v-if="loading">
            <button type="button" class="btn btn-ghost loading btn-wide" />
          </li>

          <!-- associated projects -->
          <li v-for="project in projects" :key="project.id" class="btn-wide">
            <nuxt-link
              :to="`/manage/projects/${project.id}`"
              active-class="btn-primary"
            >
              {{ project.title }}
            </nuxt-link>
          </li>
        </ul>
      </template>

      <!-- mobile nav support -->
      <template #mobile-nav-support>
        <div class="flex items-center px-4 md:px-8">
          <div class="flex-grow text-primary font-bold line-clamp-1">
            <span v-if="selectedProject">
              {{ selectedProject.title }}
            </span>
          </div>

          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-primary btn-outline btn-sm m-2">
              {{ $t('manage.projects.title') }}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li v-for="project in projects" :key="project.id">
                <nuxt-link
                  :to="`/manage/projects/${project.id}`"
                  active-class="text-primary"
                >
                  {{ project.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </template>

      <!-- project content -->
      <main class="p-2 px-4 md:px-8 h-full w-full">
        <nuxt />
      </main>
    </manage-scaffold>
    <primary-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Vue from 'vue';
import ManageScaffold from '@/components/app/manage/ManageScaffold';
import NotificationBar from '@/components/app/header/NotificationBar';
import PrimaryFooter from '@/components/app/footer/PrimaryFooter';

export default Vue.extend({
  components: { NotificationBar, PrimaryFooter, ManageScaffold },

  async fetch() {
    await this.$store.dispatch('account/softLoad');
  },

  head() {
    return {
      title: this.$t('manage.projects.meta.title'),
    };
  },

  computed: {
    ...mapState('account', {
      loading: 'loading',
      projects: 'projects',
    }),
    selectedProject() {
      return this.projects.find(
        (project) => project.id === this.$route.params.project,
      );
    },
  },
});
</script>
