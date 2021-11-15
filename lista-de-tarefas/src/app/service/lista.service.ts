import { Injectable } from '@angular/core';
import { Tarefa } from '../to/tarefa';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  readonly KEY_LOCAL_STORAGE = 'mytask'

  constructor() { }

  /**
   * @description salva tarefa no localstorage
   * @param tarefa tarefa a ser salva
   */
  public salva(tarefa:Tarefa[]){
    window.localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(tarefa))
  }

  /**
   * @description obtém tarefas que estão salvas na base de dados
   * @returns objeto json conténdo tarefas salvas
   */
  public getTarefas() {
    let storage = window.localStorage.getItem(this.KEY_LOCAL_STORAGE) 
    return storage ? JSON.parse(storage!) : [] 
  }
}
