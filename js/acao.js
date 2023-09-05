var containerContatos = document.getElementById("containerContatos");
var containerImagensDeProjetos = document.getElementById("containerImagensDeProjetos");

function sobreMim(){
    document.getElementById("conteudoASerInserido").innerHTML = "Graduanda de Tecnologia em Banco de Dados, com uma leve passagem no curso de Sistemas de Informação. Possuo experiência na área de atendimento ao público, o que agregou na minha carreira com soft e hard skills. Atualmente, busco me aperfeiçoar na área de Desenvolvimento e Banco de Dados.";
    containerContatos.style.display = 'none';
    containerImagensDeProjetos.style.display = 'none';
}

function projetos(){
    document.getElementById("conteudoASerInserido").innerHTML = "No momento atual possuo estes três projetos mais relevantes:";
    containerContatos.style.display = 'none';

    if( containerImagensDeProjetos.style.display === 'block'){
        containerImagensDeProjetos.style.display = 'none';
    }else{
        containerImagensDeProjetos.style.display = 'block';

    }
}

function formacao(){
    document.getElementById("conteudoASerInserido").innerHTML = "Atualmente sou graduanda em Tecnologia em Banco de Dados pela Uninter, mas já passei pela graduação de Sistemas de Informação pela Universidade Federal de Viçosa, o qual tranquei. <br> <br>Conhecimento em inglês: básico. <br> <br>Certificados:<br> <br>Atendimento ao cliente - Como ter uma comunicação Assertiva - Sicoob<br>Comunicação de Alta Performace - GrupoSeixas<br>Segurança da informação - Sicoob"
    containerContatos.style.display = 'none';
    containerImagensDeProjetos.style.display = 'none';
}


function contatos(){
    containerImagensDeProjetos.style.display = 'none';

    document.getElementById("conteudoASerInserido").innerHTML = " ";
    if( containerContatos.style.display === 'block'){
        containerContatos.style.display = 'none';
    }else{
        containerContatos.style.display = 'block';

    }
}

