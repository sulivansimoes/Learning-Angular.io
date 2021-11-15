import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/service/lista.service';
import { Tarefa } from 'src/app/to/tarefa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: [
    './elementosHTML.css',
    './classes.css',
    './icones.css'
  ]
})
export class ListaComponent implements OnInit {
  
  pesquisa:string = ''
  tarefaVazia:boolean = false
  listaToView:Tarefa[] = []
  listaToModel:Tarefa[]=[]
  tarefa:Tarefa = new Tarefa()

  constructor(private tarefaService:ListaService) { }

  ngOnInit(): void {
    this.loadTarefas()
  }

  ngDestroy(){
    this.zeraArrays()
    this.pesquisa = ''    
  }

  /**
   * @description carrega tarefas que estão salvas na base de dados
   */
  loadTarefas(){
    
    let tarefas = this.tarefaService.getTarefas()
    this.zeraArrays()
    for(let tarefa in tarefas){
  
      this.listaToModel.push( new Tarefa(tarefas[tarefa]._id,
                                  tarefas[tarefa]._descricao,
                                  tarefas[tarefa]._status)) 
    }
    Object.assign(this.listaToView, this.listaToModel)
  }
  
  /**
   * @description Salva e/ou atualiza tarefa na base de dados
   */
  onSalva(){
    
    if(this.tarefaInvalida()){ return }

    if( this.tarefa.id ){
      this.updateTarefa()
    }else{
      this.addTarefa()
    }    
  }

  /**
   * @description adiciona tarefa na base de dados
   */
  addTarefa() {

    this.tarefa.id = new Date().getTime()
    this.listaToModel.push(this.tarefa)
    this.tarefaService.salva( this.listaToModel )
    this.loadTarefas()
    this.tarefa = new Tarefa()
  }

  /**
   * @description remove tarefa da base de dados
   * @param tarefaProcurada tarefa que deve ser removida
   */
  removeTarefa(tarefaProcurada:Tarefa){

    this.listaToModel.splice(this.listaToModel.indexOf(tarefaProcurada),1)
    this.tarefaService.salva(this.listaToModel)
    this.loadTarefas()
  }
  
  /**
   * @description abre tarefa, permitindo que usuário possa edita-la
   * @param tarefaProcurada tarefa que será atualizada/alterada
   */
  openTarefa(tarefaProcurada:Tarefa){
    let tarefa = this.listaToModel.find( t =>( tarefaProcurada.id == t.id ))    
    Object.assign( this.tarefa, tarefa )
  }

  /**
   * @description atualiza tarefa na base de dados
   */
  updateTarefa(){
    
    for( let t of this.listaToModel ){
      if(t.id == this.tarefa.id){
        Object.assign( t, this.tarefa )  
        break
      }
    }    
    this.tarefaService.salva(this.listaToModel)
    this.loadTarefas()
    this.tarefa = new Tarefa()
  }

  /**
   * @description atualiza o status da tarefa, se está feita ou pendente
   * @param tarefaProcurada tarefa que será atualizada/alterada
   */
  updateStatus(tarefaProcurada:Tarefa){

    let tarefa = this.listaToModel.find( t => (t.id == tarefaProcurada.id) )
    this.openTarefa(tarefa!)
    this.updateTarefa()
  }

  /**
   * @description verifica se a tarefa está inválida (vazia).
   * @returns boolean, false caso esteja inválida, true caso contrário
   */
  tarefaInvalida():boolean{

    this.tarefaVazia = this.tarefa.isEmpty 
    if(this.tarefa){
      setInterval( () => ( this.tarefaVazia = false ), 6000)
    }
    return this.tarefaVazia
  }

  /**
   * @description pesquisa tarefa informada pelo usuário
   */
  pesquisaTarefa(){        
    if(this.pesquisa == undefined || this.pesquisa.trim() == ''){

      this.listaToView = this.listaToModel
    }else{
      
      this.listaToView = this.listaToModel.filter(t => ( t.descricao.startsWith(this.pesquisa) ))
    }
  }

  /**
   * @description zera todos os arrays pertencentes a classe
   */
  zeraArrays(){
    this.listaToView = []
    this.listaToModel= []
  }
  
}
