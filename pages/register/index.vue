<template>
  <div class="container">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-6">
        <span class="font-weight-bold display-1" style="color: #415593">Sign Up To KE Wallet</span>
        <div style="padding: 1.6rem"></div>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            label="Phone number"
            type="tel"
            v-model="phone"
            :rules="phoneRule"
            outlined
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            :rules="passwordRule"
            outlined
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="password2"
            :rules="passwordMatch"
            outlined
          ></v-text-field>
          <v-btn class="primary" large style="width: 100%" :loading="loading" @click="handleRegister()">Sing Up</v-btn>
          <v-row>
            <v-col>
              <v-btn text to="/login">Login</v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn text to="/register/byemail">Sign Up By Email</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validateSignUp } from '~/utils/Mixin/validateSignUp.js';
import { message } from '@/utils/Mixin/message.js';

export default {
  layout: 'login_register',
  mixins: [message, validateSignUp],
  data() {
    return {
      phone: '+855',
      password: '',
      password2: '',

      loading: false,
    }
  },
  methods: {
    handleRegister() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch('users/handleRegister', {
          phone: this.phone,
          password: this.password
        })
        .then(() => {
          this.$toast.show(this.msg);
          this.loading = false;
        })
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    padding: 15% 0; 
  }
</style>