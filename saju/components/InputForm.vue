<template>
  <div class="input-form"> 
    <ul>
      <li>
        <h3>성별</h3>
        <p>
          <input placeholder="남" readonly/>
          <input placeholder="여" readonly/>
        </p>
      </li>
      <li>
        <h3>생년월일(양력)</h3>
        <p class="birth">
          <input placeholder="년" type="number" v-model="useryear" />
          <input placeholder="월" type="number" v-model="usermonth" />
          <input placeholder="일" type="number" v-model="userday" />
        </p>
      </li>
      <li>        
        <p class="time">
          <input placeholder="시" type="number" v-model="userhour"/>
          <input placeholder="분" type="number" v-model="usermin"/>
          <input class="btn-si" readonly placeholder="출생시모름"/>
        </p>
      </li>
    </ul>
    <button @click="submit">확인</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
  data(){
    return{
      useryear:'',
      usermonth:'',
      userday:'',
      userhour:'00',
      usermin:'00',
    }
  },
  methods:{
    ...mapActions(['reqUser']),
    async submit(){
      const data = {
        year: this.useryear,
        month: this.usermonth,
        day: this.userday,
      };
      const user = await this.reqUser(data);
      this.$router.push('/result');
    } 
      
  } 
}
</script>

<style lang="scss"> 

</style>