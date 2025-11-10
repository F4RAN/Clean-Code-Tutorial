import User from "../../domain/user/User";
import ID from "../../domain/user/ID";

export interface UserRepository{
    save(user: User): Promise<void>;
    findById(id: ID): Promise<User | null>
}
