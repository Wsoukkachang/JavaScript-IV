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

//------OBJECTS------
const cam = new Instructor({
    name: 'Cam',
    location: 'Los Angeles',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const dan = new Instructor({
    name: 'dan',
    location: 'Denver',
    age: 32,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `I like pizza`
  });

const will = new Student({
    name: 'will',
    location: 'Dallas',
    age: 30,
    gender: 'male',
    previousBackground: 'Dermatology',
    className: 'WEBPT4',
    favSubjects: ["Math", "Computer Science", "Art"]
  });

  const sally = new Student({
    name: 'sally',
    location: 'New York',
    age: 25,
    gender: 'female',
    previousBackground: 'Accountant',
    className: 'WEBPT3',
    favSubjects: ["Math", "Statistics", "English"]
  });

  const steve = new ProjectManagers({
    name: 'Steve',
    location: 'Salt Lake City',
    age: 35,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Code for life`,
    gradClassName: 'CS1',
    favInstructor: 'Cam'
  });

  const maria = new ProjectManagers({
    name: 'Maria',
    location: 'Washington DC',
    age: 37,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I code in my sleep`,
    gradClassName: 'CS2',
    favInstructor: 'Dan'
  });
