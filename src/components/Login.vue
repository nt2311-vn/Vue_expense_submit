<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const email = ref("");
const otp = ref("");
const otpRequested = ref(false);

const { requestOTP, error, loading } = useAuth();

const getOTP = async () => {};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-gray-900 text-white"
  >
    <div
      class="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg"
    >
      <div>
        <h2
          class="mt-6 text-center text-3xl font-extrabold font-mono text-white"
        >
          Sign in to your account
        </h2>
      </div>
      <form @submit.prevent="requestOtp" class="mt-8 space-y-6">
        <input
          v-model="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm font-mono"
          placeholder="Email address"
        />

        <div v-if="otpRequested">
          <input
            v-model="otp"
            type="text"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="OTP"
          />
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
