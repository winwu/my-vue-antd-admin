<template>
    <a-layout id="main-layout">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="logo">
                <div class="logo-long">My Analytics Panel</div>
                <div class="logo-short">MAP</div>
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[this.$route.name]">
                <a-menu-item key="dashboard-page">
                    <router-link :to="{name: 'dashboard-page'}">
                        <a-icon type="pie-chart" />
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>    
                <a-menu-item key="listview-page">
                    <router-link :to="{name: 'listview-page'}">
                        <a-icon type="table" />
                        <span>List View</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="formview-page">
                    <router-link :to="{name: 'formview-page'}">
                        <a-icon type="edit" />
                        <span>Form View</span>
                    </router-link>
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
            
            <div class="p-1 mt-2 ml-3 mr-2">
                <a-breadcrumb>
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
                    <a-breadcrumb-item>An Application</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            
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
        padding: 0 18px;
        cursor: pointer;
        transition: color 0.3s;
        vertical-align: middle;
        &:hover {
            color: #1890ff;    
        }
    }
    .logo {
        margin: 16px;
        color: #fff;
        text-align: center;
        .logo-long {
            display: block;
        }
        .logo-short {
            display: none;
        }
    }
    .ant-layout-sider-collapsed {
        .logo {
            .logo-long {
                display: none;
            }
            .logo-short {
                display: block;
            }
        }
    }
    .ant-menu-item {
        a {
            text-decoration: none;
        }
        .anticon {
            vertical-align: middle;
            + span {
                vertical-align: middle;
            }
        }
    }
}

#header {
    background: #fff;
    padding: 0;
    height: 60px;
    line-height: 60px;
}

#main-content {
    margin: 10px 16px;
    padding: 15px;
    background: #ffffff;
}

#footer {
    text-align: center;
    padding: 15px;
}
</style>