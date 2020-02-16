import * as game from './game.js';
import * as even from './games/even.js';
import * as calc from './games/calc.js';
import * as gcd from './games/gcd.js';
import * as progression from './games/progression.js';
import * as prime from './games/prime.js';

export const standardScenario = () => {
  game.showGreetings();
  game.askName();
};

export const evenGameScenario = () => {
  game.showGreetings();
  const userName = game.askName();
  game.play(even, userName);
};

export const calcGameScenario = () => {
  game.showGreetings();
  const userName = game.askName();
  game.play(calc, userName);
};

export const gcdGameScenario = () => {
  game.showGreetings();
  const userName = game.askName();
  game.play(gcd, userName);
};

export const progressionGameScenario = () => {
  game.showGreetings();
  const userName = game.askName();
  game.play(progression, userName);
};

export const primeGameScenario = () => {
  game.showGreetings();
  const userName = game.askName();
  game.play(prime, userName);
};
