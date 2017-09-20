/* Actions can be asynchronous, where mutations must be synchronous. Use these functions for asynchronous calls. */
import * as Api from '../../static/js/Api'
import * as MutationTypes from '../store/mutation-types'

export const getInitialData = ({ commit }) => {
  Api.getConsumersList(consumers => {
    commit(MutationTypes.SET_CONSUMERS_LIST, consumers)
  })
  Api.getServiceProfessional(serviceProfessional => {
    commit(MutationTypes.SET_SERVICE_PROFESSIONAL, serviceProfessional)
  })
}

export const setConsumerSelected = ({ commit }, consumerObject) => {
  commit(MutationTypes.SET_CONSUMER_SELECTED, consumerObject)
}
