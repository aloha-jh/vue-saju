<template>
  <div class="result">123
     {{ user }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

 
export default {
    computed:{
        ...mapState(['user'])
    }
    
}
</script>

<style lang="scss">   
</style>
