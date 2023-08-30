import { ILaunche } from "../../schemas/Launche";

export default interface ILauncheRepository {
    find(limit: number, skip: number): Promise<any>;
    create(data: ILaunche): Promise<any>;
}
