import test from 'tape';
import data from '../src/fixtures/data';
import calculator from '../src/lib/Calculator';

test('2 Toilets should lead to 9 liters and 0.0801', (t) => {
  const expected = {
    liters: 9,
    cost: 0.0801,
  };

  const actual = calculator(data, { Toilet: 2 });
  t.deepEqual(actual, expected, 'Test passed, results are 9 liters and a price of 0.0801');
  t.end();
});

test('7 minutes shower should lead to 56 liters and 0.4984', (t) => {
  const expected = {
    liters: 56,
    cost: 0.4984,
  };

  const actual = calculator(data, { Shower: 7 });
  t.deepEqual(actual, expected, 'Test passed, results are 56 liters and a price of 0.4984');
  t.end();
});

test('2 Toilets and 7 minutes Shower should result in 65 liters and 0.5785', (t) => {
  const expected = {
    liters: 65,
    cost: 0.5785,
  };

  const actual = calculator(data, { Toilet: 2, Shower: 7 });
  t.deepEqual(actual, expected, 'Test passed, results are 65 liters and a price of 0.5785');
  t.end();
});

test('5 Toilets, 7 minutes Shower, 3 minutes Faucet tap, 2 minutes on the washing machine, and 1 minute dishwashing all should = 107.5 liters and cost: 0.9567', (t) => {
  const expected = {
    liters: 107.5,
    cost: 0.9567,
  };

  const actual = calculator(data, {
    Toilet: 5,
    Shower: 7,
    'Faucet tap': 3,
    'Washing machine': 2,
    Dishwasher: 1,
  });
  t.deepEqual(actual, expected, 'Test Passed, results are 107 liters and a price of 0.9567');
  t.end();
});

test('Shiny looking calculate button I wonder what it will do?', (t) => {
  const expected = {
    liters: 0,
    cost: 0,
  };

  const actual = calculator(data, {});
  t.deepEqual(actual, expected, 'Did you even clicked anything?');
  t.end();
});
