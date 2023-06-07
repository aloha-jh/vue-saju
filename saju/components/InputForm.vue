<template>
  <div class="input-form"> 
    <ul>
      <li>
        <h3>성별</h3>
        <p class="gender-wrap">
          <button @click="toggleGender" :class="{active:gender}">남</button>
          <button @click="toggleGender" :class="{active:!gender}">여</button>
        </p>
      </li>
      <li>
        <h3>생년월일(양력)</h3>
        <p class="birth"> 
          <input v-model="userbirth" :placeholder="birthHolderTxt" type="number" 
          inputmode="numeric"
          maxlength="8"/>
        </p>
      </li>
      <li>        
        <h3>출생시</h3>
        <p class="time">
          <input v-model="usertime" :placeholder="timeHolderTxt" type="number"
          inputmode="numeric"
          maxlength="4"/> 
          <button @click="timeNo" :class="{active:usertime==''}" class="btn-si">시모름</button>
        </p>
      </li>
    </ul>
    <button :class="{active:birthCheck==true}" class="btn-submit" 
    @click="submit">확인</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { inValidTime } from '../utils/validation';
import { inValidDate } from '../utils/validation';

export default{
  data(){
    return{
      gender:true,  
      userbirth:'',
      usertime:'',
      birthCheck:false,
      birthHolderTxt:'19930101',
      timeHolderTxt:'1420'
    }
  },
  watch:{
    userbirth( value ){
      if(value.length>=8){
        this.userbirth = value.slice(0,8);
        this.birthCheck=true;
      }else{
        this.birthCheck=false;
      }
    },
    usertime(value){
      if(value.length>=4){
        this.usertime = value.slice(0,4);
        this.birthCheck=true;
      }else{
        this.birthCheck=false;
      }
    }
  },

  methods:{
    ...mapActions(['reqUser']),
    ...mapMutations(['SET_USER_TIME']),
    async submit(){
      if( (this.usertime.length >= 1 && this.usertime.length <=3) 
      || !inValidTime(this.usertime) ){
        console.log('wrong')
        this.usertime='';
        this.timeHolderTxt='잘못된 시간형식';
        return;
      } 
      if( inValidDate( this.userbirth )){
        const data = {
          year: this.userbirth.slice(0, 4),
          month: this.userbirth.slice(4, 6),
          day: this.userbirth.slice(6, 8)
        };
        if(this.usertime != ''){
          console.log(this.usertime)
          this.SET_USER_TIME(this.usertime);
        }else{
          
        }
        this.$router.push('/result');
        const user = await this.reqUser(data);
      }else{
        this.userbirth='';
        this.birthHolderTxt='잘못된 생년월일 형식'; 
      }
    },
    toggleGender() {
      this.gender = !this.gender;
    }, 
    timeNo(){
      this.usertime='';
    }, 
    
  } 
}
</script>

<style lang="scss"> 

</style>