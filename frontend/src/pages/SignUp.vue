<template>
  <div>
    <Header />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  created () {
    document.title = 'Sign Up'
  }
}
</script>
