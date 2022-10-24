import { describe, expect, test } from 'vitest';
import { toRawType } from '../';

describe('common', () => {
  test('toRawType', () => {
    expect(toRawType(true)).toEqual('Boolean');
  });
});
