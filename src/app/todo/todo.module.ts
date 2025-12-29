import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TasksComponent} from './tasks/tasks.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {ListaDeTarefasComponent} from './lista-de-tarefas/lista-de-tarefas.component';



@NgModule({
  declarations: [
    ListComponent,
    TasksComponent,
    ListaDeTarefasComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
  ]
})
export class TodoModule { }
