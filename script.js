let bottom = 0;
let ovoquebrado = false;


document.querySelector('.ovoimg').addEventListener('click', ()=>{
    
    if(ovoquebrado === true){
        if(recompensaresgatada === false){
            return alert('Clique na carteira e resgate sua recompensa!')
        }
        document.querySelector('.ovoimg').src = "assets/ovo.png";
        console.log('pegou')
        ovoquebrado === false;
    }
    bottom ++;
    document.querySelector('.ovo h3').innerHTML = `<h3>${bottom} : Cliques</h3>`
    if(bottom === 10){
        bottom = 0;
        document.querySelector('.ovoimg').src = "assets/ovoquebrado.png";
        document.querySelector('.ovo h3').innerHTML = 'Quebrou-se resgate sua recompensa!';
        ovoquebrado = true;
        recompensaresgatada = false;
    }
    
});

document.querySelector('.wallet img').addEventListener('click', ()=>{

    if(ovoquebrado === false){
        return alert('Obtenha 50 pontos primeiro!')
    } else if(ovoquebrado === true) {
        document.querySelector('.ovo aside').style.display = 'block';
        
    }


});

document.querySelector('.resgatar').addEventListener('click', ()=>{
    document.querySelector('.textpontos').innerHTML = 'AMO VOCÊ <3'
    document.querySelector('.video').innerHTML = '<iframe width="270" height="175" src="https://www.youtube.com/embed/NxP2cfs9XTk" title="(Valeu amigo) Homenagem a todos os amigos!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
})

