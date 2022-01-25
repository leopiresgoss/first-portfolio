const projects = [
    {
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

function elementGenerator(type, cssClass) {
    let elem = document.createElement(type)
    
    const cssClassArr = cssClass.split(' ')

    cssClassArr.map((classElem) => {
        elem.classList.add(classElem)
    })
    return elem
}

//generate
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

renderCardMain()
renderCards()


