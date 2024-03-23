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
  <div
    class="min-h-screen bg-gradient-to-r from-blue-800 to-gray-900 text-white"
  >
    <Loading v-if="loading" />
    <div v-else class="flex items-center justify-center min-h-screen">
      <form @submit.prevent="submitForm" class="space-y-6">
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

<style>
.input-style,
.select-style,
.file-input-style {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25;
}
</style>
