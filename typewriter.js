

const sentence = "hello there from lighthouse labs";
//console.log('12th index is: ', sentence.indexOf('f'));
let timeDelay = 50;
for (const char of sentence) {
  //process.stdout.write(timeDelay);
  
  process.stdout.write(char);
  setTimeout(() => {

  }, timeDelay);
  
  timeDelay += 50;
  
}
process.stdout.write('\n');


