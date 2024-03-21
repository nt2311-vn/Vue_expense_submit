<script setup>
const emit = defineEmits(["navigate"]);

const navigateToExpForm = () => {
  emit("navigate", "expenseForm");
};
</script>

<template>
  <div class="min-h-screen text-gray-100">
    <!-- Navigation Bar -->
    <nav class="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo and Title -->
        <div class="flex items-center space-x-4">
          <img
            class="h-10 w-auto"
            src="https://5574610.app.netsuite.com/core/media/media.nl?id=719688&c=5574610&h=PIq0UZivPB4mnJ_5kg2j0flA4ee4dsdxKsRO_foVkcYBfq2s"
            alt="logo"
          />
          <span class="text-xl font-bold">Company</span>
        </div>
        <!-- Navigation Links -->
        <div class="flex items-center space-x-6">
          <a href="#" class="hover:text-blue-400 transition duration-300"
            >Home</a
          >
          <a href="#" class="hover:text-blue-400 transition duration-300"
            >Submit Expense Form</a
          >
          <a
            href="#"
            class="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >Log Out</a
          >
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <section
      class="flex items-center justify-center h-full p-10 bg-gradient-to-br from-indigo-900 to-purple-900"
    >
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">
          Welcome to the Expense Management System
        </h1>
        <p class="max-w-2xl text-lg mx-auto">
          This is a simple expense management system that allows you to submit
          your expenses for approval with ease.
        </p>
      </div>
    </section>
  </div>
</template>
