<script setup>
import { ref, onMounted } from "vue";
import getDepartment from "./composables/getDepartment.js";

const { departments, error, loading, fetchDepartment } = getDepartment();

const expenseDate = ref("");
const department = ref("");
onMounted(fetchDepartment);

const submitForm = () => {
  console.log({ expenseDate: expenseDate.value, department: department.value });
};
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="loading">Loading...</div>
  <div v-else>
    <form
      class="max-w-md mx-auto my-8 p-6 border rounded-lg shadow-lg"
      @submit.prevent="submitForm"
    >
      <div class="mb-4">
        <label
          for="expenseDate"
          class="block text-sm font-medium text-gray-700"
        >
          Expense Date:
        </label>
        <input
          type="date"
          id="expenseDate"
          v-model="expenseDate"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div class="mb-4">
        <label for="department" class="block text-sm font-medium text-gray-700">
          Department:
        </label>
        <select
          type="list"
          id="department"
          v-model="department"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="" disabled>Select a department</option>
          <option v-for="dept in departments" :key="dept.id" :value="dept.id">
            {{ dept.name }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>
