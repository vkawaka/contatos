'use strict'
let table = document.getElementById('table')

import { fetchContatos, apagar, atualizar } from "./contatos.js"

async function preencher() {
    let contatos = await fetchContatos()
    contatos.forEach(contato => {        
        let th = document.createElement('tr')
        let nome = document.createElement('th')
        nome.textContent = contato.nome
        nome.scope = 'row'
        let data_nasc = document.createElement('td')
        data_nasc.textContent = contato.data_nasc
        let email = document.createElement('td')
        email.textContent = contato.email
        let celular = document.createElement('td')
        celular.textContent = contato.celular
        let div = document.createElement('div')
        let up = document.createElement('img')
        up.src = '/assets/editar.png'
        up.id = 'update'
        let del = document.createElement('img')
        del.src = '/assets/excluir.png'
        del.id = 'delete'
        let td = document.createElement('td')
        div.append(up, del)
        td.append(div)        
        th.append(nome, data_nasc, email, celular, td)
        table.appendChild(th)

        up.addEventListener('click', () => {
            antigo(contato)
            document.getElementById('atualizar').addEventListener('click', async()=>{
                let atu = {
                    nome: document.getElementById('nome').value,
                    email: document.getElementById('email').value,
                    telefone: document.getElementById('telefone').value,
                    data_nasc: document.getElementById('data').value,
                    profissao: document.getElementById('profissao').value,
                    celular: document.getElementById('cll').value
                    }
                    let att = atualizar(contato.id, atu)
                    if (att) {
                        Swal.fire({
                            title: "Contato atualizado com sucesso!",
                            icon: "success",
                            confirmButtonText: "Okay",
                        }).then(() => {
                                window.location.href="./index.html"
                        });
                    }
            })
        })
        del.addEventListener('click', () => {
           let del = apagar(contato.id)
           if (del) {
            Swal.fire({
                title: "Contato apagado com sucesso!",
                icon: "success",
                confirmButtonText: "Okay",
            }).then(() => {
                    window.location.href="./index.html"
            })
           }
        })
    })
}
async function antigo(contato) {
    console.log(contato);
    
    document.getElementById('att').classList.remove('d-none')
    document.getElementById('nome').value = contato.nome
    document.getElementById('email').value = contato.email
    document.getElementById('telefone').value = contato.telefone
    document.getElementById('data').value = contato.data_nasc
    document.getElementById('profissao').value = contato.profissao
    document.getElementById('cll').value = contato.celular
}

window.onload = preencher;