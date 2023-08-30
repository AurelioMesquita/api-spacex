import axios from 'axios';
import ISpaceRepository from "./ISpaceRepository";

export default class SpaceRepository implements ISpaceRepository {
    constructor() { }

    async get(): Promise<any> {
        try {
            const response = await axios.get(process.env.url_launchers);
            return response.data;
        } catch (error) {
            console.error('Error fetching data from the API: ' + JSON.stringify(error));
        }
    }
}