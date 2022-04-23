// test code for mocha and chai

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error message for a non-existent breed, via callback', (done) => {
    fetchBreedDescription('sphynxx', (error, desc) => {

      assert.equal(null, desc);

      const expectedError = `We can't find this breed - please try again!`

      assert.equal(error, expectedError);

      done();
    });
  })
});