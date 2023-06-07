export const generateRandomID = (value: number): number => {
    const array: Uint32Array = new Uint32Array(value);
    self.crypto.getRandomValues(array);
    return array[Math.floor(Math.random() * value)];
}