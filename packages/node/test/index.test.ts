import { describe, expect, test } from 'vitest';
import { getMd5 } from '@ckvv/node';

describe('node', () => {
  test('getMd5', () => {
    expect(getMd5('true')).toEqual('b326b5062b2f0e69046810717534cb09');
  });
});
