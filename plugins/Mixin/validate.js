export const validate = {
  data() {
    return {
      valid: true,
      phoneRule: [
        () => !!this.phone || 'Phone is required',
        () => (this.phone !== '+855') || 'Phone is required',
      ],
      passwordRule: [
        () => !!this.password || 'Password is required',
      ],
      passwordMatch: [
        () => !!this.password2 || 'Password is required',
        () => this.password == this.password2 || 'Password not match!'
      ],
      amountRule: [
        () => !!this.amount || 'Amount is required'
      ],
      destinationRule: [
        () => !!this.destination || 'Destination is required'
      ],
      current_passwordRule: [
        () => !!this.current_password || 'Current Password is required'
      ],
      new_passwordRule: [
        () => !!this.new_password || 'New Password is required'
      ],
      new_passwordMatch: [
        () => !!this.new_password1 || 'Confirm Password is required',
        () => this.new_password == this.new_password1 || 'Password not match!'
      ],
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