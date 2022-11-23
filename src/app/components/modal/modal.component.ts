import { ModalService } from './../../services/modal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  @Input() title: string;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
