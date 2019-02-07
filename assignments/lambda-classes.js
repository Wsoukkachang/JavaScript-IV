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

class Student extends Person {
    constructor (childAttributes) {
        super(childAttributes);
        this.previousBackground = childAttributes.previousBackground;
        this.className = childAttributes.className;
        this.favSubjects = childAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    printChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor (gchildAttributes) {
        super(gchildAttributes);
        this.gradClassName = gchildAttributes.gradClassName;
        this.favInstructor = gchildAttributes.favInstructor;
        this.favSubjects = gchildAttributes.favSubjects;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}