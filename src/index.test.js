const { formatDateWithOrdinal, getOrdinalSuffix } = require('./index');

describe('getOrdinalSuffix', () => {
  test('returns "st" for 1', () => {
    expect(getOrdinalSuffix(1)).toBe('st');
  });

  test('returns "nd" for 2', () => {
    expect(getOrdinalSuffix(2)).toBe('nd');
  });

  test('returns "rd" for 3', () => {
    expect(getOrdinalSuffix(3)).toBe('rd');
  });

  test('returns "th" for 4', () => {
    expect(getOrdinalSuffix(4)).toBe('th');
  });

  test('returns "th" for 11', () => {
    expect(getOrdinalSuffix(11)).toBe('th');
  });

  test('returns "th" for 12', () => {
    expect(getOrdinalSuffix(12)).toBe('th');
  });

  test('returns "th" for 13', () => {
    expect(getOrdinalSuffix(13)).toBe('th');
  });

  test('returns "st" for 21', () => {
    expect(getOrdinalSuffix(21)).toBe('st');
  });

  test('returns "nd" for 22', () => {
    expect(getOrdinalSuffix(22)).toBe('nd');
  });

  test('returns "rd" for 23', () => {
    expect(getOrdinalSuffix(23)).toBe('rd');
  });

  test('returns "th" for 24', () => {
    expect(getOrdinalSuffix(24)).toBe('th');
  });
});

describe('formatDateWithOrdinal', () => {
  test('formats date with ordinal suffix', () => {
    const date = new Date('2024-10-01');
    expect(formatDateWithOrdinal(date)).toBe('Oct 01st');
  });

  test('formats date with ordinal suffix for 2nd', () => {
    const date = new Date('2024-10-02');
    expect(formatDateWithOrdinal(date)).toBe('Oct 02nd');
  });

  test('formats date with ordinal suffix for 3rd', () => {
    const date = new Date('2024-10-03');
    expect(formatDateWithOrdinal(date)).toBe('Oct 03rd');
  });

  test('formats date with ordinal suffix for 11th', () => {
    const date = new Date('2024-10-11');
    expect(formatDateWithOrdinal(date)).toBe('Oct 11th');
  });

  test('formats date with ordinal suffix for 22nd', () => {
    const date = new Date('2024-10-22');
    expect(formatDateWithOrdinal(date)).toBe('Oct 22nd');
  });
});