<script setup>
import { ref } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 8,
  },
  errorMessage: {
    type: String,
    default: `You must enter ${props.length} characters`,
  },
});

const emmit = defineEmits(["complete", "error"]);
const internalOTP = ref("");

const checkOTPComplete = () => {
  if (internalOTP.value.length === props.length) {
    emmit("complete", internalOTP.value);
  } else {
    emmit("error", `You must input ${props.length} characters`);
  }
};
</script>

<template>
  <div class="otp-inputs">
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <input
      v-model="internalOTP"
      type="text"
      @input="checkOTPComplete"
      class="otp-input"
      maxlength="8"
      autocomplete="one-time-code"
      placeholder="Input or paste OTP here"
    />
  </div>
</template>

<style scoped>
.otp-input {
  width: 100%;
  padding: 10px 15px;
  text-align: center;

  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;

  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.otp-input:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(77, 144, 254, 0.2);
}

.otp-input::placeholder {
  color: #cccccc;
}

.error-message {
  color: #ff4757;
  background-color: #fff3f2;
  border-left: 5px solid #ff4757;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
  font-size: 0.9rem;
}
</style>
