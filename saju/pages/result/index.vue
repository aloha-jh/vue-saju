<template>
  <div>
    <div v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> </div>
    <template v-else>
      <div class="result user-saju" v-if="user!=null">
          <h3>{{ user.lunYear }}년 {{user.solMonth}}월 {{user.solDay}}일생 </h3>  
          <result-saju></result-saju>
          <!-- <result-five-attr></result-five-attr> -->
      </div>
    </template>
  </div>
</template>


 
<script>
import { mapState } from 'vuex';
import ResultFiveAttr from '../../components/ResultFiveAttr.vue';
import ResultSaju from '../../components/ResultSaju.vue'; 
 
export default {
  components: { ResultSaju, ResultFiveAttr },
     
  computed:{
      ...mapState(['isLoading','user']),  
  }, 
    
}
</script>

<style lang="scss">   
div#wrap {
    width: 100%;
    background-color:#eee;
    background-image: none;
  }
</style>
