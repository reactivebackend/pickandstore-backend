export class MockEmailAdapter {
  async sendEmail(email: string, letter: string, emailTitle: string) {
    console.log('MockEmailAdapter' + email + letter + emailTitle);
  }
}
