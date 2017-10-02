import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{


    createDb(): {} {

        let contatos: Contato[] = [
                    {id: 1, nome: 'Fulano de tal', email: 'fulano@email.com', telefone: "(00)0000-0000"},            
                    {id: 2, nome: 'ciclano', email: 'ciclano@email.com', telefone: "(00)0000-0000"},
                    
                ];
        return {contatos};
    }
}