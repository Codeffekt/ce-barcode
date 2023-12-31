import { Pipe, PipeTransform } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

export const ZXING_FORMAT_TO_TYPE: { [key in BarcodeFormat]: string } = {
    /** Aztec 2D barcode format. */
    [BarcodeFormat.AZTEC]: "AZTEC",
    /** CODABAR 1D format. */
    [BarcodeFormat.CODABAR]: "CODABAR",
    /** Code 39 1D format. */
    [BarcodeFormat.CODE_39]: "CODE_39",
    /** Code 93 1D format. */
    [BarcodeFormat.CODE_93]: "CODE_93",
    /** Code 128 1D format. */
    [BarcodeFormat.CODE_128]: "CODE_128",
    /** Data Matrix 2D barcode format. */
    [BarcodeFormat.DATA_MATRIX]: "DATA_MATRIX",
    /** EAN-8 1D format. */
    [BarcodeFormat.EAN_8]: "EAN_8",
    /** EAN-13 1D format. */
    [BarcodeFormat.EAN_13]: "EAN_13",
    /** ITF (Interleaved Two of Five) 1D format. */
    [BarcodeFormat.ITF]: "ITF",
    /** MaxiCode 2D barcode format. */
    [BarcodeFormat.MAXICODE]: "MAXICODE",
    /** PDF417 format. */
    [BarcodeFormat.PDF_417]: "PDF_417",
    /** QR Code 2D barcode format. */
    [BarcodeFormat.QR_CODE]: "QR_CODE",
    /** RSS 14 */
    [BarcodeFormat.RSS_14]: "RSS_14",
    /** RSS EXPANDED */
    [BarcodeFormat.RSS_EXPANDED]: "RSS_EXPANDED",
    /** UPC-A 1D format. */
    [BarcodeFormat.UPC_A]: "UPC_A",
    /** UPC-E 1D format. */
    [BarcodeFormat.UPC_E]: "UPC_E",
    /** UPC/EAN extension format. Not a stand-alone format. */
    [BarcodeFormat.UPC_EAN_EXTENSION]: "UPC_EAN_EXTENSION",
}

export function getBarcodeTypeFromZxingFormat(format: BarcodeFormat): string {
    return ZXING_FORMAT_TO_TYPE[format] || "CODE_128";
}

export function getZxingFormatFromType(type: string): BarcodeFormat {
    return <BarcodeFormat>Object.keys(ZXING_FORMAT_TO_TYPE)
      .map(key => parseInt(key))
      .find((format: BarcodeFormat) => ZXING_FORMAT_TO_TYPE[format] === type);
  }

@Pipe({
    name: 'barcodeFormatLabel'
})
export class BarcodeFormatLabel implements PipeTransform {
    transform(type: BarcodeFormat, ...args: any[]): string {
        return getBarcodeTypeFromZxingFormat(type);
    }
}