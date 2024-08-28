<template>
  <div class="flex items-center justify-center">
    <img :src="src" :style="{ width: size, height: size }" alt="Image Viewer" class="rounded-lg shadow-lg"
      @click="downloadImage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
    size: {
      type: String as PropType<string>,
      default: '100px',
    },
  },
  methods: {
    downloadImage() {
      // Add your code here to download the image
      // For example, you can use the `download` attribute of an anchor tag to trigger the download
      // const link = document.createElement('a');
      // link.href = this.src;
      // link.download = 'image.jpg';
      // link.click();
      throw new Error('This is an error');
    },
  },
});
</script>