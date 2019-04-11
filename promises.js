/* eslint-disable */

function wait(amount = 0) {
  return new Promise(resolve => {
    setTimeout(() => resolve(amount), amount);
  });
}

async function go() {
  const slowP = wait(1000);
  const fastP = wait(50);

  Promise.race([slowP, fastP]).then(fastest => {
    console.log(`Fastest is ${fastest}`);
  });

  Promise.all([slowP, fastP]).then(([slow, fast]) => {
    console.log(`both: ${slow}, ${fast}`);
  });
}

// async function go() {
//   const first = await Promise.any([wait(50), wait(200)]);
//   console.log(first);
// }

// go();

  async function go() {
    const userGuesses = ['wes', 'wez', 'westerhoff', 'wasbas', 'webos'];
    // Make a request for each guessed username
    const userPromises = userGuesses.map(user =>
      fetch(`http://test.com/${user}`)
    );
    // get all the responses, whether they reject or resolve
    const allResponses = await Promise.allSettled(userPromises);
    // we can filter for both now
    const failures = allResponses.filter(p => p.status === 'rejected');
    console.log(failures);
  }

go();
