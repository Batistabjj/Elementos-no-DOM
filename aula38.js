const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "./icone_lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode)

    })

    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)


})















































//console.log(caixa1.hasChildNodes())  //relaçao dos elementos dentro do DOM
//console.log(btn_c[0].hasChildNodes())
//console.log(btn_c[0].ChildNodes)
//console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "nao possui filhos")
//console.log(caixa1.children[1].innerHTML="TESTE")
//console.log(caixa1.firstElementChild)
//console.log(caixa1.lastElementChild)
//console.log(caixa1.children)

