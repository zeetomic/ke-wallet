export const validateLogin = {
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
    }
  }
}

export const valid_loginEmail = {
  data() {
    return {
      valid: true,
      emailRule: [
        () => !!this.email || 'Email is required',
      ],
      passwordRule: [
        () => !!this.password || 'Password is required',
      ],
    }
  }
}