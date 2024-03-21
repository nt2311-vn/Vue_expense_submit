<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["navigate"]);

const navigateToExpForm = () => {
  emit("naviage", "expenseForm");
};
</script>

<template>
  <div class="min-h-screen bg-blue-500 text-white">
    <nav class="bg-blue-700">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <div>
              <a href="#" class="flex items-center py-5 px-2 text-white">
                <img
                  src="https://5574610.app.netsuite.com/core/media/media.nl?id=719688&c=5574610&h=PIq0UZivPB4mnJ_5kg2j0flA4ee4dsdxKsRO_foVkcYBfq2s"
                  alt="logo"
                  class="h-8 w-8"
                />
              </a>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="#" class="py-5 px-3 text-white">Home</a>
              <a
                href="#"
                class="py-5 px-3 text-white"
                @click="navigateToExpForm"
                >Submit Expense Form</a
              >
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a
                href="#"
                class="py-2 px-3 bg-blue-300 text-blue-900 rounded hover:bg-blue-200 transition duration-300"
                >Log out</a
              >
            </div>
        </div>
      </div>
    </nav>
    <section class="text-center p-10">
      <h1 class="text-4xl font-bold">Welcome to the Expense Management System</h1>
      <p class="mt-5 text-lg">
        This is a simple expense management system that allows you to submit
        your expenses for approval.
      </p>
    </section>
  </div>
</template>
