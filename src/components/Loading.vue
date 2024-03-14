<template>
  <div
    :class="`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center ${selectedItem.gradient}`"
  >
    <div class="text-center">
      <div :class="selectedItem.animation">
        {{ selectedItem.icon }}
      </div>
      <p class="mt-2 text-white text-2xl font-mono font-bold">
        {{ selectedItem.phrase }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items = [
  {
    gradient: "bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800",
    animation: "swim",
    icon: "🐋",
    phrase: "Swimming with whales...",
  },
  {
    gradient: "bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700",
    animation: "shake",
    icon: "🍣",
    phrase: "Rolling sushi...",
  },
  {
    gradient: "bg-gradient-to-r from-red-800 via-red-900 to-red-800",
    animation: "flip",
    icon: "🍜",
    phrase: "Boiling ramen...",
  },
  {
    gradient: "bg-gradient-to-r from-yellow-800 via-yellow-900 to-yellow-800",
    animation: "ascend",
    icon: "🚀",
    phrase: "Flying to the moon...",
  },
  {
    gradient: "bg-gradient-to-br from-green-800 via-green-900 to-green-800",
    animation: "typing",
    icon: "👨‍💻",
    phrase: "Coding to infinity...",
  },
  {
    gradient: "bg-gradient-to-r from-orange-900 via-red-800 to-yellow-900",
    animation: "slither",
    icon: "🪱",
    phrase: "Riding sandworm to attack Harkonen...",
  },
  {
    gradient: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    animation: "meditate",
    icon: "🐼",
    phrase: "Chanting Inner peace...",
  },
];

const selectedItem = ref({});

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

onMounted(() => {
  selectedItem.value = getRandomElement(items);
});
</script>

<style>
.swim {
  animation: swim 5s ease-in-out infinite;
}
.shake {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
}
.flip {
  animation: flip 3s ease-in-out infinite;
}
.ascend {
  animation: ascend 5s ease-in-out infinite;
}
.typing {
  animation: typing 2s steps(22) infinite;
}
.slither {
  animation: slither 3s linear infinite;
}

.meditate {
  animation: breathe 5s ease-in-out infinite;
}

@keyframes swim {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

@keyframes ascend {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes typing {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-30px);
  }
}

@keyframes slither {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }

  @keyframes breathe {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
}
</style>
