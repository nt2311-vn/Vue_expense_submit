<script setup>
import { ref } from "vue";
import useAuth from "@/composables/useAuth";
import Loading from "@/components/Loading.vue";
import Unauthorized from "@/components/Unauthorized.vue";
import OTPInput from "@/components/OTPInput.vue";

const email = ref("");
const otpRequested = ref(false);

const { requestOTP, error, loading } = useAuth();

const getOTP = async () => {
  if (email.value && !otpRequested.value) {
    const isOTPSent = await requestOTP(email.value);
    otpRequested.value = isOTPSent;
  }
};

const handleSubmit = () => {
  if (!otpRequested.value) {
    getOTP();
  }
};

const handleOTPComplete = async (otp) => {
  // TODO: Validate OTP
};
</script>

<template>
  <Loading v-if="loading" />
  <Unauthorized v-if="error" />
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-gray-900 text-white"
    v-if="!loading && !error"
  >
    <div
      class="max-w-xl w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg"
    >
      <div>
        <h2
          class="mt-6 text-center text-3xl font-extrabold font-mono text-white"
        >
          Sign in with email
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <input
          v-model="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm font-mono"
          placeholder="Enter your email address here"
        />

        <div v-if="otpRequested">
          <OTPInput @complete="handleOTPComplete" />
        </div>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          v-text="otpRequested ? 'Verify OTP' : 'Get OTP'"
        />
      </form>
    </div>
  </div>
</template>
