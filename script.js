 const jsonDados = [{
     "title": "Work",
     "timeframes": {
         "daily": {
             "current": 5,
             "previous": 7
         },
         "weekly": {
             "current": 32,
             "previous": 36
         },
         "monthly": {
             "current": 103,
             "previous": 128
         }
     }
 }, {
     "title": "Play",
     "timeframes": {
         "daily": {
             "current": 1,
             "previous": 2
         },
         "weekly": {
             "current": 10,
             "previous": 8
         },
         "monthly": {
             "current": 23,
             "previous": 29
         }
     }
 }, {
     "title": "Study",
     "timeframes": {
         "daily": {
             "current": 0,
             "previous": 1
         },
         "weekly": {
             "current": 4,
             "previous": 7
         },
         "monthly": {
             "current": 13,
             "previous": 19
         }
     }
 }, {
     "title": "Exercise",
     "timeframes": {
         "daily": {
             "current": 1,
             "previous": 1
         },
         "weekly": {
             "current": 4,
             "previous": 5
         },
         "monthly": {
             "current": 11,
             "previous": 18
         }
     }
 }, {
     "title": "Social",
     "timeframes": {
         "daily": {
             "current": 1,
             "previous": 3
         },
         "weekly": {
             "current": 5,
             "previous": 10
         },
         "monthly": {
             "current": 21,
             "previous": 23
         }
     }
 }, {
     "title": "Self Care",
     "timeframes": {
         "daily": {
             "current": 0,
             "previous": 1
         },
         "weekly": {
             "current": 2,
             "previous": 2
         },
         "monthly": {
             "current": 7,
             "previous": 11
         }
     }
 }]
 
 const data = JSON.parse(JSON.stringify(jsonDados))
 const dados = {
    work:data[0].timeframes,
    play:data[1].timeframes,
    study:data[2].timeframes,
    exercise:data[3].timeframes,
    social:data[4].timeframes,
    selfCare:data[5].timeframes
}

 let horas = document.getElementById("work-horas");
 let anterior = document.getElementById("card-previus")
 let horasPlay = document.getElementById("play-horas")
 let anteriorPlay = document.getElementById("play-previus")
 let horasStudy = document.getElementById("study-horas")
 let anteriorStudy = document.getElementById("study-previus")
 let horasexercise = document.getElementById("exercise-horas")
 let anteriorExercise = document.getElementById("exercise-previus")
 let horasSocial = document.getElementById("social-horas")
 let anteriorSocial = document.getElementById("social-previus")
 let horasSelf = document.getElementById("self-horas")
 let anteriorSelf = document.getElementById("self-previus")
 let daily = document.getElementById("daily")
 let weekly = document.getElementById("weekly")
 let monthly = document.getElementById("monthly")

 const alteraDados = (dados, type) =>{
     console.log(dados)
     horas.innerText = `${dados.work[type].current} hrs`
     anterior.innerText = `Last Week - ${dados.work[type].previous} hrs`

     horasPlay.innerText = `${dados.play[type].current} hrs`
     anteriorPlay.innerText = `Last Week - ${dados.play[type].previous}`

     horasStudy.innerText = `${dados.study[type].current} hrs`
     anteriorStudy.innerText = `Last Week - ${dados.study[type].previous} hrs`

     horasexercise.innerText = `${dados.exercise[type].current} hrs`
     anteriorExercise.innerText = `Last Week - ${dados.exercise[type].previous} hrs`

     horasSocial.innerText = `${dados.social[type].current} hrs`
     anteriorSocial.innerText = `Last Week - ${dados.social[type].current} hrs`

     horasSelf.innerText = `${dados.selfCare[type].current} hrs`
     anteriorSelf.innerText = `Last Week - ${dados.selfCare[type].previous} hrs`
 }

 daily.addEventListener("click",()=> alteraDados(dados, 'daily'))
 weekly.addEventListener("click",()=> alteraDados(dados, 'weekly'))
 monthly.addEventListener("click",()=> alteraDados(dados, 'monthly'))