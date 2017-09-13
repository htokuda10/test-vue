<template>
  <div id="consumerInfoCardComponent" class="form-group row">
    <div class="col-sm-12 cust-info-card">
      <div class="panel panel-success cust-info-header-cont">
        <div class="panel-heading">
          <h4>Consumer Profile Selected</h4>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="cust-info-name">{{ consumerData.firstName }} {{ consumerData.lastName }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 cust-info-card">
            <h5 class="cust-info-title">ID:</h5>
            <p>{{ consumerData.id }}</p>
            <h5 class="cust-info-title">Phone:</h5>
            <p>{{ consumerData.phone }}</p>
            <h5 class="cust-info-title">State: </h5>
            <p>{{ consumerData.state }}</p>
            <h5 class="cust-info-title">Email:</h5>
            <p>{{ consumerData.email }}</p>
          </div>
          <div class="col-sm-6 cust-info-card">
            <h5 class="cust-info-title">Misc1:</h5>
            <p></p>
            <h5 class="cust-info-title">Misc2:</h5>
            <p></p>
            <h5 class="cust-info-title">Misc3:</h5>
            <p></p>
            <h5 class="cust-info-title">Misc4:</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'consumerInfoCardComponent',
    props: ['consumerData'],
    data () {
      return {}
    }
  }
</script>
