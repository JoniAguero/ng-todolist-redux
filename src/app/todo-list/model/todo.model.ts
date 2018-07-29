export class Todo {
    texto: string;
    estado: string;
    id: number = Math.random();

    constructor(texto: string, estado: string = 'completed') {
        this.texto = texto;
        this.estado = estado;
    }
}
