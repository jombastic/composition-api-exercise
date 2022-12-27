<template>
  <div id="listings">
    <Notification :notification="notification" :toggleNotification="toggleNotification" :isDark="isDark" />
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
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

import useNotification from '../hooks/useNotification';

defineProps(['listings', 'isDark']);

// access the store
const store = useStore();

const { notification, setNotification, toggleNotification } = useNotification();

// methods
const resetListings = () => {
  store.dispatch('resetListings');
};

// mounted lifecycle hooks
onMounted(() => {
  setNotification('Welcome to NewlineBnB!');
});
</script>
