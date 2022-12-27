<template>
  <div v-if="notification" 
    class="notification is-light py-3 px-3 is-size-7"
    :class="{ 'is-primary': isDark, 'is-info': !isDark }">
    {{ notification }}
  </div>
</template>

<script setup>
defineProps(['notification', 'isDark']);
</script>
