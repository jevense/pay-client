import Vue from 'vue'

export const category = {
    state: {
        categoryList: {chapters:[]},
    },
    getters: {
        categoryList(state) {
            return state.categoryList
        },
    },
    mutations: {
        categoryList(state, data) {
            state.categoryList = data
        },
    },
    actions: {
        categoryList(context, data) {
            Vue.axios.get(`https://mvw-imed3.oss-cn-beijing.aliyuncs.com/Test/data/${data.isbn}.json`)
                .then(res => {
                    console.log(res.data)
                    context.commit('categoryList', res.data);
                    return res.data;
                })
                .catch(res => {
                    context.commit('categoryList',  {});
                })
        },
    },
}


