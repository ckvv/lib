import { describe, expect, test } from 'vitest';
import * as library from '@ckpack/lib';

describe('library', () => {
  test('toBeTruthy', () => {
    expect(library).toBeTruthy();
  });
});
