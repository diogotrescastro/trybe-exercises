// Foi necessário para resolução a consulta ao vídeo instrutivo do gabarito. https://app.betrybe.com/course/fundamentals/js-unit-tests/jest-async-solutions

const getUserName = require('./getUserName');

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(user => expect(user).toEqual('Mark'));
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});
