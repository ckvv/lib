import { describe, expect, test } from 'vitest';
import { getRawType } from '../';

describe('common', () => {
  test('toRawType', () => {
    expect(getRawType(true)).toEqual('Boolean');
  });
});
