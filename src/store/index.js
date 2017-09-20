import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  consumers: {
    // [
    // email: 'jsmith@email.com',
    // firstName: 'John',
    // id: '1',
    // lastName: 'Smith',
    // phone: '(303) 555-1234',
    // state: 'CO',
    // street: '1 Street Ave.',
    // zipCode: '80123'
    // ]
  },
  consumerSelected: {
    // email: 'jsmith@email.com',
    // firstName: 'John',
    // id: '1',
    // lastName: 'Smith',
    // phone: '(303) 555-1234',
    // state: 'CO',
    // street: '1 Street Ave.',
    // zipCode: '80123'
  },
  serviceProfessional: {
    // affiliate: 'Thor',
    // callUniqueId: '123123123',
    // numberCalled: '(555) 555-5556',
    // serverId: 'Infinity',
    // spId: '12345',
    // spLocation: 'Hello, WO',
    // spName: 'ABC Company',
    // spPhone: '(555) 555-5555',
    // spRating: '4.8',
    // spRatings: '10'
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
