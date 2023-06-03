declare module '*.jpg'

interface TCalcFormMetal {
	title: string,
	k: number,
	price: Map<number, number>
}

interface CalcForm {
	metal: TCalcFormMetal;
	thickness: number;
	engravingCount: number;
	cutLength: number;
	paint: {
		val: string | null;
		price: number | null;
	};
	customPaint: {
		val: string | null;
		price: number;
	};
	square: number;
	delivery: {
		val: string;
		price: number;
	};
	terms: {
		value: string | null;
		k: number | null;
	};
	customTerms: {
		value: string | null ;
		k: number;
	};
}