<template>
  <div >
    <div v-if="isLoading"><i class="fas fa-spinner fa-spin"></i> </div>
    <template v-else>
      <div class="result user-saju" v-if="user!=null">
          <h3>{{ user.lunYear }}년 {{user.solMonth}}월 {{user.solDay}}일생 </h3> 
        
          <div>
            <table>
              <tr>
                <th>시</th> 
                <th>일</th> 
                <th>월</th> 
                <th>년</th> 
              </tr>
              <tr>
                <th>{{ timeTxt }}</th> 
                <th>{{ dayTxt }}</th> 
                <th>{{ monthTxt }}</th> 
                <th>{{ yearTxt }}</th> 
              </tr>
              <tr>
                <td>{{ timeUp }}</td>
                <td>{{ dayUp }}</td> 
                <td>{{ monthUp }}</td> 
                <td>{{ yearUp }}</td> 
              </tr>
              <tr>
                <td>{{ timeDown }}</td>
                <td>{{ dayDown }}</td>
                <td>{{ monthDown }}</td>
                <td>{{ yearDown }}</td>
              </tr> 
            </table> 
          </div>
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
      ...mapState(['user','isLoading','usertime']), 
      yearUp(){
        return this.user!=null && this.getTxt('lunSecha',1,0,1)
      },   
      yearDown(){
        return this.user!=null && this.getTxt('lunSecha',1,1,1)
      },
      yearTxt(){
        return this.user!=null && this.getTxt('lunSecha',0,0,2)
      }, 

      monthUp(){
        return this.user!=null && this.getTxt('lunWolgeon',1,0,1)
      },   
      monthDown(){
        return this.user!=null && this.getTxt('lunWolgeon',1,1,1)
      },
      monthTxt(){
        return this.user!=null && this.getTxt('lunWolgeon',0,0,2)
      }, 

      dayUp(){
        return this.user!=null && this.getTxt('lunIljin',1,0,1)
      },   
      dayDown(){
        return this.user!=null && this.getTxt('lunIljin',1,1,1)
      },
      dayTxt(){
        return this.user!=null && this.getTxt('lunIljin',0,0,2)
      }, 


      timeUp(){
        return this.user!=null && this.userSiju.split('(')[1].slice(0,1)
      },   
      timeDown(){
        return this.userSiju !='' && this.userSiju.split('(')[1].slice(1,2)
      },
      timeTxt(){
        return this.userSiju !='' && this.userSiju.split('(')[0].slice(0,2)
      }, 
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
    },
    getTxt(target,string,index,length){
      return this.user[target].split('(')[string].slice(index,index+length)
    }
  }
    
}
</script>

<style lang="scss">   
div#wrap {
    width: 100%;
    background-color:#eee;
    background-image: none;
  }
</style>
