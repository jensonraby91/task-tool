import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MockData implements InMemoryDbService {
    createDb() {
        let getTasks = [
            {
                id: 1,
                title: "create login",
                seviority: 'high',
                startDate: 'Wed, 24 Feb 2021 11:25:23 GMT',
                dueDate: 'Wed, 24 Feb 2021 11:25:23 GMT',
            },
            {
                id: 2,
                title: "Create module",
                seviority: 'low',
                startDate: 'Wed, 24 Feb 2021 11:25:23 GMT',
                dueDate: 'Thu, 25 Feb 2021 11:25:23 GMT',
            }

        ]
        let inProgressTask = [
            {
                id: 3,
                title: "configure nginx",
                seviority: 'high',
                startDate: 'Wed, 24 Feb 2021 11:25:23 GMT',
                dueDate: 'Thu, 25 Feb 2021 11:25:23 GMT',
            },
        ]
        let completedTask = [
            {
                id: 5,
                title: "build project",
                seviority: 'high',
                startDate: 'Wed, 24 Feb 2021 11:25:23 GMT',
                dueDate: 'Thu, 25 Feb 2021 11:25:23 GMT',
            },
        ]
        return { getTasks, inProgressTask, completedTask };
    }
}