export const validateChangePass = {
  data() {
    return {
      valid: true,
      current_passwordRule: [
        () => !!this.current_password || 'Current Password is required'
      ],
      new_passwordRule: [
        () => !!this.new_password || 'New Password is required'
      ],
      new_passwordMatch: [
        () => !!this.new_password1 || 'Confirm Password is required',
        () => this.new_password == this.new_password1 || 'Password not match!'
      ]
    }
  }
}

export const validateAddAsset = {
  data() {
    return {
      valid: true,
      asset_codeRule: [
        () => !!this.asset_code || 'Asset Code is required'
      ],
      asset_issuerRule: [
        () => !!this.asset_issuer || 'Asset Issuer is required'
      ] 
    }
  }
}

export const validateVerify = {
  data() {
    return {
      valid: true,
      first_nameRule: [
        () => !!this.first_name || 'First Name is required'
      ],
      last_nameRule: [
        () => !!this.last_name || 'Last Name is required'
      ],
      genderRule: [
        () => !!this.gender || 'Gender is required'
      ] 
    }
  }
}