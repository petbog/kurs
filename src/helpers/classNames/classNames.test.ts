import { classNames } from "./classNames"

describe('classNames', () => {

    test('with only first param', () => {
        expect(classNames('someClacc')).toBe('someClacc')
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    });
    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrolle'
        expect(classNames('someClass', { hovered: true, scrolle: true }, ['class1', 'class2'])).toBe(expected)
    });
    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', { hovered: true, scrolle: false }, ['class1', 'class2'])).toBe(expected)
    });
    test('with mods undifaned', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', { hovered: true, scrolle: undefined }, ['class1', 'class2'])).toBe(expected)
    });
})