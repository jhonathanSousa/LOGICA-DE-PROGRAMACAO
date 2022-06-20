let patients = [
  {
    name: 'João',
    age: 20,
    weight: 80,
    height: 180
  },
  {
    name: 'Paulo',
    age: 50,
    weight: 98,
    height: 170
  },
  {
    name: 'Ana',
    age: 29,
    weight: 65,
    height: 160
  }
];

let patientsNames = [];

for (let patient of patients){
  patientsNames.push(patient.name);
}

alert(`Nome dos pacientes: ${patientsNames}`)