<template>
    <transition name="page-toggle">
        <!-- <keep-alive v-if="multipage">
        <router-view />
        </keep-alive> -->
        <!-- <router-view v-else /> -->
        Router view:
        <router-view />
    </transition>
</template>

<script>
export default {
    name: 'RouteView',
    computed: {
        // multipage () {
        //     return this.$store.state.setting.multipage
        // }
    }
}
</script>

<style scoped>
</style>