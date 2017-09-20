export const getConsumers = state => {
  return (state.consumers && state.consumers !== []) ? state.consumers : []
}

export const getConsumerSelected = state => {
  return (state.consumerSelected && state.consumerSelected !== {}) ? state.consumerSelected : {}
}

export const getRedditPosts = state => {
  return (state.redditPosts && state.redditPosts !== []) ? state.redditPosts : []
}

export const getServiceProfessional = state => {
  return (state.serviceProfessional && state.serviceProfessional !== {}) ? state.serviceProfessional : {}
}
