<template>
  <div>
    <Header />
    <LinkInput v-model="linkInput" />
    <div class="btn-group">
      <div>
        <el-button type="primary" round>Shorten Link</el-button>
        <el-button type="info" round>Options</el-button>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import LinkInput from '@/components/LinkInput.vue'

import config from '../../../config.json'

export default {
  components: {
    Header,
    LinkInput
  },
  data () {
    return {
      linkInput: ''
    }
  },
  created () {
    document.title = config['app-name'] ? config['app-name'] + ' Link Shortener' : 'Lighten2 Link Shortener'
  }
}
</script>

<style lang="less" scoped>
.btn-group {
  margin-top: 20px;
  text-align: center;
}
</style>
