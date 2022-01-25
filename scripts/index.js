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

function elementGenarator(type, cssClass) {
    let elem = document.createElement(type)
    
    const cssClassArr = cssClass.split(' ')

    cssClassArr.map((classElem) => {
        elem.classList.add(classElem)
    })
    return elem
}

function languagesGenarator(project) {
    let languages = elementGenarator('ul', 'boxes')

    project.languages.map((language) => {
        let li = document.createElement('li')
        li.innerHTML = language
        languages.appendChild(li)
    })

    return languages
}

// first card
function renderCardMain() {
    const project = projects[0]

    let cardDiffDiv = document.createElement('div')
    cardDiffDiv.classList.add('card')
    cardDiffDiv.classList.add('diff')

    let img = document.createElement('img')
    img.src = project.image
    img.alt = project.altImage
    cardDiffDiv.appendChild(img)

    let secondDiv = document.createElement('div')
    let name = document.createElement('h3')
    name.classList.add('project-name')
    name.innerHTML = project.name
    secondDiv.appendChild(name)

    let shortDescription = document.createElement('p')
    shortDescription.classList.add('description')
    shortDescription.innerHTML = project.shortDescription
    secondDiv.appendChild(shortDescription)

    let languages = languagesGenarator(project)

    secondDiv.appendChild(languages)

    cardDiffDiv.appendChild(secondDiv)

    document.getElementById("recent-works").appendChild(cardDiffDiv)
}

// render cards 
function renderCards() {
    let cards = elementGenarator('div', 'cards')

    projects.map((project, index) => {
        if (index > 0) {
            let card = elementGenarator('div', 'card')

            let projectDetails = elementGenarator('div', 'project-details')
            projectDetails.title = project.name
            projectDetails.style.background = `
                linear-gradient(
                    180.45deg,
                    rgba(38, 38, 38, 0) 0.75%,
                    rgb(38 38 38 / 66%) 120%
                ),
                url(${project.image}) center / cover no-repeat
            `

            let projectContent = elementGenarator('div', 'project-content')

            let projectName = elementGenarator('h3', 'project-name')
            projectName.innerHTML = project.name
            projectContent.appendChild(projectName)

            let description = elementGenarator('p', 'description')
            description.innerHTML = project.shortDescription
            projectContent.appendChild(description)

            let languages = languagesGenarator(project)
            projectContent.appendChild(languages)

            projectDetails.appendChild(projectContent)

            let seeProject = elementGenarator('a', 'button see-project large')
            seeProject.innerHTML = 'See Project'

            card.appendChild(projectDetails)
            card.appendChild(seeProject)
            cards.appendChild(card)
        }
    })

    document.getElementById("recent-works").appendChild(cards)
}

renderCardMain()
renderCards()


