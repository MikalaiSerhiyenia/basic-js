const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  process(text, key, isEncrypt) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();

      if (this.alphabet.includes(char)) {
        const textIndex = this.alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyOffset = this.alphabet.indexOf(keyChar);

        let processedIndex;
        if (isEncrypt) {
          processedIndex = (textIndex + keyOffset) % 26;
        } else {
          processedIndex = (textIndex - keyOffset + 26) % 26;
        }

        result += this.alphabet[processedIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(text, key) {
    return this.process(text, key, true);
  }

  decrypt(text, key) {
    return this.process(text, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};