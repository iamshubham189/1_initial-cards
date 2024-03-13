const panels = document.querySelectorAll('.panel')
// []
// add(1,2)
// function add(){}
// () => {}

console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}