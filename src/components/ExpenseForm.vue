<script setup>
import { ref, onMounted } from "vue";
import Loading from "@/components/Loading.vue";

const expenseDate = ref(null);
const vendor = ref(null);
const location = ref(null);
const amount = ref(0);
const file = ref(null);

const error = ref(null);
const loading = ref(false);

const submitForm = () => {
  console.log({ expenseDate: expenseDate.value, department: department.value });
};
</script>

<template>
  <div class="min-h-screen">
    <Loading v-if="loading" />
    <div
      v-else
      class="flex items-center justify-center min-h-screen form-container"
    >
      <form
        @submit.prevent="submitForm"
        class="w-full max-w-lg p-8 space-y-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg form"
      >
        <div>
          <label for="expenseDate" class="block text-xl font-bold"
            >Expense Date:</label
          >
          <input
            type="date"
            id="expenseDate"
            v-model="expenseDate"
            class="input-style"
          />
        </div>

        <div>
          <label for="vendor" class="block text-xl font-bold">Vendor:</label>
          <select id="vendor" v-model="vendor" class="select-style">
            <option value="" disabled>Select a vendor</option>
            <option v-for="vend in vendors" :key="vend.id" :value="vend.id">
              {{ vend.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="itemCode" class="block text-xl font-bold"
            >Item Code:</label
          >
          <select id="itemCode" v-model="itemCode" class="select-style">
            <option value="" disabled>Select an item code</option>
            <option v-for="code in itemCodes" :key="code.id" :value="code.id">
              {{ code.code }}
            </option>
          </select>
        </div>

        <div>
          <label for="location" class="block text-xl font-bold"
            >Location:</label
          >
          <select id="location" v-model="location" class="select-style">
            <option value="" disabled>Select a location</option>
            <option v-for="loc in locations" :key="loc.id" :value="loc.id">
              {{ loc.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="amount" class="block text-xl font-bold">Amount:</label>
          <input
            type="number"
            id="amount"
            v-model="amount"
            class="input-style"
          />
        </div>

        <div>
          <label for="file" class="block text-xl font-bold"
            >Upload Document:</label
          >
          <input
            type="file"
            id="file"
            @change="handleFileChange"
            class="file-input-style"
          />
        </div>

        <button type="submit" class="submit-button-style">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
:root {
  --background-color-dark: #121212;
  --form-background-color-dark: #242424;
  --text-color-dark: #ffffff;
  --border-color-dark: #444444;
  --focus-color-dark: #0080ff;
  --button-bg-color-dark: #0066cc;
  --button-hover-bg-color-dark: #0056b3;

  --background-color-light: #ffffff;
  --form-background-color-light: #f2f2f2;
  --text-color-light: #000000;
  --border-color-light: #cccccc;
  --focus-color-light: #0077ff;
  --button-bg-color-light: #007bff;
  --button-hover-bg-color-light: #0069d9;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: var(--background-color-dark);
    --form-background-color: var(--form-background-color-dark);
    --text-color: var(--text-color-dark);
    --border-color: var(--border-color-dark);
    --focus-color: var(--focus-color-dark);
    --button-bg-color: var(--button-bg-color-dark);
    --button-hover-bg-color: var(--button-hover-bg-color-dark);
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: var(--background-color-light);
    --form-background-color: var(--form-background-color-light);
    --text-color: var(--text-color-light);
    --border-color: var(--border-color-light);
    --focus-color: var(--focus-color-light);
    --button-bg-color: var(--button-bg-color-light);
    --button-hover-bg-color: var(--button-hover-bg-color-light);
  }
}

/* Apply the theme colors */
.form-container {
  background: var(--background-color);
  color: var(--text-color);
}

.form {
  background: var(--form-background-color);
}

.input,
.select {
  background: var(--form-background-color);
  border-color: var(--border-color);
  color: var(--text-color);
}

.input:focus,
.select:focus {
  border-color: var(--focus-color);
}

.button {
  background-color: var(--button-bg-color);
  color: var(--text-color);
}

.button:hover {
  background-color: var(--button-hover-bg-color);
}
</style>
