const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

let data = {};
rl.question('What\'s your name? Nicknames are also acceptable :)? ', (answer) => {
  data.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    data.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      data.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        data.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          data.food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            data.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              data.superpower = answer;
              console.log(`\n${data.name} loves listening to ${data.music} while ${data.activity}, devouring ${data.food} for ${data.meal}, prefers ${data.sport} over any other sport, and is amazing at ${data.superpower}.`);
              rl.close()
            });
          });
        });
      });
    });
  });
  
});