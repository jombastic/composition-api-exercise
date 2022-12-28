<template>
  <div id="listings">
    <Notification :notification="notification" :toggleNotification="toggleNotification" />
    <div v-for="listing in listings" :key="listing.id">
      <ListingsListItem :listing="listing" />
    </div>
    <button class="button is-light" :class="{ 'is-primary': darkMode, 'is-info': !darkMode }" @click="resetListings"
      :disabled="listings.length === 3">
      Reset
    </button>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import ListingsListItem from './ListingsListItem';
import Notification from './Notification';

import useNotification from '../hooks/useNotification';
import useDarkMode from '../hooks/useDarkMode';

defineProps(['listings']);

// access the store
const store = inject('store');

const { darkMode } = useDarkMode();
const { notification, setNotification, toggleNotification } = useNotification();

// methods
const resetListings = () => {
  store.actions.resetListings();
};

// mounted lifecycle hooks
onMounted(() => {
  setNotification('Welcome to NewlineBnB!');
});
</script>
