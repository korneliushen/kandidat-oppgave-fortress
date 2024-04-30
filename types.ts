
export default interface Details {
    name: string,
    value: string | number | bigint
}
export default interface Contact {
    name: string,
    phone: number
}
export default interface Address {
    street: string,
    city: string,
    zipCode: string
}

export default interface Data {
    title: string[];
    details: Array<Details>;
    contact: {
        name: string,
        phone: string
    };
    address: {
        street: string,
        city: string,
        zipCode: string
    }
}

export default interface actionData {
    name: string,
    value: string | number | bigint,
    description: string,
}
