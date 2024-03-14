<script setup>
import { ref, onMounted } from "vue";
import getDepartment from "@/composables/getDepartment.js";
import Loading from "@/components/Loading.vue";

const { departments, error, loading, fetchDepartment } = getDepartment();

const expenseDate = ref(null);
const department = ref("");
onMounted(fetchDepartment);

const submitForm = () => {
  console.log({ expenseDate: expenseDate.value, department: department.value });
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-r from-blue-800 to-gray-900 text-white"
  >
    <div v-if="error" class="text-red-400">{{ error }}</div>
    <Loading v-if="loading" />
    <div v-else class="flex items-center justify-center min-h-screen">
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label
            for="expenseDate"
            class="block text-xl font-bold text-gray-200 font-mono"
          >
            Expense Date:
          </label>
          <input
            type="date"
            id="expenseDate"
            v-model="expenseDate"
            class="w-full px-3 py-2 mt-1 bg-gray-700 border bordergray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300 text-xl font-mono"
          />
        </div>

        <div>
          <label
            for="department"
            class="block text-xl font-bold text-gray-200 font-mono"
          >
            Department:
          </label>
          <select
            type="list"
            id="department"
            v-model="department"
            class="w-full px-3 py-2 mt-1 bg-gray-700 border bordergray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 text-white text-xl font-mono"
          >
            <option value="" disabled>Select a department</option>
            <option v-for="dept in departments" :key="dept.id" :value="dept.id">
              {{ dept.name }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-600 font-mono font-bold text-2xl rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
