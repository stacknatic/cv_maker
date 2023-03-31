const telephoneInput = document.querySelector('#tel')
const telephoneOutput = document.querySelector('.telephone')
const cvWindow = document.querySelector('.section2')
const printButton = document.querySelector('button')
const style = document.querySelector('style')

const skillsUl = document.querySelector('.skills-ul')

const cvContent = () => {
    telephoneOutput.innerText = telephoneInput.value
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


telephoneInput.addEventListener('input', cvContent)
printButton.addEventListener('click', printCv)