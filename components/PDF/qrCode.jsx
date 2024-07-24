// GenerateQrCode.js

import { Buffer } from 'buffer'; // Import Buffer from 'buffer' module
import QRCode from 'qrcode';

class GenerateQrCode {
  constructor(items = []) {
    this.items = items;
  }

  async generateQRCode() {
    try {
      const qrCodeData = await this.getQRCodeData();
      const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
      return qrCodeUrl;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw error;
    }
  }

  async getQRCodeData() {
    try {
      const tlvData = this.items.map(item => {
        return this.getTLVForValue('1', item.title) +
               this.getTLVForValue('2', item.description) +
               this.getTLVForValue('3', String(item.buyingPrice)) +
               this.getTLVForValue('4', String(item.sellingPrice)) +
               this.getTLVForValue('5', String(item.quantity));
      }).join('');

      return Buffer.from(tlvData); // Ensure Buffer is accessed correctly
    } catch (error) {
      console.error('Error in generating QR code data:', error);
      throw error;
    }
  }

  getTLVForValue(tagNum, tagValue) {
    const tagBuf = Buffer.from(tagNum, 'utf8'); // Use Buffer.from correctly
    const tagValueLenBuf = Buffer.from([tagValue.length], 'utf8');
    const tagValueBuf = Buffer.from(tagValue, 'utf8');
    return Buffer.concat([tagBuf, tagValueLenBuf, tagValueBuf]);
  }
}

export default GenerateQrCode;
