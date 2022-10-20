import { describe, expect, test } from 'vitest';
import { common } from '@ckpack/lib';

describe('common', () => {
  test('toRawType', () => {
    const { toRawType } = common;
    expect(toRawType(true)).toEqual('Boolean');
  });
});
