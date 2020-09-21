<template>
  <div>
    <Header />
    <div class="login-container">
      <div class="login-title">Login with Email</div>
      <div class="login-input-container">
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  created () {
    document.title = 'Login'
  }
}
</script>
