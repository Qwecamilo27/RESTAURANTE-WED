document.addEventListener("DOMContentLoaded",e =>{
     numeroMayor()
})

const numeroMayor = () =>{
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const n3 = document.getElementById("n3")

    const submit = document.getElementById("submit")

    let nu1
    let nu2
    let nu3

    submit.addEventListener("click", e =>{
        e.preventDefault()

        nu1 = Number(n1.value)
        nu2 = Number(n2.value)
        nu3 = Number(n3.value)

        if(nu1 == ''|| nu2 == '' || nu3 == '')return alert("llene los campos")
        if(nu1 == nu2 && nu2 == nu3 && nu1 == nu3)return alert("son iguales ")
        
        if(nu1 > nu2 && nu1 > nu3){
            tarjeta(nu1)
        }
        if(nu2 > nu1 && nu2 > nu3){
            tarjeta(nu2)
        }
        if(nu3 > nu2 && nu3 > nu1){
            tarjeta (nu3)
        }

    })
}
const tarjeta = (numero) => {
    const tarjeta = document.createElement("p")
    tarjeta.textContent = numero
    tarjeta.classList.add("tarjeta")
    document.body.appendChild(tarjeta)

    setTimeout(() => {
       document.body.removeChild(tarjeta) 
    }, 3000);
}