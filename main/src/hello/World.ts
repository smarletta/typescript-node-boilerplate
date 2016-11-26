export default class World {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): string {
        return 'Hello ' + this.name;
    }
}