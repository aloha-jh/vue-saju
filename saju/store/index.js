import { fetchData } from '@/api/index';

export const state = () => ({
    user:null,
    isLoading:true,
    usertime:'',
})

export const mutations = {
    SET_USER(state, payload){
        state.user = payload;
    },
    CHANGE_IS_LOADING( state, payload){
        state.isLoading = payload;
    },
    SET_USER_TIME(state,payload){
        state.usertime = payload;
    }
}

export const actions = {
    async reqUser({commit}, data  ){
        try{
            commit('CHANGE_IS_LOADING', true);
            const res = await fetchData( data );
            commit('SET_USER', res.data.response.body.items.item);
            commit('CHANGE_IS_LOADING', false);
                console.log(res.data.response.body.items.item);
            return res.data;
            
        }catch(err){
            console.error(err);
        }

    }
}
