const readlineSync = require(`readline-sync`);
console.log(`Welcome, can you defeat the monsters?`);
const userName = readlineSync.question(`What is your name: `);

let userHP = 100;
const userInvetory = [];
const monsters = ["Dragon", "Wizard", "Ninja"];

while (userHP > 0) {
  const startGame = readlineSync.question("Press 'w' to walk.");

  if (startGame === "w") {
    const monsterAppeared = Math.floor(Math.random() * 4);

    if (monsterAppeared === 1) {
      const monster = monsters[Math.floor(Math.random() * monsters.length)];
      let monsterHP = Math.floor(Math.random() * 20) + 10;
      console.log(`A scary ${monster} appeared with ${monsterHP} health!`);

      while (userHP > 0 && monsterHP > 0) {
        const action = readlineSync.question("Press 'a' to attack or 'f' to flee.");

        if (action === "a") {
          let userDamage = Math.floor(Math.random() * 10) + 5;
          let monsterDamageHit = Math.floor(Math.random() * 5) + 5;
          monsterHP -= userDamage;
          console.log(`You dealt ${userDamage} damage to the ${monster}!`);
          userHP -= monsterDamageHit;
          console.log(`The ${monster} hit ${monsterDamageHit} damage to you!`);

        } else if (action === "f") {
          let fleeChance = Math.random() < 0.5;

          if (fleeChance) {
            console.log(`You sucessfully flee'd from the ${monster}!`);
            break;
          } else {
            let monsterDamage = Math.floor(Math.random() * 5) + 5;
            userHP -= monsterHP;
            console.log(`You failed to flee from the ${monster} and take ${monsterDamage} damage!`);
          }
        }

        if (userHP > 0 && monsterHP <= 0) {
          console.log(`You killed the ${monster}!`);
          userHP += 10;
          const item = `${monster} trophy`;
          userInvetory.push(item);
          console.log(`You earned a ${item} from killing the ${monster}!`);
          
          
          if (readlineSync.keyInYN("Press 'p' to show stats?")){
              console.log(`${userHP} HP: `);
              console.log(`${userName} stats: `);
              console.log(`${item} Invetory: `);
          }
            
        } else if (userHP <= 0) {
          console.log(`The ${monster} killed you, game over.`);
          break;
        }
      }
    }
  }
}
