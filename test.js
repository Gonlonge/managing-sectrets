require("dotenv/config");

function test(expectedSecret) {
  const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
  console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
  console.log(`The secret does${secretMatches ? "" : " not"} match!`);
  return secretMatches;
}

test(42);

// require("dotenv/config");

// function test(expectedSecret) {
//   const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
//   console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
//   console.log(`The secret does${secretMatches ? "node test.js" : " The meaning of life is 42"} The secret does match!`);
//   return secretMatches;
// }

// test(42);
