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
