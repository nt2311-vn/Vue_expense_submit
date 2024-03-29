<script setup>
import { ref, onMounted } from "vue";
import useAuth from "@/composables/useAuth";
import devAuth from "@/composables/devAuth";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";
import Unauthorized from "@/components/Unauthorized.vue";
import OTPInput from "@/components/OTPInput.vue";

const router = useRouter();
const email = ref("");
const otpRequested = ref(false);
const otpRec = ref(null);
const inputMessage = ref("");
const errorMsg = ref("");

const { requestOTP, validateOTP, error, loading, inputError } = useAuth();
const { isDevAuth } = devAuth();

onMounted(() => {
  if (isDevAuth() && import.meta.env.DEV) {
    router.push({ name: "home" }).catch((err) => {
      console.log(err);
    });
  }
});

const getOTP = async () => {
  if (email.value && !otpRequested.value) {
    const otpResult = await requestOTP(email.value);
    const { message, otpId } = otpResult;

    otpRequested.value = true;
    otpRec.value = otpId;
    inputMessage.value = message;
  }
};

const handleOTPComplete = async (otpInput) => {
  if (otpInput) {
    const isVerified = await validateOTP(
      otpInput,
      otpRec.value,
      new Date().toISOString(),
    );

    console.log(`Verified result: ${isVerified}`);

    if (isVerified) {
      console.log("Redirecting to home...");
      router.push({ name: "home" }).catch((err) => {
        console.log(err);
      });
    } else {
      errorMsg.value = inputError;
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
              class="w-full px-4 py-2 text-gray-900 rounded-md focus:ring-blue-500 font-mono font-normal text-center"
              placeholder="Enter your email address here"
            />

            <div v-else>
              <p
                class="text-center text-lg font-mono font-bold"
                v-text="inputMessage"
              />
              <OTPInput
                @complete="handleOTPComplete"
                :errorMessage="errorMsg"
              />
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
