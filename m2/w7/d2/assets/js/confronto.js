class Person {
    constructor(_name, _age) {

        this.name =  _name;
        this.age = _age
        
    }

    ageComparison(px) {

        let printTarget = document.querySelector(".list-group");
        let li = document.createElement("li")
        li.classList.add("list-group-item")

        if (this.age > px.age) {

            li.innerHTML += `${this.name} è più vecchio di ${px.name}`;
            printTarget.appendChild(li);

        } else if (px.age > this.age) {

            li.innerHTML += `${px.name} è più vecchio di ${this.name}`;
            printTarget.appendChild(li);

        } else {

            li.innerHTML += `${this.name} e ${px.name} hanno la stessa età`;
            printTarget.appendChild(li);
            
        }
    }
}

const p1 = new Person("Gennaro", 25);
const p2 = new Person("Rita", 23);
const p3 = new Person("Biagio", 25)

p1.ageComparison(p2);
p2.ageComparison(p3);
p3.ageComparison(p1);