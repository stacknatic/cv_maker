//input
const nameInput = document.querySelector('#fullname');
const professionInput = document.querySelector('#profession');
const telephoneInput = document.querySelector('#tel');
const emailInput = document.querySelector('#email');
const locationInput = document.querySelector('#location');

const githubInput = document.querySelector('#github')
const linkedinInput = document.querySelector('#linkedin');
const websiteInput = document.querySelector('#website');
const overviewInput = document.querySelector('#overview')
const experienceInput = document.querySelector('#experience')
const educationInput = document.querySelector('#education')
const coursesInput = document.querySelector('#courses')
const skillInput = document.querySelector('#skill')

const objectivesInput = document.querySelector('#objectives')

const interestsInput = document.querySelector("#interests")

const photoInput = document.querySelector('#photo')

const profilePic = document.querySelector('.profile-pic')


//output
const nameOutput = document.querySelector('.fullname-output');
const professionOutput = document.querySelector('.profession');
const telephoneOutput = document.querySelector('.telephone');
const emailOutput = document.querySelector('.email-output');
const locationOutput = document.querySelector('.location-output');
const githubOutput = document.querySelector('.github-output');
const linkedinOutput = document.querySelector('.linkedin-output');
const websiteOutput = document.querySelector('.website-output');
const overviewOutput = document.querySelector('.overview-text');
const experienceOutput = document.querySelector('.experience-text');
const educationOutput = document.querySelector('.education-ul');
const coursesOutput = document.querySelector('.courses-ul');

// button 
const skillBtn = document.querySelector('#add-skill')
const objectiveBtn = document.querySelector('#add-objectives')
const interestBtn = document.querySelector('#add-interests')

const resetCv = document.querySelector('#reset-cv')


const cvWindow = document.querySelector('.section2')
const printButton = document.querySelector('#print-cv')
const style = document.querySelector('style')

const skillsUl = document.querySelector('.skills-ul')

const objectivessUl = document.querySelector('.objectives-ul')

const interestsUl = document.querySelector('.interests-ul')





const cvContent = () => {
    nameOutput.innerText = nameInput.value;
    professionOutput.innerText = professionInput.value;
    if(telephoneInput.value.length > 16){
        alert('Telephone number should not be more than 16 digits.');
        
    }
    telephoneInput.value = telephoneInput.value.slice(0,16);

    telephoneOutput.innerText = telephoneInput.value;
    locationOutput.innerText = locationInput.value;
    githubOutput.innerText = githubInput.value;
    linkedinOutput.innerText = linkedinInput.value;
    websiteOutput.innerText = websiteInput.value;
    overviewOutput.innerText = overviewInput.value;
    emailOutput.innerText = emailInput.value;
    experienceOutput.innerText = experienceInput.value;
    educationOutput.innerText = educationInput.value;
    coursesOutput.innerText = coursesInput.value;

}


// const printCv = () => {
//     const cvTemplate = window.open('', '', width=500, height=500)
//     cvTemplate.document.write('<head>')
//     cvTemplate.document.write('<style>')
//     cvTemplate.document.write(style.innerHTML)
//     cvTemplate.document.write('</style>')
//     cvTemplate.document.write('</head>')
//     cvTemplate.document.write(cvWindow.innerHTML)
//     cvTemplate.document.close()
//     cvTemplate.print()
    
// }

const printCv = () => {
    
    window.print()
    
}

const skillset = (skill) => {
    const skillsLi = document.createElement('li')
    skillsLi.innerText = skill
    skillsUl.appendChild(skillsLi)
}
const objectiveset = (objective) => {
    const objectivesLi = document.createElement('li')
    objectivesLi.innerText = objective
    objectivessUl.appendChild(objectivesLi)
}
const interestset = (interest) => {
    const interestLi = document.createElement('li')
    interestLi.innerText = interest
    interestsUl.appendChild(interestLi)
}
const addSkill = (e) => {
    e.preventDefault();
    skillset(skillInput.value)
}

const addObjective = (e) => {
    e.preventDefault();
    objectiveset(objectivesInput.value)
}

const addInterest = (e) => {
    e.preventDefault();
    interestset(interestsInput.value)
}

const cvReset = (e) => {
    e.preventDefault();
    location.reload();
}

function addPhoto (){
    const path = this.value
    const picname = path.replace(/^C:\\fakepath\\/, "")
    profilePic.src = picname
    console.log('path is ' + picname)
}

nameInput.addEventListener('input', cvContent);
professionInput.addEventListener('input', cvContent);
telephoneInput.addEventListener('input', cvContent);
emailInput.addEventListener('input', cvContent);
locationInput.addEventListener('input', cvContent);
githubInput.addEventListener('input', cvContent);
linkedinInput.addEventListener('input', cvContent);
websiteInput.addEventListener('input', cvContent);
overviewInput.addEventListener('input', cvContent);

experienceInput.addEventListener('input', cvContent);
educationInput.addEventListener('input', cvContent);
coursesInput.addEventListener('input', cvContent);


printButton.addEventListener('click', printCv);
skillBtn.addEventListener('click', addSkill)
objectiveBtn.addEventListener('click', addObjective)
interestBtn.addEventListener('click', addInterest)

resetCv.addEventListener('click', cvReset)

photoInput.addEventListener('change', addPhoto)