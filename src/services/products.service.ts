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

        const product = this.findOne(QueryId)
        let message = ''

        const productFound = this.products.findIndex((product) => product.id === QueryId)
        if (product){

            
            this.products[productFound] = {
                ...product,
                ...payload,
            };
            message = `Product  ${product.name} update`
            
        }
         else {
           message = `Product ${product.name} not found`
       }

       return message;
    }

    delete(){

    }
}
