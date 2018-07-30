export class Todo {
    texto: string;
    completado: boolean;
    id: number = Math.random();

    constructor(texto: string) {
        this.texto = texto;
        this.completado = false;
    }
}
