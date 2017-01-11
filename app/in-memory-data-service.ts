import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let message = [
            { message: "DB request received" },
            { message: "Azure account created" },
            { message: "Azure Database created" },
            { message: "Database Initiated" },
            { message: "Process complete" }
        ];
        return { message };
    }
}