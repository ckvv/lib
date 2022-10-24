import { describe, expect, test } from 'vitest';
import { toRawType } from '@ckvv/common';

describe('common', () => {
  test('toRawType', () => {
    expect(toRawType(true)).toEqual('Boolean');
  });
});
