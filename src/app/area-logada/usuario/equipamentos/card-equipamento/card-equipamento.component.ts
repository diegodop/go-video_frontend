import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-equipamento',
  templateUrl: './card-equipamento.component.html',
  styleUrls: ['./card-equipamento.component.css']
})
export class CardEquipamentoComponent {
  @Input() equipamento: any
}
