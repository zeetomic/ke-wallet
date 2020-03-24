export const validateSend = {
  data() {
    return {
      valid: true,
      amountRule: [
        () => !!this.amount || 'Amount is required'
      ],
      destinationRule: [
        () => !!this.destination || 'Destination is required'
      ],
    }
  }
}