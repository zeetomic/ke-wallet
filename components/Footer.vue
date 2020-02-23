<template>
  <v-bottom-navigation
    fixed
    grow
    class="mobile"
  >
    <v-btn text color="#79c4ff" to="/">
      <span class="font-weight-thin">Wallet</span>
      <div style="padding-top: 5px"></div>
      <img src="../assets/wallet_current.svg" alt="wallet" style="width: 20px">
    </v-btn>
    <v-btn text color="#79c4ff" to="/transaction">
      <span class="font-weight-thin">Trasaction</span>
      <div style="padding-top: 5px"></div>
      <img src="../assets/wallet_current.svg" alt="wallet" style="width: 20px">
    </v-btn>
    <v-btn text color="#79c4ff" to="/send">
      <span class="font-weight-thin">Send</span>
      <div style="padding-top: 5px"></div>
      <img src="../assets/wallet_current.svg" alt="wallet" style="width: 20px">
    </v-btn>
    <v-btn text color="#79c4ff" to="/receive">
      <span class="font-weight-thin">Receive</span>
      <div style="padding-top: 5px"></div>
      <img src="../assets/wallet_current.svg" alt="wallet" style="width: 20px">
    </v-btn>
    <v-btn text color="#79c4ff" to="/setting">
      <span class="font-weight-thin">Setting</span>
      <div style="padding-top: 5px"></div>
      <img src="../assets/setting_current.svg" alt="wallet" style="width: 20px">
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 50px;
}
/* // RESPONSIVE */
/* //SmartPhone */
@media only screen and (max-width: 500px) {
    
}
/* //Tablet */
@media only screen and (min-width: 501px) and (max-width: 767px) {
    
}
/* //Normal */
@media only screen and (min-width: 768px) and (max-width: 1199px){
  .mobile {
    display: none!important;
  }
}
/* Large monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .mobile {
    display: none!important;
  } 
}
/* //Landscape */
@media only screen and (max-height: 500px) {
    
}
/* Widescreen */
@media only screen and (min-width: 1920px) {
    
}
</style>