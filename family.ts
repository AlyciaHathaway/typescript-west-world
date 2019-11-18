#!/usr/bin/env ts-node

function createPrefix(n: number): string {
    return '----'.repeat(n)
}
{
    class Person {
        public children: Person[] = []
        constructor(public name: string) {}
        addChild(child: Person): void {
            this.children.push(child)
        }
        introduceFamily(n?: number): void {
            n = n || 1
            console.log(`${createPrefix(n - 1)}${this.name}`)
            this.children.forEach(child => {
                child.introduceFamily(n + 1)
            })
        }
    }
    let grandPa = new Person('爷爷')
    let child1 = new Person('公主')
    let child2 = new Person('Gakki')
    let person11 = new Person('三毛')
    let person12 = new Person('奈奈')
    let person21 = new Person('石原里美')
    let person22 = new Person('新垣结衣')
    grandPa.addChild(child1)
    grandPa.addChild(child2)

    child1.addChild(person11)
    child1.addChild(person12)

    child2.addChild(person21)
    child2.addChild(person22)
    grandPa.introduceFamily()
}
