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
          <el-form-item prop="code" class="verify-code">
            <el-input v-model="ruleForm.code" type="number" placeholder="Verification Code" class="input-element verify-input" @input="digitLimit"></el-input>
            <el-button type="primary" plain class="verify-btn" @click="sendCode">Send Code</el-button>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="Password" class="input-element"></el-input>
          </el-form-item>
          <el-form-item prop="passwordRepeat">
            <el-input v-model="ruleForm.passwordRepeat" type="password" placeholder="Confirm Password" class="input-element"></el-input>
          </el-form-item>
          <div class="input-element">
            <span>Already have an account? <router-link :to="{ name: 'Login' }">Login</router-link></span>
          </div>
          <div class="input-element btn-group">
            <el-button type="primary" plain @click="register">Register</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios'

import Header from '@/components/Header.vue'
import config from '../../../config.json'

export default {
  components: {
    Header
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'))
      } else {
        if (this.ruleForm.passwordRepeat !== '') {
          this.$refs.ruleForm.validateField('passwordRepeat')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input same password again'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('Password does not match!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        code: '',
        password: '',
        passwordRepeat: ''
      },
      rules: {
        email: [
          { required: true, message: 'Email Address is reuqired', trigger: 'change' },
          { type: 'email', message: 'Please input valid email address', trigger: ['blur', 'change'] }
        ],
        code: [
          { required: true, message: 'Verify Code is reuqired', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Password is required', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' },
          { min: 8, message: 'Password must be at least 8 characters', trigger: 'blur' }
        ],
        passwordRepeat: [
          { required: true, message: 'Confirm Password is required', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' },
          { min: 8, message: 'Password must be at least 8 characters', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    digitLimit (value) {
      if (this.ruleForm.code.length > 6) {
        this.ruleForm.code = this.ruleForm.code.slice(0, 6)
      }
    },
    sendCode () {
      Axios.post(config['api-server'] + '/register/code', { action: 'postCode' })
    },
    register () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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

.verify-code {
  /deep/ .el-form-item__content {
    display: flex;
    flex-direction: row;
    .verify-input {
      /deep/ input {
        border-right: none;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        &[type=number] {
          -moz-appearance: textfield;
        }
      }
    }
    .verify-btn {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}

.btn-group {
  margin-top: 10px;
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 992px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 640px) {
  .register-input-container {
    max-width: 100%;
  }
}
@media screen and (max-width: 480px) {
}
</style>
