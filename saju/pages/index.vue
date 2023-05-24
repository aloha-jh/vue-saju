<template>
    <div>
        <input-form></input-form>
        <button @click="getData"> OK </button> 
        <div>{{ data }}</div>
        <ul>
            <li>년{{year}}</li>
            <li>월{{month}}</li>
            <li>일{{day}}</li>
            <li>시{{timeList}}</li>
        </ul>
    </div>
</template>

<script>

import InputForm from '../components/InputForm.vue'
import fetchData from '../api/index'
import {getSiju} from '../utils/getSiju.js' 
export default {
    data(){
        return{ 
            data:[],
            year:"",
            month:"",
            day:"",
            timeList:[],
        }
    },
    components:{
        InputForm,
    },
    methods:{
        getData(){
            fetchData()
            .then( data =>{ 
                let body = data.response.body.items.item;
                this.data= body;
                this.year= body.lunSecha;
                this.month=body.lunWolgeon;
                this.day=body.lunIljin;
                const time = '13:05'; 
                this.timeList = getSiju(body.lunIljin[0],time);
            })
            .catch(error=>{
                console.log(error)
            })
        },
    }
}
</script>
<style></style>
