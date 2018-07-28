export class Todo {
    texto: string;
    estado: string = 'completed';
    id: number = Math.random();

    constructor(texto: string) {
        this.texto = texto;
    }
}
