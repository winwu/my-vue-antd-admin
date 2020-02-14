<template>
  <div class="footer">
    <div class="links">
      <a href="#">link1</a>
      <a href="#">link2</a>
      <a href="#">link3</a>
    </div>
    <div class="copyright">
      copyright  &copy; statement here.
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
}
</script>

<style lang="less" scoped>
  .footer{
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
    .copyright{
      color: rgba(0,0,0,.45);
      font-size: 14px;
    }
    .links{
      margin-bottom: 8px;
      a:not(:last-child) {
        margin-right: 40px;
      }
      a{
        color: rgba(0,0,0,.45);
        -webkit-transition: all .3s;
        transition: all .3s;
      }
    }
  }
</style>