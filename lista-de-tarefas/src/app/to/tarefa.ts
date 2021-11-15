/**
 * @description : Classe de Objeto de tranferecia ( TO ) da tarefa 
 */
export class Tarefa{
    
    private _id:number;
    private _descricao:String;
    private _status:boolean;

    /**  
     * @constructor
     * @param {number} id - Código identificador da tarefa ( chave primária )
     * @param {String} descricao - descrição da da descricao da tarefa
     * @param {boolean} status - status se tarefa foi concluida ou não. Default é false
     */
    constructor(id?:number, descricao?:String, status?:boolean ){
        this._id = id!;
        this._descricao = descricao!;
        this._status = status || false;
    }

    /**
     * @description: Retorna código do id da tarefa
     * @return {number} ( id ) - identificador da tarefa
     */
    get id (): number { return this._id }

    /**
     * @description: Inclui/Altera código de id da tarefa
     * @param {number} ( id ) - identificador da tarefa
     */
    set id (id:number) { 
        this._id = id < 1 ? 1 : id+1;
    }

    /**
     * @description: Retorna descrição da tarefa
     * @return {String} ( descricao ) - descrição da descricao 
     */
    get descricao (): String { return this._descricao }

    /**
     * @description: altera descrição da tarefa
     * @param {String} ( descricao ) - descrição da descricao a ser executada
     */
    set descricao (descricao:String) { 
        this._descricao = descricao.trim();
    }

    /**
     * @description: Retorna status da tarefa
     * @return {boolean} ( status ) - status indicando se a tarefa já foi feita/concluida ou não
     */
    get isConcluida ():boolean{ return this._status }

    /**
     * @description: Retorna status da tarefa
     * @return {boolean} ( status ) - status indicando se a tarefa já foi feita/concluida ou não
     */
    get status():boolean{
        return this.isConcluida
    }

    /**
     * @description: altera status da da tarefa
     * @param {boolean} ( status ) - status indicando se a tarefa já foi feita/concluida ou não. 
     * true caso esteja conscluida, false caso contrário.
     */
    set status (status:boolean) { 
        this._status = status;
    }

    /**
     * @description retora true se tarefa  estiver vazia, false caso contrário
     */
    get isEmpty():boolean{
        return this.descricao == null || this.descricao.trim() == ''
    }

}