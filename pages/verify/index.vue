<template>
  <div>
    <p class="headline font-weight-medium" style="color: #415593">Verify Account</p>
    <v-card class="pa-8">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          outlined
          v-model="first_name"
          label="First name"
          :rules="first_nameRule"
        ></v-text-field>
        <v-text-field
          outlined
          v-model="mid_name"
          label="Middle name"
        ></v-text-field>
        <v-text-field
          outlined
          v-model="last_name"
          label="Last name"
          :rules="last_nameRule"
        ></v-text-field>
        <v-select
          outlined
          v-model="gender"
          label="gender"
          :items="items"
          item-text="label"
          item-value="value"
          :rules="genderRule"
        >
        </v-select>
        <v-btn color="primary" @click="handleVerify()">Verify</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { validate } from '@/plugins/Mixin/validate.js';
export default {
  mixins: [validate],
  data() {
    return{
      first_name: '',
      mid_name: '',
      last_name: '',
      gender: '',

      items: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F'}
      ]
    }
  },
  methods: {
    handleVerify() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('users/handleVerify', {
          first_name: this.first_name,
          mid_name: this.mid_name,
          last_name: this.last_name,
          gender: this.gender
        })
        .then(() => {
          
        })
      }
    }
  }
}
</script>

<style>

</style>