import Vue from 'vue'
import Vuex from 'vuex'
import getQueryString from '../common'
import {category} from './category'
import {base} from './base'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        base,
        category,
    },
})
