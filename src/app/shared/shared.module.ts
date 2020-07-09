import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutesToTimePipe } from './minutes-to-time.pipe';


@NgModule({
  declarations: [
    MinutesToTimePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
