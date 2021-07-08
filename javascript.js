function verificar(){
    var data = new Date()
    var hora = data.getHours();
    var min = data.getMinutes();
    var nome = document.getElementById('cliente')
                //ORIENTAÇÃO//
    
    var estado = document.getElementById('estado').value
    var mob = document.getElementById('mob').value
    var cor = document.getElementById('cor').value
    var hid = document.getElementById('hid').value

    esta.innerHTML = `Cliente ${nome.value} ${estado} ${mob} ${cor} ${hid}`

                //SINAIS VITAIS//
    var tax = document.getElementById('TAX').value
    var dia = window.document.getElementById('DIA').value
    var sis = window.document.getElementById('SIS').value
    var fc  = window.document.getElementById('FC').value
    var fr  = window.document.getElementById('FR').value
    var st  = window.document.getElementById('ST').value
    var res = window.document.querySelector('div#res')
    var paa = ((sis + (dia * 2))/3)
    var pa = Math.floor (paa / 429)
    

    if (tax < 35) {       //TEMPERATURA
        tax = 'Hipotérmico'
      } else if (tax >= 35 && tax < 37.8){
        tax = 'Afebril'
      } else {
         tax = 'Febril'  
      }

    if (fr < 16){      //FREQUENCIA RESPIRATORIA
        fr = 'Bradipneico'
    } else if (fr <= 23){
        fr = 'Eupneico'
    } else {
        fr = 'Taquipneico'
    }
    if (fc < 60){      //FREQUENCIA CARDIACA
        fc = 'Bradicardio'
    } else if (fc <= 104){
        fc = 'Normocardio'
    } else {
        fc = 'Taquicardio'
    }
    if (pa < 80) {    //PRESSAO ARTERIAL
        rpa = "Hipotenso"
    } else if (pa <= 105){
        rpa = "Normotenso"
    } else if (pa > 105){
        rpa = "Hipertenso"
    }
    ssvv.innerHTML = `${fr}, ${rpa}, ${fc}, ${tax}.`

                //ACESSOS E SONDAS//
    var aces = document.getElementsByName('acesso')
    var son = document.getElementsByName('son')    
    var qa = document.getElementById('qualacesso').value
    var qm = document.getElementById('membro').value
    
    if (aces[0].checked && son[0].checked)
    {
        acessos.innerHTML = `Mantendo ${qa} ${qm}, SVD.`
    } else if (aces[0].checked){
        acessos.innerHTML = `Mantendo ${qa} ${qm}.`
    } else if(qa.value == "Acesso venoso Profundo"){
        acessos.innerHTML = `Mantendo ${qa}.`
    } else if (son[0].checked){
        acessos.innerHTML = `Mantendo SVD.`
    } else {
        acessos.innerHTML = ``
    }
    

                //DIETA
    var dieta = document.getElementById('dieta').value
        tdieta.innerHTML =`${dieta}.`
    
                //ELIMINAÇÕES VESICOINTESTINAIS//
    var diurese = document.getElementsByName('DIU')
    var elim = document.getElementsByName('ELI')  
    
    if (diurese[0].checked && elim[0].checked)
    {
        eli.innerHTML = "Eliminações vesicointestinais presentes. Segue aos cuidados da equipe de enfermagem."
    } else if (diurese [0].checked && elim[1].checked)
    {
        eli.innerHTML =`Diurese presente, elininações intestinais ausentes até o momento (${hora}:${min}). Segue aos cuidados da equipe de enfermagem.`
    } else if (elim[0].checked)
    {
        eli.innerHTML =`Diurese ausente, elinimações intestinais presentes. Segue aos cuidados da equipe de enfermagem.`
    } else {
        eli.innerHTML =`Eliminações vesicointestinais ausentes até o momento (${hora}:${min}). Segue aos cuidados da equipe de enfermagem.`
    }



    

}