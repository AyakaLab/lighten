<template>
  <div class="link-input-container">
    <input
      type="text"
      id="link"
      required
      v-model="link"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: ''
    }
  },
  watch: {
    link (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less" scoped>
.link-input-container {
  padding: 0 20px;
  display: flex;
  align-items: center;
}

#link {
  width: 70%;
  margin: 0 auto;
  height: 40px;
  border-radius: 25px;
  margin-top: 50px;
  border: 3px solid #48a2e2;
  outline: none;
  padding: 0 15px;
}
</style>
