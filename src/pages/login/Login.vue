<template>
  <div class="container">
    <div class="content">
        <div class="top">
            <div class="header">
                <div class="title">BrandName</div>
            </div>
        </div>
        <div class="login">
            <a-form @submit="onSubmit">
                <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon style="margin-bottom: 24px;" />
                    <a-form-item :fieldDecoratorOptions="{rules: [{ required: true, message: '請輸入 email', whitespace: true}]}" >
                        <a-input size="large" placeholder="請輸入 email" >
                            <a-icon slot="prefix" type="user" />
                        </a-input>
                    </a-form-item>
                    <a-form-item :fieldDecoratorOptions="{rules: [{ required: true, message: '請輸入密碼', whitespace: true}]}" >
                        <a-input size="large" placeholder="請輸入密碼" type="password">
                            <a-icon slot="prefix" type="lock" />
                        </a-input>
                    </a-form-item>
                <a-form-item>
                    <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalFooter from '../../layouts/GlobalFooter'
export default {
    name: 'Login',
    components: {
        GlobalFooter
    },
    data () {
        return {
            logging: false,
            error: ''
        }
    },
    computed: {
    },
    methods: {
        onSubmit (e) {
            e.preventDefault();
            alert('submit!'); 
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background-color: #f0f2f5;
    background-size: 100%;
    .content {
        padding: 32px 0;
        flex: 1;
        @media (min-width: 768px){
            padding: 112px 0 24px;
        }
        .top {
            text-align: center;
            .header {
                line-height: 44px;
                a {
                    text-decoration: none;
                }
                .logo {
                    height: 44px;
                    vertical-align: top;
                    margin-right: 16px;
                }
                .title {
                    font-size: 28px;
                    font-family: 'Roboto';
                    margin-bottom: 40px;
                }
            }
            .desc {
                font-size: 14px;
                color: rgba(0,0,0,.45);
                margin-top: 12px;
                margin-bottom: 40px;
            }
        }
        .login {
            width: 368px;
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