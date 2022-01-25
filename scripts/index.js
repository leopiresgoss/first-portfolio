const projects = [
    {
       name: 'Multi-Post Stories',
       shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
       image: "images/cards/multi_post_project_image_desktop.png",
       altImage: 'Woman practicing Yoga',
       languages: ['css', 'html', 'bootstrap', 'Ruby']
    }
]

// first card
function renderCardMain () {
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

    let languages = document.createElement('ul')
    languages.classList.add("boxes")
    
    project.languages.map((language) => {
        let li = document.createElement('li')
        li.innerHTML = language
        languages.appendChild(li)
    })
    secondDiv.appendChild(languages)

    
    cardDiffDiv.appendChild(secondDiv)


    document.getElementById("recent-works").appendChild(cardDiffDiv)
}


renderCardMain()


