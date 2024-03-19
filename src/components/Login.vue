<script setup>
import { ref } from "vue";
import useAuth from "@/composables/useAuth";
import Loading from "@/components/Loading.vue";
import Unauthorized from "@/components/Unauthorized.vue";
import OTPInput from "@/components/OTPInput.vue";

const email = ref("");
const otpRequested = ref(false);
const employee = ref(null);
const inputMessage = ref("");

const { requestOTP, validateOTP, error, loading } = useAuth();

const getOTP = async () => {
  if (email.value && !otpRequested.value) {
    const otpResult = await requestOTP(email.value);
    const { message, employeeId } = otpResult;

    otpRequested.value = true;
    employee.value = employeeId;
    inputMessage.value = message;
  }
};

const handleOTPComplete = async (otp) => {
  if (otp) {
    const isVerified = await validateOTP(otp, employee.value);

    if (isVerified) {
      // TODO: Navigate user to the dashboard for creating tasks
    }
  }
};
</script>

<template>
  <Loading v-if="loading" />
  <Unauthorized v-if="error" :error="error" />
  <transition name="fade" mode="out-in">
    <div
      v-if="!loading && !error"
      class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-blue-800 to-blue-600 text-white"
    >
      <div class="w-full max-w-xl mx-auto">
        <div
          key="email-or-otp"
          class="w-full max-w-xl px-8 py-6 bg-gray-800 rounded-lg shadow-md"
        >
          <h2
            class="mt-6 text-center text-3xl font-extrabold font-mono text-white"
            v-if="!otpRequested"
          >
            Sign in with email
          </h2>
          <img
            v-else
            src="https://5574610.app.netsuite.com/core/media/media.nl?id=719688&c=5574610&h=PIq0UZivPB4mnJ_5kg2j0flA4ee4dsdxKsRO_foVkcYBfq2s"
            class="max-w-52 max-h-16 mb-5 mx-auto rounded-md shadow-md"
            alt="Company Logo"
          />
          <form @submit.prevent="getOTP" class="mt-8 space-y-6">
            <input
              v-if="!otpRequested"
              v-model="email"
              type="email"
              autocomplete="email"
              required
              class="w-full px-4 py-2 text-gray-900 rounded-md focus:ring-blue-500 font-mono font-normal"
              placeholder="Enter your email address here"
            />

            <div v-else>
              <p
                class="text-center text-lg font-mono font-bold"
                v-text="inputMessage"
              />
              <OTPInput @complete="handleOTPComplete" />
            </div>

            <button
              v-if="!otpRequested"
              type="submit"
              class="w-full py-3 mt-4 bg-blue-600 rounded-md font-mono font-extrabold text-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              v-text="'Get OTP'"
            />
          </form>
        </div>
      </div>
    </div>
  </transition>
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
