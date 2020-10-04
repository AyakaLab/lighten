<template>
  <div class="login">
    <Header />
    <div class="login-container">
      <div class="login-title">Login with Email</div>
      <div class="login-input-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" type="email" placeholder="Email" class="input-element"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="Password" class="input-element"></el-input>
          </el-form-item>
          <div class="input-element btn-group">
            <el-button type="primary" plain @click="login">Login</el-button>
            <el-button type="info" plain @click="register">Register</el-button>
          </div>
        </el-form>
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
  data () {
    return {
      ruleForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Email Address is reuqired', trigger: 'change' },
          { type: 'email', message: 'Please input valid email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'blur' },
          { min: 8, message: 'Password must be at least 8 characters', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {

    },
    register () {
      this.$router.push({ name: 'Register' })
    }
  },
  created () {
    document.title = 'Login'
  }
}
</script>

<style lang="less" scoped>
.login-container {
  margin: 60px auto 20px;
  max-width: 840px;
  width: 100%;
  padding: 0 20px;
}

.login-input-container {
  margin-top: 30px;
  max-width: 300px;
}

.login-title {
  font-size: 20px;
  font-weight: 500;
}
</style>
