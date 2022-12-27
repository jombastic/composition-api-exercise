<template>
  <div id="listings">
    <Notification :notification="notification" :isDark="isDark" />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" :isDark="isDark" />
    </div>
    <button class="button is-light" :class="{ 'is-primary': isDark, 'is-info': !isDark }" @click="resetListings"
      :disabled="listings.length === 3">
      Reset
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

// access the store
const store = useStore();

defineProps(['listings', 'isDark']);

// reactive data properties
const notification = ref(null);

// methods
const resetListings = () => store.dispatch('resetListings');

// mounted lifecycle hooks
onMounted(() => {
  notification.value = 'Welcome to NewlineBnB';

  setTimeout(() => {
    notification.value = null;
  }, 1000);
})
</script>
