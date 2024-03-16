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
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-800 to-blue-600 text-white"
  >
    <div class="w-full max-w-md mx-auto">
      <transition name="fade" mode="out-in">
        <div
          v-if="!loading && !error"
          key="email-or-otp"
          class="w-full max-w-md px-8 py-6 bg-gray-800 rounded-lg shadow-md"
        >
          <h2
            class="mt-6 text-center text-3xl font-extrabold font-mono text-white"
          >
            Sign in with email
          </h2>
          <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
            <input
              v-if="!otpRequested"
              v-model="email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-2 text-gray-900 rounded-md focus:ring-blue-500 font-mono font-extrabold"
              placeholder="Enter your email address here"
            />

            <div v-else>
              <OTPInput @complete="handleOTPComplete" class="mt-4" />
            </div>

            <button
              type="submit"
              class="w-full py-3 mt-4 bg-blue-600 rounded-md font-mono font-extrabold text-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              v-text="otpRequested ? 'Verify OTP' : 'Get OTP'"
            />
          </form>
        </div>
        <Loading v-else-if="loading" />
        <Unauthorized v-else-if="error" />
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide and fade transitions for the form */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
