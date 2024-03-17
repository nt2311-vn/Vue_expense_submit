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
    />
  </div>
</template>

<style scoped>
.otp-input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0.25rem 0;
  background-color: #f3f3f3;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  color: #333;
  text-align: center;
  outline: none;
  box-shadow: 0 0 0 2px #a4c9f3;
}
</style>
