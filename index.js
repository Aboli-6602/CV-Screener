const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

function cvIterator(data) {
    let nextIndex = 0;
    return {
        next: function () {
            return (nextIndex < data.length) ? { value: data[nextIndex++], done: false } : { done: true }
        }
    }
}
const profiles = cvIterator(data);
let profile = document.getElementById('profile');
let candidate;
function nextCandidate() {
    candidate = profiles.next().value;
    if (candidate != undefined) {
        profile.innerHTML = `
        <img  src=${candidate.image}></img>
        <br>
        <br>
        <ul class="list-group">
            <li class="list-group-item">Name: ${candidate.name}</li>
            <li class="list-group-item">${candidate.age} years old</li>
            <li class="list-group-item">Lives in ${candidate.city}</li>
            <li class="list-group-item">Primarly uses ${candidate.language}</li>
            <li class="list-group-item">Works with ${candidate.framework} framework</li>
        </ul>`;
    }
    else{
        alert('You have reached  the end of Applicants list');
        window.location.reload();
    }
}


nextCandidate();

const next = document.getElementById('next')

next.addEventListener('click', nextCandidate);


