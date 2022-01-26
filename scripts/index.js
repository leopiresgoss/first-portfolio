const projects = [
    {
        id: 0,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 1,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 2,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 3,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 4,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 5,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
    {
        id: 6,
        name: 'Multi-Post Stories',
        shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        image: "images/cards/multi_post_project_image_desktop.png",
        altImage: 'Woman practicing Yoga',
        languages: ['css', 'html', 'bootstrap', 'Ruby'],
        source: '#',
        liveVersion: '#'
    },
]
//generate
function elementGenerator(type, cssClass) {
    let elem = document.createElement(type)
    
    const cssClassArr = cssClass.split(' ')

    cssClassArr.map((classElem) => {
        elem.classList.add(classElem)
    })
    return elem
}

function languagesGenerator(project) {
    let languages = elementGenerator('ul', 'boxes')

    project.languages.map((language) => {
        let li = document.createElement('li')
        li.innerHTML = language
        languages.appendChild(li)
    })

    return languages
}

// render card
function renderCard(project) {
    let card = elementGenerator('div', 'card')

    let inputHidden = elementGenerator('input', 'input-hidden')
    inputHidden.type = 'hidden'
    inputHidden.id = project.id
    card.appendChild(inputHidden)

    let projectDetails = elementGenerator('div', 'project-details')
    projectDetails.title = project.name
    projectDetails.style.background = `
        linear-gradient(
            180.45deg,
            rgba(38, 38, 38, 0) 0.75%,
            rgb(38 38 38 / 66%) 120%
        ),
        url(${project.image}) center / cover no-repeat
    `
    let mask = elementGenerator('div', 'mask-card')
    mask.style.backgroundImage = `url(${project.image})`
    projectDetails.appendChild(mask)

    let projectContent = elementGenerator('div', 'project-content')

    let projectName = elementGenerator('h3', 'project-name')
    projectName.innerHTML = project.name
    projectContent.appendChild(projectName)

    let description = elementGenerator('p', 'description')
    description.innerHTML = project.shortDescription
    projectContent.appendChild(description)

    let languages = languagesGenerator(project)
    projectContent.appendChild(languages)

    projectDetails.appendChild(projectContent)

    let seeProject = elementGenerator('button', 'button see-project large')
    seeProject.innerHTML = 'See Project'

    card.appendChild(projectDetails)
    card.appendChild(seeProject)
    
    return card
}

// render first card
function renderCardMain() {
    const project = projects[0]

    let cardDiffDiv = elementGenerator('div', 'card diff')

    let inputHidden = elementGenerator('input', 'input-hidden')
    inputHidden.type = 'hidden'
    inputHidden.id = project.id
    cardDiffDiv.appendChild(inputHidden)

    let img = document.createElement('img')
    img.src = project.image
    img.alt = project.altImage
    cardDiffDiv.appendChild(img)

    let secondDiv = document.createElement('div')
    let name = elementGenerator('h3', 'project-name')
    name.innerHTML = project.name
    secondDiv.appendChild(name)

    let shortDescription = elementGenerator('p', 'description')
    shortDescription.innerHTML = project.shortDescription
    secondDiv.appendChild(shortDescription)

    let languages = languagesGenerator(project)
    secondDiv.appendChild(languages)

    let seeProject = elementGenerator('button', 'button see-project visible')
    seeProject.innerHTML = 'See Project'
    secondDiv.appendChild(seeProject)


    cardDiffDiv.appendChild(secondDiv)

    document.getElementById("recent-works").appendChild(cardDiffDiv)
}

// render all cards 
function renderCards() {
    let cards = elementGenerator('div', 'cards')

    projects.map((project, index) => {
        if (index > 0) {
            const card = renderCard(project)
            cards.appendChild(card)
        }
    })
    document.getElementById("recent-works").appendChild(cards)
}

// recent works cards hover logic
function maskMouseOver(card) {
    card.addEventListener('mouseover', () => {
        card.style.cursor = 'pointer'
        let mask = card.querySelector('.mask-card')
        let button = card.querySelector('.see-project')
        mask.classList.toggle('visible')
        button.classList.toggle('visible')
    })
}

function maskMouseOut(card) {
    card.addEventListener('mouseout', () => {
        let mask = card.querySelector('.mask-card')
        let button = card.querySelector('.see-project')
        mask.classList.toggle('visible')
        button.classList.toggle('visible')
    })
}

// only for desktop version
function addMaskCardHover() {
    if (window.matchMedia('(min-width: 995px)').matches) {
        const cards = document.querySelectorAll('.cards .card')
        cards.forEach(card => {
            maskMouseOver(card)
            maskMouseOut(card)
        })
    }
}

/* PopUp Window */
// create element and render it
function createPopupModal(button) {
    let card = button.parentElement
    
    // for class diff
    if(card.classList.length === 0) {
        card = card.parentElement
    }
    
    let project = projects[card.querySelector('.input-hidden').id]

    // TODO    
    let popupWindow = elementGenerator('div', 'window-mask mobile')
    let popupModal = elementGenerator('div', 'popup project')
    
    let closeButton = elementGenerator('button', 'close-popup')
    closeButton.setAttribute('aria-label', 'close')
    let closeIcon = elementGenerator('i', 'material-icons')
    closeIcon.innerHTML = 'close'
    // TODO ADD CLOSE EVENT LISTENER
    closeButton.appendChild(closeIcon)

    let projectName = elementGenerator('h3', 'project-name')
    projectName.innerHTML = project.name

    let firstRow = elementGenerator('div', 'first-row')
    firstRow.append(projectName, closeButton)

    let languages = languagesGenerator(project)
    
    let img = elementGenerator('img', 'img')
    img.alt = project. altImage
    img.src = project.image

    let description = elementGenerator('p', 'description')
    description.innerHTML = project.description

    // TODO ADD BUTTONS ICONS
    let buttons = elementGenerator('div', 'buttons')
    let liveVersion = elementGenerator('a', 'button visible')
    liveVersion.innerHTML = 'See Live'
    liveVersion.href = project.liveVersion

    let source = elementGenerator('a', 'button visible')
    source.innerHTML = 'See Source'
    source.href = project.source 

    buttons.append(liveVersion, source)

    popupModal.append(firstRow, languages, img, description, buttons)
    popupWindow.appendChild(popupModal)

    return popupWindow
}

function openPopupWindow() {
    const seeProjectButtons =  document.querySelectorAll('.see-project')

    seeProjectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const main = document.querySelector('main')
            main.appendChild(createPopupModal(button))
        })
    })
}


renderCardMain()
renderCards()
addMaskCardHover()
openPopupWindow()


