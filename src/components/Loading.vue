<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-opacity-50 bg-gray-800"
  >
    <div class="text-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"
        role="status"
      ></div>
      <p class="mt-2 text-white text-2xl font-mono font-bold">Loading...</p>
    </div>
  </div>
</template>

<style>
.spinner-border {
  border-color: transparent;
  border-top-color: currentColor;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}

@-webkit-keyframes spinner-border {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
</style>
