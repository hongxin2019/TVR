<template>
  <div @click="vis = !vis" class="cursor-pointer">
    <div v-if="vis">
      <div class="flex justify-between">
        <p class="text-xs text-gray-700">visualization</p>
        <p class="text-xs text-gray-500">*click to switch</p>
      </div>
      <img :src="visualization" alt="" />
    </div>
    <div v-else>
      <div class="flex justify-between">
        <p class="text-xs text-gray-700">original version</p>
        <p class="text-xs text-gray-500">*click to switch</p>
      </div>
      <img :src="attributes" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attributes',
  data() {
    return {
      vis: false,
    };
  },
  props: {
    attributes: String,
    visualization: String,
    show: Boolean,
  },
  mounted: function () {
    this.vis = this.show;
  },
};
</script>