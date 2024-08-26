import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('sixteen byte key');

function encryptAES(plaintext) {
    // Parse the plaintext to a WordArray
    const plaintextWordArray = CryptoJS.enc.Utf8.parse(plaintext);

    // Pad the plaintext to ensure its length is a multiple of 16 bytes
    const padder = CryptoJS.pad.Pkcs7;

    // Encrypt the padded plaintext
    const encrypted = CryptoJS.AES.encrypt(plaintextWordArray, key, {
        mode: CryptoJS.mode.ECB,
        padding: padder,
    });

    // Return the Base64 encoded ciphertext
    return encrypted.toString();
}

// Example usage
const plaintext = "My secret data";
const ciphertext = encryptAES(plaintext);
console.log("Ciphertext:", ciphertext);
export default encryptAES;
