<template>
    <div class="login-page">
        <div class="container login-page-container text-center">
            <div class="content">
                <a-row type="flex" justify="center">
                    <a-col :sm="24">
                        <div class="top">
                            <div class="login-header">
                                <div class="title">My Analytics Panel</div>
                                <p class="desc">some product desc type here</p>
                            </div>
                        </div>
                        <div class="login">
                            <a-form @submit="onSubmit">
                                <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon/>
                                <a-form-item>
                                    <a-input size="large" placeholder="Please enter Email" >
                                        <a-icon slot="prefix" type="mail" />
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-input size="large" placeholder="Please enter Password" type="password">
                                        <a-icon slot="prefix" type="lock" />
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-button class="w-100" size="large" htmlType="submit" type="primary">Login</a-button>
                                </a-form-item>
                            </a-form>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <login-footer />
        </div>
    </div>
</template>

<script>
import LoginFooter from '../../layouts/LoginFooter'
export default {
  name: 'Login',
  components: {
    LoginFooter
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      alert('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    .login-page-container {
        max-width: 800px;
        margin: 0 auto;
        min-width: 360px;
    }
    .content {
        padding: 32px 0;
        flex: 1;
        @media (min-width: 768px){
            padding: 112px 0 24px;
        }
        .top {
            text-align: center;
            .login-header {
                margin-bottom: 30px;
                a {
                    text-decoration: none;
                }
                .title {
                    font-size: 28px;
                    margin-bottom: 10px;
                }
                .desc {
                    font-size: 14px;
                    color: rgba(0,0,0,.45);
                    margin: 0 auto;
                }
            }
        }
        .login {
            margin: 0 auto;
            @media screen and (max-width: 576px) {
                width: 95%;
            }
            .icon {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.2);
                margin-left: 16px;
                vertical-align: middle;
                cursor: pointer;
                transition: color 0.3s;
                &:hover {
                    color: #1890ff;
                }
            }
        }
    }
}
</style>
