<template>
  <app-form-control>
    <!-- label -->
    <template #label>
      <span class="label-text text-primary">
        {{ label }}
      </span>
    </template>

    <!-- character counter -->
    <template v-if="!!maxLength" #altHint>
      <span class="label-text-alt">
        {{ `(${value.length} / ${maxLength})` }}
      </span>
    </template>

    <!-- editor -->
    <div>
      <!-- controls -->
      <div class="flex flex-wrap justify-between items-center">
        <div class="tabs tabs-boxed pb-2">
          <div
            v-for="mode in modes"
            :key="mode"
            :class="{ 'tab-active': activeMode === mode }"
            class="tab tab-bordered"
          >
            <button class="" @click="activeMode = mode">
              {{ mode }}
            </button>
          </div>
        </div>
        <a
          class="badge my-2"
          target="_blank"
          href="https://markdownguide.org/cheat-sheet/"
        >
          <app-icon :data="icons.externalLinkAlt" :size="16" class="mr-1" />
          {{ $t('editor.markdown') }}
        </a>
      </div>
      <!-- content -->
      <div>
        <!-- editor -->
        <div v-if="activeMode === modes.editor">
          <textarea
            class="textarea w-full border-none"
            :rows="rows"
            :value="value"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :style="{ height: editorHeight }"
            @input="$emit('input', $event.target.value)"
            @mouseup="storeEditorHeight"
          />
        </div>
        <!-- preview -->
        <div
          v-if="activeMode === modes.preview"
          class="w-full rounded p-4 bg-base-100 resize-y overflow-auto"
          :style="{
            height: editorHeight,
            marginBottom: '7px',
          }"
          @mouseup="storeEditorHeight"
        >
          <div v-dompurify-html="compiledMarkdown" class="prose" />
        </div>
      </div>
    </div>
  </app-form-control>
</template>

<script>
import { marked } from 'marked';
import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import AppIcon from '@/components/common/AppIcon';
import AppFormControl from '~/components/common/AppFormControl';

const modes = {
  editor: 'Editor',
  preview: 'Preview',
};

export default {
  name: 'MarkdownEditor',

  components: { AppFormControl, AppIcon },

  props: {
    value: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 4,
    },
    maxLength: {
      type: Number,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      icons: {
        externalLinkAlt,
      },
      modes,
      activeMode: 'Editor',
      editorHeight: '130px',
    };
  },

  computed: {
    compiledMarkdown() {
      return marked(this.$props.value);
    },
  },

  methods: {
    storeEditorHeight(element) {
      this.editorHeight = `${element.target.clientHeight}px`;
    },
  },
};
</script>
