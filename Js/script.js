let local = JSON.parse(window.localStorage.getItem("buys"))
let savat = local ? local : []

const section = document.querySelector(".maxsulotlar")

function chiqar(maxsulot) {

    section.innerHTML = ""

    allBtn.forEach((btn) => {
        btn.style = "background-color: white; color: #E96023; border: 2px solid #E96023"
    })

    maxsulot.forEach((element) => {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="img-div">
            <img src= ${element.rasmi}>
            </div>
            
            <div class="info-div">
            <h2>${element.nom}</h2>
            <p>${element.narx} so\`m </p>
            <button data-savat-id="${element.id}" id="savat">Savatga qo\`shish</button>
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
    BarchasiBtn.style = "background-color: #FADF00; color: white; border: 2px solid transparent;"
    savatgaQosh()
}

Barchasi()


function Sabzavotlar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Sabzovot")
    chiqar(maxsulot)
    SabzavotlarBtn.style = "background-color: #FADF00; color: white; border: 2px solid transparent;"
    savatgaQosh()

}

function Mevalar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Meva")
    chiqar(maxsulot)
    MevalarBtn.style = "background-color: #FADF00; color: white; border: 2px solid transparent;"
    savatgaQosh()

}

function Parranda() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Go`sht va parranda")
    chiqar(maxsulot)
    ParrandaBtn.style = "background-color: #FADF00; color: white; border: 2px solid transparent;"
    savatgaQosh()

}

function Ichimliklar() {
    const maxsulot = maxsulotlar.filter((element) => element.tur == "Ichimlik")
    chiqar(maxsulot)
    IchimliklarBtn.style = "background-color: #FADF00; color: white; border: 2px solid transparent;"
    savatgaQosh()

}

// UMUMIY SUMMA
const umumiy = document.querySelector("#umumiy")
let umumiySumma = 0


// SAVATGA QO`SHISH
function savatgaQosh() {
    const savatBtn = document.querySelectorAll("#savat")

    for (let savat of savatBtn) {

        savat.addEventListener("click", function () {
            const { savatId } = savat.dataset

            savatgajonat(savatId)

        })
    }
}


let borYokiYoq = 0

function savatgajonat(savatId) {

    maxsulotlar.forEach((element) => {
        if (element.id == savatId) {
            borYokiYoq = 0

            savat.forEach((element2) => {
                if (element2.id == element.id) {
                    element2.soni = element2.soni + 1;
                    borYokiYoq++
                }
            })

            if (borYokiYoq == 0) {
                savat.push({
                    id: element.id,
                    savatId: savat[savat.length - 1]?.savatId + 1 || 1,
                    soni: 1,
                    tur: element.tur,
                    narx: element.narx,
                    nom: element.nom,
                })
            }

            localStorage.setItem("buys", JSON.stringify(savat))
            savatgachiqar(savat)

        }
    })

}

const chiqarish = document.querySelector(".savat")

function savatgachiqar(savat) {

    chiqarish.innerHTML = ""

    umumiySumma = 0

    savat.forEach((element) => {
        const div = document.createElement("div")

        div.innerHTML = `
            <div class="info-1">
            <p>${element.nom}</p>
            <p>${element.soni}</p>
            </div>

            <div class="info-2">
            <p>Summa: ${element.soni * element.narx} so\`m</p>
            <button data-ochirish-id = ${element.id} id="ochirish" >O\`chirish</button>
    </div>        
        `
        umumiySumma += element.soni * element.narx


        chiqarish.appendChild(div)
        ochirish()

    })
    umumiy.innerHTML = `Umumuy summa: ${"<br>"} ${umumiySumma} so\`m`
}

savatgachiqar(savat)

function ochirish() {
    const ochirishbtns = document.querySelectorAll("#ochirish")

    ochirishbtns.forEach((ochirishbtn) => {

        ochirishbtn.addEventListener("click", function () {
            const { ochirishId } = ochirishbtn.dataset

            savat = savat.filter((element) => element.id != ochirishId)

            localStorage.setItem("buys", JSON.stringify(savat))
            savatgachiqar(savat)


        })

    })
}


const buy = document.querySelector("#buy")

buy.addEventListener("click", function () {
    savat = []
    localStorage.setItem("buys", JSON.stringify(savat))
    savatgachiqar(savat)
})


