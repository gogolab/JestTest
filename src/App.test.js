import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("The Answer to Everything", () => {
    expect(42).toBeTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything();
});

test("2 + 2 equals 4", () => {
    expect(2 + 2).toBe(4);
});

test("4 + 2 equals 6", () => {
    expect(4 + 2).toBe(6);
});

test("sum function", () => {
    const sum = (a, b) => a + b;
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 2)).toBe(4);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, -2)).toBe(-3);
});

test("object assignment", () => {
    const obi = {one: 2};
    obi["two"] = 1;
    expect(obi).toEqual({one: 2, two: 1});
});

test("adding positive numbers not equal zero (existential edition)", () => {
    for (let tob = 1; tob <= 10; tob++) {
        for (let eor = 1; eor <= 10; eor++) {
            expect(tob + eor).not.toBe(0);
        }
    }
});

test("adding 40 + 2", () => {
    const value = 40 + 2;
    expect(value).toBeGreaterThan(41);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(44);
    expect(value).toBeLessThanOrEqual(4242);
});

test("add floating numbers", () => {
    const sum = 0.1 + 0.2;
    expect(sum).not.toBe(0.3);
    expect(sum).toBeCloseTo(0.3);
});

test("string matching regexes", () => {
    const str = "crashAndBurn";
    expect(str).not.toMatch(/acid/);
    expect(str).toMatch(/[zero]{0}[co0l]\Da\Sh\w\Dd\Du\D\w/);
});

test("kebab ingredients array", () => {
    const kebab = ["cats", "dogs", "rats"];
    expect(kebab).toContain("rats");
    expect(kebab).not.toContain("fish");
});

expect.extend({
    toBeTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything(received, argument) {
        const pass = (received === 42);
        if (pass) {
            return {
                message: () => (
                    `Expected ${received} not to be the Answer to the Ultimate Question of Life, The Universe, and Everything`
                ),
                pass: true
            };
        } else {
            return {
                message: () => (
                    `Expected ${received} to be the Answer to the Ultimate Question of Life, The Universe, and Everything`
                ),
                pass: false
            };
        }
    }
});
