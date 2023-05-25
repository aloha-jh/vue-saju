import { fetchData } from '@/api/index';

export const state = () => ({
    user:null
})

export const mutations = {
    SET_USER(state,user){
        state.user = user;
    }
}

export const actions = {
    async reqUser({commit}, data  ){
        try{
            const res = await fetchData( data ); 
            commit('SET_USER', res.data.response.body.items.item);
       
            console.log(res.data.response.body.items.item);
            return res.data;
        }catch(err){
            console.error(err);
        }

    }
}
