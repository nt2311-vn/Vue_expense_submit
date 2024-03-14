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
  <div :class="{ 'form-container': true, loading, error }">
    <div v-if="error" class="message">{{ error }}</div>
    <div v-else-if="loading" class="message">Loading...</div>
    <div v-else class="form">
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
            class="input"
          />
        </div>

        <div class="mb-4">
          <label
            for="department"
            class="block text-sm font-medium text-gray-700"
          >
            Department:
          </label>
          <select
            type="list"
            id="department"
            v-model="department"
            class="input"
          >
            <option value="" disabled>Select a department</option>
            <option v-for="dept in departments" :key="dept.id" :value="dept.id">
              {{ dept.name }}
            </option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Define default light theme colors */
:root {
  --background-color: #f3f4f6;
  --text-color: #1f2937;
  --border-color: #d1d5db;
  --focus-ring-color: #6366f1;
}

/* Define dark theme colors */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1f2937;
    --text-color: #f3f4f6;
    --border-color: #4b5563;
    --focus-ring-color: #818cf8;
  }
}

.form-container {
  background-color: var(--background-color);
  color: var(--text-color);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.input {
  width: 100%;
  padding: 8px 12px;
  margin-top: 4px;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem; /* 6px */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.input:focus {
  outline: none;
  border-color: var(--focus-ring-color);
  box-shadow: 0 0 0 3px var(--focus-ring-color);
}

.label,
.message {
  display: block;
  margin-bottom: 8px;
  color: var(--text-color);
}
</style>
