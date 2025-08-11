/**
 * Jest smoke tests for AI GitHub Automation Test #2
 * These tests verify basic functionality of the exported functions.
 */

const { greet, add, isEven } = require('../src/index.js');

describe('AI GitHub Automation Test #2 - Smoke Tests', () => {
  describe('greet function', () => {
    test('should return default greeting', () => {
      const result = greet();
      expect(result).toBe('Hello, World! Welcome to AI GitHub Automation Test #2!');
    });

    test('should return personalized greeting', () => {
      const result = greet('Jest');
      expect(result).toBe('Hello, Jest! Welcome to AI GitHub Automation Test #2!');
    });

    test('should handle empty string name', () => {
      const result = greet('');
      expect(result).toBe('Hello, ! Welcome to AI GitHub Automation Test #2!');
    });
  });

  describe('add function', () => {
    test('should add positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('should add zero', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('isEven function', () => {
    test('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(100)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    test('should handle negative numbers', () => {
      expect(isEven(-2)).toBe(true);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe('module integration', () => {
    test('all functions should be defined', () => {
      expect(greet).toBeDefined();
      expect(add).toBeDefined();
      expect(isEven).toBeDefined();
    });

    test('all functions should be callable', () => {
      expect(typeof greet).toBe('function');
      expect(typeof add).toBe('function');
      expect(typeof isEven).toBe('function');
    });
  });
});
