<template>
  <div class="form-group row">
    <div class="col-sm-12 cust-info-card">
      <div class="panel panel-warning cust-info-header-cont">
        <div class="panel-heading">
          <h4>Service Profesional Called</h4>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="cust-info-name">{{ getServiceProfessional.spName }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h5 class="cust-info-title">ID:</h5>
            <p>{{ getServiceProfessional.spId }}</p>
            <h5 class="cust-info-title">Phone:</h5>
            <p>{{ getServiceProfessional.spPhone }}</p>
            <h5 class="cust-info-title">Location:</h5>
            <p>{{ getServiceProfessional.spLocation }}</p>
            <h5 class="cust-info-title">Total Ratings:</h5>
            <p>{{ getServiceProfessional.spRatings }}</p>
            <h5 class="cust-info-title">Rating:</h5>
            <p>{{ getServiceProfessional.spRating }}</p>
          </div>
          <div class="col-sm-6">
            <h5 class="cust-info-title">Affiliate:</h5>
            <p>{{ getServiceProfessional.affiliate }}</p>
            <h5 class="cust-info-title">Number Called:</h5>
            <p>{{ getServiceProfessional.numberCalled }}</p>
            <h5 class="cust-info-title">Call Unique ID:</h5>
            <p>{{ getServiceProfessional.callUniqueId }}</p>
            <h5 class="cust-info-title">Server ID:</h5>
            <p>{{ getServiceProfessional.serverId }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    computed: {
      ...mapGetters([
        'getServiceProfessional'
      ])
    },
    name: 'serviceProfessionalInfoCardComponent',
    props: [],
    data () {
      return {}
    }
  }
</script>
