<script setup>
const props = defineProps({
  sourceX: {
    type: Number,
    required: true,
  },
  sourceY: {
    type: Number,
    required: true,
  },
  targetX: {
    type: Number,
    required: true,
  },
  targetY: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <g>
    <path
      class="animated"
      fill="none"
      stroke="#6F3381"
      :stroke-width="2.5"
      :d="`M${sourceX},${sourceY} C ${sourceX} ${targetY} ${sourceX} ${targetY} ${targetX},${targetY}`"
    />
    <circle :cx="targetX" :cy="targetY" fill="#fff" :r="5" stroke="#6F3381" :stroke-width="1.5" />
  </g>
</template>
