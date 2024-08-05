import { encrypt, decrypt } from "ethereum-cryptography/aes.js";
import { hexToBytes, utf8ToBytes } from "ethereum-cryptography/utils.js";

try {
  const key = hexToBytes("000102030405060708090a0b0c0d0e0f");
  const iv = hexToBytes("101112131415161718191a1b1c1d1e1f");
  const data = utf8ToBytes("Hello, World!");
  const encrypted = await encrypt(data, key, iv, "aes-128-cbc", true);
  console.log(encrypted);

  const decrypted = await decrypt(encrypted, key, iv, "aes-128-ctr", true);
  console.log(decrypted);
  }
catch (error){
  console.log(error);
}