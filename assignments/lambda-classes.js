// CODE here for your Lambda Classes 

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
    }

class Instructor extends Person {
    constructor (childAttributes) {
        super(childAttributes);
        this.specialty = childAttributes.specialty;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${subject}`;
    }

    grade() {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}