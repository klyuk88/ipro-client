declare module '*.jpg'

interface TCalcFormMetal {
	title: string,
	k: number,
	price: Map<number, number>
}

interface CalcForm {
	metal: TCalcFormMetal | null;
	thickness: number | null;
	engravingCount: number | null;
	customEngravingCount: number | null;
	cutLength: number | null;
	paint: {
		value: string;
		price: number;
	} | null;
	customPaint: {
		value: string;
		price: number;
	} | null;
	square: number | null;
	delivery: {
		value: string;
		price: number;
	} | null;
	terms: {
		value: string;
		k: number;
	} | null;
	customTerms: Date | null;
}