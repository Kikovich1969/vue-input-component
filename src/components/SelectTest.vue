<script>
export default {
  props: ["categories"],
};
</script>

<template>
  <select>
    <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
  </select>
</template>