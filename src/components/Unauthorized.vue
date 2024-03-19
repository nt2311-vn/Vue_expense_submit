<script setup>
const props = defineProps({
  error: String || "Unauthorized to access this page",
});
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient">
    <div class="text-center">
      <h1 class="text-white text-3xl font-bold font-mono">Access Denied</h1>
      <p class="text-white mt-2 text-xl font-medium font-mono">
        {{ props.error }}
      </p>
    </div>
  </div>
</template>

<style>
.bg-gradient {
  /* Define a gradient from dark orange (#FF8C00) to dark red (#8B0000) */
  background: linear-gradient(to bottom right, #ff8c00, #8b0000);
}
</style>
