<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 8,
  },
});

const emmit = defineEmits(["complete"]);
const otpArr = reactive(Array.from({ length: props.length }, () => ""));
const otpInputs = ref([]);

const handleInput = (index) => {
  if (otpArr[index].length > 1) {
    otpArr[index] = otpArr[index][0] || "";
  }

  if (index < props.length - 1 && otpArr[index]) {
    otpInputs.value[index + 1].focus();
  }

  if (otpArr.every((char) => char.length === 1)) {
    emmit("complete", otpArr.join(""));
  }
};

const handlePaste = (event) => {
  event.preventDefault();

  const pasteData = event.clipboardData
    ? event.clipboardDate.getDate("text").slice(0, props.length)
    : "";

  pasteData.split("").forEach((c, i) => {
    otpArr[i] = c;
  });

  const nextIndexFocus =
    pasteData.length < props.length ? pasteData.length : null;

  if (nextIndexFocus !== null) {
    otpInputs.value[nextIndexFocus].$el.focus();
  } else {
    emmit("complete", otpArr.join(""));
  }
};

const handleBackSpace = (event, index) => {
  if (event.key === "Backspace" && !otpArr[index]) {
    const previousIndex = index - 1;

    if (previousIndex >= 0) {
      otpInputs.value[previousIndex].focus();
    }
  }
};
</script>

<template>
  <div class="otp-inputs">
    <input
      v-for="(input, index) in otpArr"
      :key="index"
      class="otp-input"
      type="text"
      maxlength="1"
      v-model="otpArr[index]"
      @input="() => handleInput(index)"
      @paste.prevent="handlePaste"
      @keydown="(event) => handleBackSpace(event, index)"
      ref="otpInputs"
      autocomplete="one-time-code"
    />
  </div>
</template>

<style scoped>
otp-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.otp-input {
  width: 33px;
  height: 33px;
  margin: 0.5rem;
  background-color: #203a43;
  color: white;
  border: 1px solid #2c5364;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px;
  outline: none;
}

.otp-input:focus {
  border-color: #3a9fd9;
  box-shadow: 0 0 5px rgba(58, 159, 217, 0.5);
}
</style>
