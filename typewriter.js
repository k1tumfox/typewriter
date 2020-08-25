let sentence = "hello there from lighthouse labs";

sentence += '\n';

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

  }, delay);
  delay += 100;
}

// setTimeout(() => {
//   process.stdout.write('\n');
// }, 8000);