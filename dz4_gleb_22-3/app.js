const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'people.json')
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const names = document.createElement('div')
            const ages = document.createElement('div')
            names.innerHTML = 'name: ' + people.name
            ages.innerHTML = 'age: ' + people.age
            document.querySelector('.block').append(names, ages)

        });
    })
})

