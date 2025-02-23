'use strict'

export async function fetchContatos() {
    try {
        const response = await fetch("http://localhost/alphacode-api/public/contatos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar contatos:", error);
    }
}

export async function post(contato) {
    try {
        const response = await fetch(`http://localhost/alphacode-api/public/contatos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contato)
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar contatos:", error);
    }
}
export async function atualizar(id, contato) {
    try {
        const response = await fetch(`http://localhost/alphacode-api/public/contatos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contato)
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar contatos:", error);
    }
}
export async function apagar(id) {
    try {
        const response = await fetch(`http://localhost/alphacode-api/public/contatos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Erro ao buscar contatos:", error);
    }
}