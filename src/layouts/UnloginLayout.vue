<template>
    <transition name="page-toggle">
        unlogined
        <router-view />
    </transition>
</template>

<script>
export default {
    name: 'UnloginLayout'
}
</script>
