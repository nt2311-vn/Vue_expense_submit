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

onMounted(() => {
  otpInputs.value = otpInputs.value.slice(0, props.length);
});

const handleInput = (index) => {
  if (index < props.length - 1 && otpArr[index]) {
    otpInputs.value[index + 1].focus();
  }

  if (otpArr.every((char) => char.length === 1)) {
    emmit("complete", otpArr.join(""));
  }
};

const handleKeyDown = (event, index) => {
  if (event.key === "Backspace") {
    handleBackSpace(event, index);
  } else if (event.key.length === 1) {
    if (otpArr[index].length >= 1) {
      event.preventDefault();
    } else {
      Vue.nextTick(() => {
        if (index < props.length - 1) {
          otpInputs.value[index + 1].focus();
        }
      });
    }
  }
};

const handleBackSpace = (event, index) => {
  if (event.key === "Backspace" && !otpArr[index] && index > 0) {
    event.preventDefault();
    otpInputs.value[index - 1].focus();
    otpArr[index - 1] = "";
  }
};

const handlePaste = (event) => {
  event.preventDefault();

  const pasteData = event.clipboardDate.getData("text").slice(0, props.length);

  otpArr.forEach((_, i) => {
    otpArr[i] = pasteData[i] || "";
  });

  otpInputs.value.forEach((input, i) => {
    if (otpArr[i]) {
      input.focus();
    }
  });
  if (otpArr.every((char) => char.length === 1)) {
    emmit("complete", otpArr.join(""));
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
      @keydown="(event) => handleKeydown(event, index)"
      ref="otpInputs"
      autocomplete="one-time-code"
    />
  </div>
</template>

<style scoped>
otp-inputs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: auto;
  min-width: 620px;
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
