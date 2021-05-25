const getUserName = require('./getUserName');

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      expect.assertions(1);
      const user = await getUserName(4);
      expect(user).toEqual('Mark');
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(2);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      }
    });
  });
});
