import { generateRandomString } from '../Strings';

it('should generate a random string', () => {
    const generatedString = generateRandomString();

    expect(generatedString).not.toBeUndefined();
    expect(generatedString).not.toBeNull();
    expect(generatedString).toHaveLength(32);
});

it('should generate a random string with a specific length', () => {
    const length = 16;
    const generatedString = generateRandomString(length);

    expect(generatedString).not.toBeUndefined();
    expect(generatedString).not.toBeNull();
    expect(generatedString).toHaveLength(length);
});
