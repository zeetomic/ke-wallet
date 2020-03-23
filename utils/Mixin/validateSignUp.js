export const validateSignUp = {
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
      ]
    }
  }
}

export const validateSignupEmail = {
  data() {
    return {
      valid: true,
      emailRule: [
        () => !!this.email || 'Email is required',
      ],
      passwordRule: [
        () => !!this.password || 'Password is required',
      ],
      passwordMatch: [
        () => !!this.password2 || 'Password is required',
        () => this.password == this.password2 || 'Password not match!'
      ]
    }
  }
}