<template>
  <div id="serviceProfessionalInfoCardComponent" class="form-group row">
    <div class="col-sm-12 cust-info-card">
      <div class="panel panel-warning cust-info-header-cont">
        <div class="panel-heading">
          <h4>Service Profesional Called</h4>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="cust-info-name">{{ spData.spName }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h5 class="cust-info-title">ID:</h5>
            <p>{{ spData.spId }}</p>
            <h5 class="cust-info-title">Phone:</h5>
            <p>{{ spData.spPhone }}</p>
            <h5 class="cust-info-title">Location:</h5>
            <p>{{ spData.spLocation }}</p>
            <h5 class="cust-info-title">Total Ratings:</h5>
            <p>{{ spData.spRatings }}</p>
            <h5 class="cust-info-title">Rating:</h5>
            <p>{{ spData.spRating }}</p>
          </div>
          <div class="col-sm-6">
            <h5 class="cust-info-title">Affiliate:</h5>
            <p>{{ spData.affiliate }}</p>
            <h5 class="cust-info-title">Number Called:</h5>
            <p>{{ spData.numberCalled }}</p>
            <h5 class="cust-info-title">Call Unique ID:</h5>
            <p>{{ spData.callUniqueId }}</p>
            <h5 class="cust-info-title">Server ID:</h5>
            <p>{{ spData.serverId }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'serviceProfessionalInfoCardComponent',
    props: ['spData'],
    data () {
      return {}
    }
  }
</script>
