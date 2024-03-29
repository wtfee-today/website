export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface FeesStats {
  fastest: number;
  halfHour: number;
  hour: number;
  economy: number;
  minimum: number;
  medianNextBlock: number;
  minimumNextBlock: number;
}

export interface ExchangeRates {
  [currency: string]: number;
}

export enum TxInputType {
  P2PKH = 'p2pkh',
  P2WPKH = 'p2wpkh',
  P2SH_2o3 = 'p2sh_2o3',
  P2WSH_2o3 = 'p2wsh_2o3',
  P2TR = 'p2tr',
}

export enum TxOutputType {
  P2PKH = 'p2pkh',
  P2WPKH = 'p2wpkh',
  P2SH = 'p2sh',
  P2WSH = 'p2wsh',
  P2TR = 'p2tr',
}

export type TxTemplateInput = {
  type: TxInputType;
  additionalVBytes?: number;
};
export type TxTemplateOutput = {
  type: TxOutputType;
  additionalVBytes?: number;
};

export type TxTemplate = {
  code: string;
  name: string;
  inputs: TxTemplateInput[];
  outputs: TxTemplateOutput[];
  sizeVB?: number;
  costSats?: {
    fastest: number;
    halfHour: number;
    hour: number;
    economy: number;
    minimum: number;
    medianNextBlock: number;
    minimumNextBlock: number;
    custom: number;
  };
  tags?: string[];
};
