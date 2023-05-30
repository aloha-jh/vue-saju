<template>
  <div >
    <div v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> </div>
    <template v-else>
      <div class="result user-saju" v-if="user!=null">
          <h3>{{ user.lunYear }}년 {{user.solMonth}}월 {{user.solDay}}일생 </h3>
          <p>{{ user.lunSecha }}</p>
          <p>{{ user.lunWolgeon}}</p>
          <p>{{ user.lunIljin }}</p> 
          <p>{{ userSiju }}</p> 
      </div>
    </template>
  </div>
</template>


 
<script>
import { mapState } from 'vuex';
import { getSiju } from '../../utils/getSiju'
 
export default {
    
  data(){
    return{
      userSiju:'',
    }
  },
  computed:{
      ...mapState(['user','isLoading','usertime'])
  },
  watch:{
    user:{
      immediate:true,
      handler(){
        if(this.user !== null){
          this.getUserSiju();
        }
      }
    }
  },
  methods:{
    getUserSiju() {
      this.userSiju = getSiju(this.user.lunIljin[0], this.usertime);
    }
  }
    
}
</script>

<style lang="scss">   
</style>
