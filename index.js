const btn = document.querySelector(".note__add")

const cont = document.querySelector(".container")

const right = document.querySelector(".right")

var check = false

btn.addEventListener("click",()=>{
    if (check == false){
        check = true
        const all = document.createElement("div")
        const note = document.createElement("textarea")
        const ready = document.createElement("img")
        const input = document.createElement("input")
        const div = document.createElement("div")
        input.style.width = "100%"
        input.style.outline = "none"
        ready.style.width = "20px"
        ready.style.height = "20px"
        ready.src = "https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/1024px-Arbcom_ru_ready.svg.png"
        all.style.width = "300%"
        all.style.height = "300%"
        all.style.background = "#312E2E"
        all.style.display = "flex"
        all.style.transition = "1s all"
        note.style.height = "100%"
        note.style.width = "100%"
        note.style.zIndex = "100"
        note.style.overflow = "hidden"
        note.style.outline = "none"
        note.style.resize = "none"
        note.style.background = "#4E4D4D"
        note.style.color = "white"
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.width = "100%"
        div.style.height = "100%"
        div.append(input)
        div.append(note)
        all.append(ready)
        all.append(div)
        right.append(all)
        ready.addEventListener("click",()=>{
            check = false
            all.style.width = "100%"
            all.style.height = "100%"
            ready.style.display = "none"
        })
        note.addEventListener("focus",()=>{
            all.style.width = "300%"
            all.style.height = "300%"
            all.style.zIndex = 1000
            ready.style.display = "inline-block"
        })
        note.addEventListener("focusout",()=>{
            check = false
            all.style.width = "100%"
            all.style.height = "100%"
            ready.style.display = "none"
        })
    }
   
})

