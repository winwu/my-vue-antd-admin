<template>
    <a-layout id="main-layout">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="logo" />
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item key="1">
                    <a-icon type="pie-chart" />
                    <span>Dashboard</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="table" />
                    <span>List View</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="edit" />
                    <span>Form View</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        
        <a-layout>
            <a-layout-header id="header">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="()=> collapsed = !collapsed"
                />
            </a-layout-header>
            <a-layout-content id="main-content">
                <router-view />
            </a-layout-content>
            <a-layout-footer id="footer">
                copyright ©2020 statement here.
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
export default {
    name: 'RouteView',
    data() {
        return {
            collapsed: false,
        };
    },
}
</script>

<style lang="scss" scoped>
#main-layout {
    min-height: 100vh;
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: #1890ff;    
        }
    }
    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
}

#header {
    background: #fff;
    padding: 0;
}

#main-content {
    margin: 12px 16px;
    padding: 15px;
    background: #ffffff;
}

#footer {
    text-align: center;
    padding: 15px;
}
</style>