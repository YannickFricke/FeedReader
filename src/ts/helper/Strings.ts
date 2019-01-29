/**
 * Generates a random string with the given length
 * @param length Length of the string to generate
 */
export function generateRandomString(length: number = 32): string {
    const result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }

    return result.join('');
}
