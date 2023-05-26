<template>
    <div class="index">
        <h1>사주정원<i class="fas fa-leaf"></i></h1>
        <input-form></input-form> 
    </div>
</template>

<script>

import InputForm from '../components/InputForm.vue' 
export default {
    data(){ 
    },
    components:{
        InputForm,
    }, 
    methods:{ 
    }
}
</script>
<style lang="scss">   
    h1{
        width: 100%;font-size: 55px;
        margin-bottom: 30px;
        text-align:center;
        font-size: 60px;
        color: #fff;
    }
</style>
