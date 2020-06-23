/* eslint-env jest */
import ficons from '../index';

test('has correct properties', () => {
    expect(ficons).toHaveProperty('icons');
    expect(ficons).toHaveProperty('toSvg');
    expect(ficons).toHaveProperty('replace');
});
