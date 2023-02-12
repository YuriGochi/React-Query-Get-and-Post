enum CountryEnum {
    usa = "USA",
    australia = "Australia",
    canada = "Canada"
}

export type Person = {
    name: string;
    lastName: string;
    country: CountryEnum;
}