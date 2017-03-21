<template>
 <div id="first">
    <p>first vue project£¬gbk you du¡£</p>
    <p>i am {{author}}</p>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      author: 'yang'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
