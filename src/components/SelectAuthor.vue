<template>
  <div>
    <label for="author">Filter by author:</label>
    <select v-model="store.selectedAuthor" name="author" id="author">
      <option value="">All</option>
      <option value="jack_sparrow">Jack Sparrow</option>
      <option value="james_bond">James Bond</option>
      <option value="job_blant">Job Blant</option>
      <option value="robert_deniro">Robert De Niro</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from "@/stores/dashboard";
const store = useDashboardStore();
</script>

<style scoped>
select {
  background-color: transparent;
  color: var(--color-text);
  font-size: inherit;
  margin-left: 10px;
  padding: 5px 10px;
}
</style>
