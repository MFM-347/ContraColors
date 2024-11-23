<!-- BASED ON tfs-input -->
<template>
  <div class="flex flex-col gap-y-2">
    <label for="text">{{ label }}</label>
    <input
      class="inp"
      name="text"
      type="text"
      :placeholder="placehold"
      :value="val"
      @input="$emit('update:val', $event.target.value)"
    />
  </div>
</template>
<script setup>
const { label, val, placehold } = defineProps({
  label: String,
  val: String,
  placehold: String,
});

defineEmits(["update:val"]);
</script>

<style>
.inp {
  @apply bg-zinc-300 dark:bg-zinc-700 text-gray-900 dark:text-gray-100 px-4 py-2 text-lg outline-none w-full rounded-lg border-2 border-gray-400 dark:border-gray-600 focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors duration-100 tracking-wide;
}
</style>
