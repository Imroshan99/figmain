import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';

export const publickey = (publicKey, value) => {
    // JSEncrypt
    var publicKeyEncrypt = new JSEncrypt();
    publicKeyEncrypt.setPublicKey(publicKey);
    return publicKeyEncrypt.encrypt(value);
};

export const encrypt = (data, key, iv) => {
    var encryptedString;
    var encryptedBase64IV = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(iv));
    var parsedBase64IV = CryptoJS.enc.Base64.parse(encryptedBase64IV);
    if (typeof data == "string") {
        data = data.slice();
        encryptedString = CryptoJS.AES.encrypt(data, CryptoJS.SHA256(key), {
            iv: parsedBase64IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else {
        encryptedString = CryptoJS.AES.encrypt(
            JSON.stringify(data), CryptoJS.SHA256(key), {
            iv: parsedBase64IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    }
    return encryptedString.toString();
};


export const decrypt = (encrypted, key, iv) => {
    var encryptedBase64IV = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(iv));
    var parsedBase64IV = CryptoJS.enc.Base64.parse(encryptedBase64IV);
    var decrypted = CryptoJS.AES.decrypt(encrypted, CryptoJS.SHA256(key), {
        iv: parsedBase64IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8)
};