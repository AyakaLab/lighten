<template>
  <div class="header-container">
    <router-link to="./">
      <img :src="logo" class="header-icon"/>
    </router-link>
    <el-menu
      :default-active="activeIndex"
      class="header-menu"
      mode="horizontal"
      active-text-color="#48a2e2"
    >
      <el-menu-item index="1">Lighten Link Shortener</el-menu-item>
      <el-menu-item v-if="isLoggedIn" index="2">My Links</el-menu-item>
    </el-menu>
    <el-menu
      :default-active="activeIndex2"
      class="login-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="2">
        <template slot="title">Account</template>
        <el-menu-item v-if="!isLoggedIn" index="2-1" @click="login">Login</el-menu-item>
        <el-menu-item v-if="!isLoggedIn" index="2-2" @click="signup">Sign Up</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import logo from '@/assets/logo.png'

export default {
  props: {
    inProcess: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      logo: logo
    }
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    handleSelect () {
    },
    login () {
      this.$router.push({ name: 'Login' })
    },
    signup () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style lang="less" scoped>
.header-icon {
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  object-fit: cover;
}

.header-menu {
  flex: 1;
}

.header-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

/deep/ .el-menu-item {
  font-size: 16px;
  font-weight: 700;
}

/deep/ .el-submenu__title {
  font-size: 16px;
  font-weight: 700;
}
</style>

<style lang="less">
.el-menu--popup-bottom-start {
  text-align: center;
}

.el-menu--popup {
  min-width: 100px !important;
}
</style>
