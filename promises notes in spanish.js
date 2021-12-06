// PROMISES
// existe código síncrono y código asíncrono.
// el código síncrono es el código que no puede ejcutar otro código hasta que termine.

let num = 0;
console.log(num);

console.time('time-for');
for (let i = 0; i < 100000; i++) {
  num += 1;
}
console.timeEnd('time-for');

//Este fragmento de código no se ejecutará hasta que termine el for anterior
console.log(num);


// el código asíncrono es aquel que permite seguir ejecutándo código sin necesidad de detenerse

function printMessageAfterTime(message, timeMs) {
  return new Promise((terminator) => {
    setTimeout(() => {
      console.log(message);
      terminator('I finished!');
    }, timeMs);
  });
}

console.log('Message 1');
printMessageAfterTime('Message 2', 1000).then((data) => {
  console.log('Message 4 with:', data);
});
console.log('Message 3');
/*
Message 1
Message 3
Message 2 (after 1s)
Message 4 with: I finished!
*/


// PROMISE CHAINING

console.log('-------------------');

console.log('Message 1');
printMessageAfterTime('Message 2', 1000).then((data) => {
  return printMessageAfterTime(`Message 4 with: ${ data }`, 2000);
});
console.log('Message 3');
/*
Message 1
Message 3
Message 2 (after 1s)
Message 4 with: I finished! (after 2s) (3s total)
*/

console.log('-------------------');

console.log('Message 1');
printMessageAfterTime('Message 2', 1000).then((data) => {
  return printMessageAfterTime(`Message 4 with: ${ data }`, 2000).then((data) => {
    console.log(`Message 5 with: ${ data }`);
  });
});
console.log('Message 3');
/*
Message 1
Message 3
Message 2 (after 1s)
Message 4 with: I finished! (after 2s) (3s total)
Message 5 with: I finished!

*/
