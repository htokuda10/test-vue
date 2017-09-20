import Axios from 'axios'
import ServiceRequestData from './ServiceRequestData'

export function getConsumersList (callBack) {
  const SERVICE_REQUEST_DATA = new ServiceRequestData()
  const consumers = SERVICE_REQUEST_DATA.getConsumersList()
  callBack(consumers)
}

export function getServiceProfessional (callBack) {
  const SERVICE_REQUEST_DATA = new ServiceRequestData()
  const serviceProfessional = SERVICE_REQUEST_DATA.getServiceProfessional()
  callBack(serviceProfessional);
}

export function getRedditPosts (callBack, queryString) {
  Axios.get('http://www.reddit.com/r/aww/search.json?q=' + queryString + '&restrict_sr=true').then(
    function (response) {
      callBack(response)
    })
}
