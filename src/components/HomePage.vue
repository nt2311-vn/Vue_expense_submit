<script setup>
const emit = defineEmits(["navigate"]);
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToExpForm = () => {
  router.push({ name: "expenses-form" }).catch((err) => {
    console.log(err);
  });
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
          <a
            href="#"
            class="hover:text-blue-400 transition duration-300"
            @click="navigateToExpForm"
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

    <section
      class="flex items-center justify-center h-full p-10 bg-gradient-to-br from-indigo-900 to-purple-900"
    >
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">Expense Management Form</h1>
        <p class="max-w-2xl text-lg mx-auto">
          Start submitting your expense by choosing the sumbit page
        </p>
      </div>
    </section>
  </div>
</template>
