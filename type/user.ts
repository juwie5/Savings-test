interface location {
    lat: number,
    lng: number
}

interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: location
}

interface company {
    name: string,
    catchPhrase: string,
    bs: string
}

export type IUser = {
    id : Number,
    name: string,
    username: string,
    email: string,
    address: address,
    phone: string,
    website: string,
    company: company
};

