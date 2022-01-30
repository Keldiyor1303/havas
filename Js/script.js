const section = document.querySelector(".maxsulotlar")

function chiqar(maxsulot) {

    section.innerHTML = ""

    allBtn.forEach((btn) => {
        btn.style = "background-color: white; color: #E96023; border: 1px solid #E96023"
    })

    maxsulot.forEach((element) => {
        const div = document.createElement("div")
        div.innerHTML = `
                <div class="img-div">
                    <img src="./Assets/images/olma.jpg" alt="">
                </div>

                <div class="info-div">
                    <h2>${element.nom}</h2>
                    <p>${element.narx} so\`m </p>
                    <button>Savatga qo\`shish</button>
                </div>
            `

        section.appendChild(div)
    })
}

const allBtn = document.querySelectorAll(".buttons button")

const BarchasiBtn = document.querySelector("#Barchasi")
const SabzavotlarBtn = document.querySelector("#Sabzavotlar")
const MevalarBtn = document.querySelector("#Mevalar")
const ParrandaBtn = document.querySelector("#Parranda")
const IchimliklarBtn = document.querySelector("#Ichimliklar")


function Barchasi() {
    chiqar(maxsulotlar)
    BarchasiBtn.style = "background-color: #FADF00; color: white; border: 1px solid transparent;"

}

Barchasi()



function Sabzavotlar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Sabzovot")
    chiqar(maxsulot)
    SabzavotlarBtn.style = "background-color: #FADF00; color: white; border: 1px solid transparent;"
}

function Mevalar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Meva")
    chiqar(maxsulot)
    MevalarBtn.style = "background-color: #FADF00; color: white; border: 1px solid transparent;"
}

function Parranda() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Go`sht va parranda")
    chiqar(maxsulot)
    ParrandaBtn.style = "background-color: #FADF00; color: white; border: 1px solid transparent;"
}

function Ichimliklar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Ichimlik")
    chiqar(maxsulot)
    IchimliklarBtn.style = "background-color: #FADF00; color: white; border: 1px solid transparent;"
}