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

export const getRedditPosts = ({ commit }, queryString) => {
  Api.getRedditPosts(redditPosts => {
    if (redditPosts && redditPosts.data && redditPosts.data.data && redditPosts.data.data.children) {
      let parsedArray = redditPosts.data.data.children
      let deepParsedArray = []
      parsedArray.forEach(function (value) {
        if (value.data) {
          deepParsedArray.push(value.data)
        }
      })
      commit(MutationTypes.SET_REDDIT_POSTS, deepParsedArray)
    }
    // Second action function argument is here (the end of the anonymous function declaration).
  }, queryString)
}
