<template>
  <v-app>
    <Navbar/>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <div style="margin-top: 3rem"></div>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.v-application {
  font-family: 'Titillium Web'!important;
}
.v-navigation-drawer {
  background: #fcfcfc!important;
}
.detail {
  padding: 1rem;
}
/* // RESPONSIVE */
/* //SmartPhone */
@media only screen and (max-width: 500px) {
  .v-content {
    padding: 0!important;
  }
}
/* //Tablet */
@media only screen and (min-width: 501px) and (max-width: 767px) {
  .v-content {
    padding: 0!important;
  } 
}
/* //Normal */
@media only screen and (min-width: 768px) and (max-width: 1199px){
    
}
/* Large monitor */
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
       
}
/* //Landscape */
@media only screen and (max-height: 500px) {
    
}
/* Widescreen */
@media only screen and (min-width: 1920px) {
    
}
</style>