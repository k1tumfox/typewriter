const sentence = "hello there from lighthouse labs";
//console.log('12th index is: ', sentence.indexOf('f'));
let timeDelay = 50;
for (const char of sentence) {
  //process.stdout.write(timeDelay);
  
  setTimeout(() => {
    process.stdout.write(char);
    
  }, timeDelay += 100);
  
    
}
setTimeout(() => {
  process.stdout.write('\n');
}, 4000);
