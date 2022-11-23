import { ModalService } from './../../services/modal.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.productsService.create({
      title: this.title.value as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
