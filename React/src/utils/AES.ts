// import crypto from 'crypto'
// import {AES, enc} from 'crypto-js'
//
// export const hexRandom = (length: number) :string => {
//     return crypto.randomBytes(length).toString("hex");
// };
//
// export const encryptWithAES = (data: string, key: string): string => {
//     return AES.encrypt(data, key).toString();
// };
//
// export const decryptWithAES = (data: string, key: string): string => {
//     return AES.decrypt(data, key).toString(enc.Utf8)
// }
//
// const hexToString = (hex: string):string => {
//     return Buffer.from(hex, 'hex').toString()
// };
// export const publicEncrypt = (dataToEncrypt: string):string => {
//     const key = import.meta.env.VITE_AES_PUBLIC_KEY
//     const publicKey = hexToString(key);
//
//     return crypto.publicEncrypt(
//         {
//             key: publicKey
//         },
//         Buffer.from(dataToEncrypt, "hex")
//     ).toString("hex");
// };