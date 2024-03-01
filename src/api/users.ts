import axios from "axios"
import { GetUserDto, User } from "../interfaces/users";

type GetUsersResponse = {
    results: GetUserDto[];

};


export const fetchUsersAPI = async (): Promise<User[]> => {
    const { data } = await axios.get<GetUsersResponse>("https://randomuser.me/api/?results=10");
    const users: User[] = data.results.map(el => ({
        firstName: el.name.first,
        lastName: el.name.last,
        title: el.name.title,
        picture: el.picture.medium,
        email: el.email,
        id: el.login.uuid,
        city: el.location.city,
        country: el.location.country,
        street: el.location.street.name
    }))
    return users;
}