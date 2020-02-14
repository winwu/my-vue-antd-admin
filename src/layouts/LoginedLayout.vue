<template>
    <transition name="page-toggle">
        logined
        <router-view />
    </transition>
</template>

<script>
export default {
    name: 'LoginLayout'
}
</script>
