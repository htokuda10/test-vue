<template>
  <div id="serviceProfessionalInfoCardComponent" class="form-group row">
    <div class="col-sm-12">
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h4>Service Profesional Called</h4>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-6">
            <h5>{{ sPData.sPName }}</h5>
            <h5>ID: {{ sPData.sPID }}</h5>
            <p>Phone: {{ sPData.sPPhone }}</p>
            <p>Location: {{ sPData.sPLocation }}</p>
            <p>Total Ratings: {{ sPData.sPRatings }}</p>
            <p>Rating: {{ sPData.sPRating }}</p>
          </div>
          <div class="col-sm-6">
            <p>Affiliate: {{ sPData.affiliate }}</p>
            <p>Number Called: {{ sPData.numberCalled }}</p>
            <p>Call Unique ID: {{ sPData.callUniqueID }}</p>
            <p>Server ID: {{ sPData.serverID }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'serviceProfessionalInfoCardComponent',
    props: ['sPData'],
    data () {
      return {}
    }
  }
</script>
