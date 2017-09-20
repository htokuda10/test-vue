/* Actions can be asynchronous, where mutations must be synchronous. Use these functions for asynchronous calls. */
import * as MutationTypes from './mutation-types'

export default {
  // Set the single consumer associated to the service request, to state.
  [MutationTypes.SET_CONSUMER_SELECTED] (state, consumerObject) {
    state.consumerSelected = consumerObject
  },
  // Set the consumers list when multiple consumers are returned in a request, to state.
  [MutationTypes.SET_CONSUMERS_LIST] (state, consumersObject) {
    state.consumers = consumersObject
  },
  // Set the service professional when a service professional is returned in a request, to state.
  [MutationTypes.SET_SERVICE_PROFESSIONAL] (state, serviceProfessionalObject) {
    state.serviceProfessional = serviceProfessionalObject
  }
}
