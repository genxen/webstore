export class Company {
	name: string;
	teaser: string;
	address?: Address;
	contact: string;
	email: string;
	tels: string[];
}

export class Address {
	line1: string;
	line2?: string;
	zip: string;
	city: string;	
}
