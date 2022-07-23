function codeInit() {
    clean()
    const input = document.querySelector('.input')
    const contenedor = document.querySelector('.container')
    function rNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    /* Crea elementos p y guarda las palabras en cada uno */
    function generateP() {
        let documentFrag = document.createDocumentFragment()
        for (var i = 0; i < eListEnd; i++) {
            let textP = document.createElement('P')
            textP.setAttribute('id', `text${i}`)
            textP.setAttribute('class', 'text')
            textP.innerHTML = eList[i]
            documentFrag.appendChild(textP)
            contenedor.appendChild(textP)
        }
    }
    /* Compara la tecla presionada con el texto */
    function keyboard(string) {
        var contador = 0
        var i = 0
    
        input.addEventListener('keypress', (e)=> {
            let currentKey = e.key
    
            if (currentKey == string[i]) {
                i++
                contador++
            } else {
                i++
            }
            if (i ==tEnd) {
                let generator = `<p id='alert' class='text stop'></p> <p id='score' class='text score'></p> <p id='time' class='text time'></p>`
                contenedor.innerHTML = generator

                function end() {
                    document.getElementById('textarea').remove()
                    let string = ""
                    document.getElementById('alert').textContent = string = '¡La prueba ha acabado!'
                    document.getElementById('score').textContent = string = `Precisión: [${((contador*100)/tEnd).toFixed(2)}%] Letras: [${contador}/${tEnd}]`
                    document.getElementById('time').textContent = string = `Has tardado: ${seg}s en completar la prueba.`
                }
                end()
            }
        })
    }
    /* Array con palabras, array vacio y cadena vacia */
    var eList = []
    var elements = ['el','elefante','camina','por','la','sabana','en','busca','de','alimento','la','pantera','caza','a','su','presa','con','sus','garras','comer','pescado','carne',
                                'miel','hierbas','medicina','comida','huevos','casa','hogar','propiedad','consultorio','edificio','en','un','cocina','hombre','mujer','niño','castigo',
                                'llanto','azúcar','café','agua','bebida','pescado','pez','pollo','bistec','ballena','belleza','construir','parada','abono','asfalto','cemento','tierra','madera']
    var string = ""
    /* Selecciona elementos para crear la oración, cambiar el 5 aumenta las palabras */
    for (var i = 0; i < rNum(1, 5); i++) {
        var random = rNum(0, elements.length-1)
        eList.push(elements[random])
    }
    /* Cambia la ',' por un espacio y calcula la longitud*/
    string = eList.join(' ')
    var tEnd =  string.length
    var eListEnd = eList.length
    generateP()
    keyboard(string)
    /* Contador */
    var seg = 0
    var min = 0
    input.addEventListener('click', (e)=> {
        const interval = setInterval(()=> {
            seg ++
            if (seg == 60) {
                min++
                seg = 0
            }
            if (min == 1) {
                let fail = `<p id="fail" class="text"></p>`
                    contenedor.innerHTML = fail
                document.getElementById('fail').textContent =  '¡Has fallado la prueba!'
            }
            return seg, min
        }, 1000)
        setTimeout(()=> {
            clearInterval(interval)
        }, 60000)
    })
}
codeInit()
function clean() {
    const container = document.querySelector('.container')
    container.innerHTML = ''
    const containerText = document.getElementById('container')
    let text = `<textarea id="textarea" class="input" autofocus></textarea>`
    containerText.innerHTML = text
}

function timeOut() {
    const contenedor = document.querySelector('.container')
    const contenedor2 = document.getElementById('container')
    let fail = `<p id="fail" class="text"></p>`
        contenedor.innerHTML = fail
    document.getElementById('fail').textContent =  '¡Has fallado la prueba!'
    contenedor2.remove()
}
