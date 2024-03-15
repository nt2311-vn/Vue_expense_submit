<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 10,
  },
});

const emmit = defineEmits(["complete"]);
</script>
