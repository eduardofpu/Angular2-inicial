import { ContatoService } from './contato.service';
import { ContatoBuscaComponent } from './contato-busca.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatosListaComponent } from './contatos-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
    imports:[
           CommonModule,
           ContatoRoutingModule,
           FormsModule
           
    ],
    declarations:[
         ContatoBuscaComponent,
         ContatoDetalheComponent,
         ContatosListaComponent
    ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers:[
        ContatoService
    ]
})
export class ContatosModule {}