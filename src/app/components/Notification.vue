<template>
  <div v-if="notification.active" 
    class="notification is-light py-3 px-3 is-size-7"
    :class="{ 'is-primary': isDark, 'is-info': !isDark }">
    
    <button class="delete" @click="toggleNotification"></button>
    {{ notification.message }}
  </div>
</template>

<script setup>
defineProps(['notification', 'toggleNotification', 'isDark']);
</script>
