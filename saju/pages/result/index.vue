<template>
  <div class="result">
      <p>{{ user.lunSecha }}</p>
      <p>{{ user.lunWolgeon}}</p>
      <p>{{ user.lunIljin }}</p>
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
