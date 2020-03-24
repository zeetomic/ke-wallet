<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
      <v-card class="detail">
        <h2 style="color: #415593">KE Wallet</h2>
        <v-row>
          <v-col class="d-flex justify-center" v-if="!portfolio.error">
            <client-only>
              <LineChart 
                :chart-data="datacollection"
                :styles="chart">
              </LineChart>
            </client-only>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
      <v-card class="detail">
        <h2 style="color: #415593">My Porfolio</h2>
        <div v-if="portfolio.error" style="padding-top: 1rem">
          <h4 style="color: red">{{ portfolio.error.message }}</h4>
          <br>
          <v-btn rounded color="pink darken-3 white--text" to="/getwallet">Get Wallet</v-btn>
        </div>
        <v-data-table
          v-else
          hide-default-footer
          hide-default-header
        >
          <template v-if="portfolio.balances.length > 0" v-slot:header> 
            <thead>
              <tr>
                <th class="text-left" style="color: #79c4ff">Asset</th>
                <th class="text-left" style="color: #79c4ff">Amount</th>
              </tr>
            </thead>
          </template>
          <template v-if="portfolio.balances.length > 0" v-slot:body>
            <tbody>
              <tr v-for="item in portfolio.balances" :key="item.id">
                <td class="d-flex align-center">
                  <img src="../assets/KE_logo_sm.svg" alt="ke_token" class="ke_token">
                  <span v-if="item.issueTransaction.name">{{ item.issueTransaction.name }}</span>
                </td>
                <td>{{ item.balance ? item.balance/Math.pow(10, 8) : 0 }}</td>
              </tr>
            </tbody>
          </template>
          <template v-if="!portfolio.balances.length <= 0" v-slot:no-data>
            <span>No data available</span>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import portfolio from '~/utils/portfolio.js'
import LineChart from '~/plugins/LineChart.js';
export default {
  middleware: ['auth'],
  components : {
    LineChart
  },
  asyncData: portfolio,
  data() {
    return {
      datacollection: null,
      width: 300,
    }
  },
  mounted () {
    if(!this.portfolio.error) this.fillData();
  },
  computed: {
    chart () {
      return {
        width: `${this.width}px`,
        position: 'relative'
      }
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.portfolio.balances.map(item => item.issueTransaction.name),
        datasets: [
          {
            backgroundColor: ['#92fb85'],
            data: this.portfolio.balances.map(asset => asset.balance)
          }
        ]
      }
    },
  },
}
</script>

<style scoped>
.ke_token {
  width: 26px;
  margin: 5px; 
}
</style>