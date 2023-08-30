import ILauncheRepository from "./ILauncheRepository";
import IDatabase from '../../../infra/persistence/IDatabase';
import { ILaunche } from "../../schemas/Launche";
import { Model } from "mongoose";

export default class LauncheRepository implements ILauncheRepository {
    constructor(private launch: Model<ILaunche>) { }

    async find(limit: number, skip: number): Promise<any> {

        return this.launch.find().sort({ createdAt: 1 }).skip(skip).limit(limit);
    }

    async create(data: ILaunche): Promise<any> {
        return this.launch.create(data);
    }

    async countDocs(): Promise<any> {
        return this.launch.countDocuments();
    }
}