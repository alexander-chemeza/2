class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const dep = new Department('Alexander');
console.log(dep.name);