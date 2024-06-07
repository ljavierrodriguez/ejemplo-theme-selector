const images = [
    {id: 1, url: "https://picsum.photos/id/666/900/400"},
    {id: 2, url: "https://picsum.photos/id/978/900/400"},
    {id: 3, url: "https://picsum.photos/id/234/900/400"},
    {id: 4, url: "https://picsum.photos/id/459/900/400"},
    {id: 5, url: "https://picsum.photos/id/390/900/400"},
]

const colors = generateColors(34)

const carouselInner = document.querySelector('.carousel-inner')
const offcanvasBody = document.querySelector('.offcanvas-body')

loadColorsCanvas(offcanvasBody, colors)
loadImages(carouselInner, images)


function loadImages(contenedor, images = []){

        images.forEach((source, index) => {
            const divCarouselItem = document.createElement('div')
            const divCarouselImage = document.createElement('img')

            if(index === 0){
                divCarouselItem.classList.add('carousel-item', 'active')
            }else{
                divCarouselItem.classList.add('carousel-item')
            }

            divCarouselImage.classList.add('d-block', 'w-100')
            divCarouselImage.src = source.url

            divCarouselItem.appendChild(divCarouselImage)
            contenedor.appendChild(divCarouselItem)

        });
}

function generateColors(size){
    const colors = []
    const hex = "0123456789ABCDEF"; 

    for(let i = 1; i <= size; i++){
        let color = "#";
        for(let j=1; j<=6; j++){
            let pos = Math.floor(Math.random() * hex.length)
            color += hex[pos]
        }   
        colors.push(color)
    }
    

    return colors
}

function loadColorsCanvas(contenedor, colores = []){
    colores.forEach((color) => {
        //console.log(color)
        const divColor = document.createElement('div')
        divColor.classList.add('color', 'rounded-circle', 'mx-1')
        divColor.style.backgroundColor = color
        divColor.style.cursor = 'pointer'

        divColor.addEventListener('click', () => {
            document.body.style.backgroundColor = color
        })

        contenedor.appendChild(divColor)
    })
}