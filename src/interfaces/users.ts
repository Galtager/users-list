
export interface User {
    firstName: string;
    lastName: string;
    title: MartialStatus
    email: string;
    picture: string;
    street: string;
    country: string;
    city: string;
    id: string
}
type Location = {
    street: { name: string };
    country: string;
    city: string;
}
type Name = {
    title: MartialStatus
    first: string;
    last: string;
}

export interface GetUserDto {
    picture: { medium: string }
    location: Location
    name: Name;
    email: string;
    login: { uuid: string }
}
type MartialStatus = "Mr" | "Mrs" | "Ms" | "Miss" | "Monsieur"