<template>
  <div>
    <Header />
    <div class="register-container">
      <div class="register-title">Register with Email</div>
      <div class="register-input-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="email">
            <el-input v-model="ruleForm.email" type="email" placeholder="Email" class="input-element"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="Password" class="input-element"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.passwordRepeat" type="password" placeholder="Repeat Password" class="input-element"></el-input>
          </el-form-item>
          <div class="input-element">
            <span>Already have an account? <router-link :to="{ name: 'Login' }">Login</router-link></span>
          </div>
          <div class="input-element btn-group">
            <el-button type="primary" plain>Register</el-button>
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
        password: '',
        passwordRepeat: ''
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

    }
  },
  created () {
    document.title = 'Sign Up'
  }
}
</script>

<style lang="less" scoped>
.register-container {
  margin: 60px auto 20px;
  max-width: 840px;
  width: 100%;
  padding: 0 20px;
}

.register-input-container {
  margin-top: 30px;
  max-width: 300px;
}

.register-title {
  font-size: 20px;
  font-weight: 500;
}

.btn-group {
  margin-top: 10px;
}
</style>
