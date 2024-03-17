<script setup>
import { ref } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 8,
  },
});

const emmit = defineEmits(["complete"]);
const internalOTP = ref("");

const checkOTPComplete = () => {
  if (internalOTP.value.length === props.length) {
    emmit("complete", internalOTP.value);
  }
};
</script>

<template>
  <div class="otp-inputs">
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
</style>
