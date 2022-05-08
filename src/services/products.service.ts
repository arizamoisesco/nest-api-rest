import { Injectable } from '@nestjs/common';
import {Product} from './../entities/product.entity'


@Injectable()
export class ProductsService {

    private counterId = 1;

    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        description: 'bla bla',
        price: 122,
        image: '',
        stock: 12,
    }];

    findAll(){
        return this.products;
    }

    findOne(id: number){
        return this.products.find((item) => item.id === id); 
    }

    create(payload: any){

        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        }
        this.products.push(newProduct);
        return newProduct
    }

    update(QueryId: number, payload: any){

        const updateProduct = {
            id: QueryId,
            ...payload,
        }

        const productFound = this.products.findIndex((product) => product.id === QueryId)

        let message = ''

       if(productFound > 0){
           this.products[productFound] = updateProduct;
           message = 'Product update'
       } else {
           message = 'Product not found'
       }

       return message;
    }

    delete(){

    }
}
