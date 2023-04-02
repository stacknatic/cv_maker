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


const cvWindow = document.querySelector('.section2')
const printButton = document.querySelector('#print-cv')
const style = document.querySelector('style')

const skillsUl = document.querySelector('.skills-ul')

const cvContent = () => {
    nameOutput.innerText = nameInput.value;
    professionOutput.innerText = professionInput.value;
    telephoneOutput.innerText = telephoneInput.value;
    locationOutput.innerText = locationInput.value;
    githubOutput.innerText = githubInput.value;
    linkedinOutput.innerText = linkedinInput.value;
    websiteOutput.innerText = websiteInput.value;
    overviewOutput.innerText = overviewInput.value;
    emailOutput.innerText = emailInput.value;



}


const printCv = () => {
    const cvTemplate = window.open('', '', width=500, height=500)
    cvTemplate.document.write('<head>')
    cvTemplate.document.write('<style>')
    cvTemplate.document.write(style.innerHTML)
    cvTemplate.document.write('</style>')
    cvTemplate.document.write('</head>')
    cvTemplate.document.write(cvWindow.innerHTML)
    cvTemplate.document.close()
    cvTemplate.print()
    
}

const addSkill = () => {
    const skillsLi = document.createElement('li')
    skillsLi.innerText = 'testing skill'
    skillsUl.appendChild(skillsLi)

}
addSkill()


nameInput.addEventListener('input', cvContent);
professionInput.addEventListener('input', cvContent);
telephoneInput.addEventListener('input', cvContent);
emailInput.addEventListener('input', cvContent);
locationInput.addEventListener('input', cvContent);
githubInput.addEventListener('input', cvContent);
linkedinInput.addEventListener('input', cvContent);
websiteInput.addEventListener('input', cvContent);
overviewInput.addEventListener('input', cvContent);

printButton.addEventListener('click', printCv);