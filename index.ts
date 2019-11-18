class Student {
    fullName: string
    constructor(public firstName, public lastName) {
        this.fullName = firstName + ' ' + lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Dolores', '2b')

console.log(greeter(user))

function add(a: string, b: string): string
function add(a: number, b: number): string
function add(a: any, b: any): any {
    return a + b
}
var c = add(1, 2)
console.log(c)

function bubble(a: Array<number>) {}
function selectSort(a: number[]): number[] {
    return []
}

enum Gender {
    Male,
    Female
}
interface Person2 {
    gender: Gender
}
function merry(a: Person2, b: Person2): [Person2, Person2] {
    if (a.gender !== b.gender) {
        return [a, b]
    } else {
        throw new Error('性别相同不能结婚')
    }
}
