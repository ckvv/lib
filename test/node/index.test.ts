import { describe, expect, test } from 'vitest'
import { node } from '@ckpack/lib'

describe('node', () => {
  test('getMd5', () => {
    const { getMd5 } = node
    expect(getMd5('true')).toEqual('b326b5062b2f0e69046810717534cb09')
  })
})
