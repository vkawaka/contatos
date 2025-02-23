'use strict'
import { post } from "./contatos.js";

document.getElementById('cadastrar').addEventListener('click', async()=>{
    let contato = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        data_nasc: document.getElementById('data').value,
        profissao: document.getElementById('profissao').value,
        celular: document.getElementById('cll').value
    }

    console.log(contato);

    let enviar = await post(contato)
    console.log(enviar)
    
    if (enviar) {
        Swal.fire({
            title: "Contato cadastrado com sucesso!",
            icon: "success",
            confirmButtonText: "Okay",
        }).then(() => {
                window.location.href="./index.html"
        });
    }    
})