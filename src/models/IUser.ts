export interface IUser {
    website: string;
    address: IAddress;
    phone: string;
    name: string;
    company: ICompany;
    id: number;
    email: string;
    username: string;
}

export interface IAddress {
	zipcode: string;
	geo: IGeo;
	suite: string;
	city: string;
	street: string;
}

export interface ICompany {
	bs: string;
	catchPhrase: string;
	name: string;
}

export interface IGeo {
	lng: string;
	lat: string;
}




