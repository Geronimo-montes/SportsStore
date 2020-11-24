import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'store',
    templateUrl: 'store.component.html',
})

export class StoreComponent {
    public SelectedCategory = 'Category 1';
    public productsPerPage = 4;
    public SelectedPage = 1;

    constructor (private repository: ProductRepository, private cart: Cart, private router: Router) { 
        this.changeCategory();                
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
    
    get products(): Product[] {
        let pageIndex = (this.SelectedPage - 1 ) * this.productsPerPage;
        return this.repository.getProducts(this.SelectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    
    get categories(): string[] {
        return this.repository.getCategories();
    }

    getProductById(id: number): Product {
        return this.repository.getProduct(id);
    }

    changeCategory(newCategory?: string): void{
        this.SelectedCategory = newCategory;
    }

    changePage(newPage: number): void{
        this.SelectedPage = newPage;
    }

    changePageSize(newSize: number): void {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.SelectedCategory).length / this.productsPerPage);
    }
}