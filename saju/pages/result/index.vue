<template>
  <div class="result">123
    {{ user }}
  </div>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.state.result.user;
        }
    }
}
</script>

<style>

</style>