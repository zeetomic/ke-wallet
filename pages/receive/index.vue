<template>
  <div class="container">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-row class="ke_card">
          <v-col cols="6">
            <h4 class="font-weight-thin headline" style="color: #05427c">KE TOKEN</h4>
          </v-col>
          <v-col cols="6" >
            <v-row class="d-flex justify-center">
              <no-ssr>
              <vue-qr 
                class="qr_code desktop"
                :logoSrc="ke" 
                :margin="10" 
                :text="user_profile.wallet">
              </vue-qr>
              <vue-qr 
                class="qr_code mobile"
                :size="130"
                :logoSrc="ke" 
                :margin="10" 
                :text="user_profile.wallet">
              </vue-qr>
              </no-ssr>
            </v-row>
            <p class="wallet_key font-weight-medium subtitle-1">{{user_profile.wallet}}</p>
            <input type="text" id="myInput" v-model="user_profile.wallet" />
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn absolute dark fab top left color="primary" v-on="on" @click="onCopy()">
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>Click To Copy</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card class="pa-2">
          <h2 style="color: #415593">Receive Token</h2>
          <div v-if="history.error">
            <h4 style="color: red" class="pt-6">{{ history.error.message }}</h4>
            <br>
            <v-btn rounded color="pink darken-3 white--text" to="/getwallet">Get Wallet</v-btn>
          </div>
          <v-data-table
            v-if="!history.error"
            hide-default-footer
            hide-default-header
          >
            <template v-if="!history.error && history.length > 0" v-slot:header> 
              <thead>
                <tr>
                  <th class="text-left" style="color: #79c4ff">Asset</th>
                  <th class="text-left" style="color: #79c4ff">Amount</th>
                  <th class="text-left" style="color: #79c4ff">Status</th>
                </tr>
              </thead>
            </template>
            <template v-if="!history.error && history.length > 0" v-slot:body>
              <tbody>
                <tr v-for="item in history" :key="item.id">
                  <td class="d-flex align-center">
                    <img src="../../assets/KE_logo_sm.svg" alt="ke_token" class="ke_token">
                    <span>{{ `KE Token` }}</span>
                  </td>
                  <td>
                    <span>{{ item.amount ? (item.amount/ Math.pow(10, 8)) : null }}</span> 
                  </td>
                  <td>
                    Complete
                  </td>
                </tr>
              </tbody>
            </template>
            <template v-if="history.length <= 0" v-slot:no-data>
              <span>No data available</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import Cookie from 'js-cookie';
export default {
  middleware: ['auth'],
  async asyncData({req, res, error, redirect}) {
    let token;
    if (process.server) {
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
    }
    if (process.client) {
      token = Cookie.get("jwt");
    }
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    let user_profile = await axios.get(process.env.apiUrl + "/userprofile", config)
    let history = await axios.get(process.env.KEUrl + "/trx-history", config)
    return {
      user_profile: user_profile.data,
      history: history.data
    }
  },
  data () {
    return {
      ke: require("~/assets/Logo-KE.png"),
    }
  },
  methods: {
    onCopy() {
      /* Get the text field */
      var copyText = document.getElementById("myInput");
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
  }
}
</script>

<style scoped>
.ke_card h4 {
  padding: 10% 0 0 5%;
}
.wallet_key {
  color: #fafafa;
  padding-top: 6px; 
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: anywhere;
}
.ke_card {
  width: 100%;
  margin: 0 2px;
  background-image:  url("~assets/card.svg");
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: relative;
  border-radius: 15px;
}
.qr_code {
  padding-top: 2rem;
}
.ke_token {
  width: 26px;
  margin: 5px; 
}
#myInput {
  position: absolute;
  color: #fff;
  opacity: 0;
  width: 1px;
  height: 1px;
  font-size: 1px;
  left: 0;
  box-sizing: content-box;
  -webkit-user-select: initial;
  outline: none;
  margin-left: -9999px;
}
/* // RESPONSIVE */
/* //SmartPhone */
@media only screen and (max-width: 500px) {
  .desktop {
    display: none!important;
  }
  .container {
    padding: 1rem;
  }
  .wallet_key{
    font-size: 12px!important;
    line-height: 16px;
  }
  .ke_card {
    height: 200px;
  }
  .qr_code {
    padding-top: 1%;
  }
}
/* //Tablet */
@media only screen and (min-width: 501px) and (max-width: 767px) {
  .desktop {
    display: none!important;
  }
  .ke_card {
    width: 350px;
    height: 200px;
  }
 
}
/* //Normal */
@media only screen and (min-width: 768px) and (max-width: 1199px){
  .desktop {
    display: none!important;
  }
  .ke_card {
    width: 350px;
    height: 200px;
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
  .mobile {
    display: none!important;
  }
}
</style>