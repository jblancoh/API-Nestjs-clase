import { Injectable } from '@nestjs/common';
import { Products } from "./interfaces/Products";

@Injectable()
export class ProductsService {
    // Para simular nuestra base de datos local

    products: Products[] = [
        {
            id: 1,
            name: 'testing',
            description: 'description text',
            price: 100,
            active: true,
        },
        {
            id: 2,
            name: 'testing',
            description: 'description text',
            price: 100,
            active: true,
        }
        , {
            id: 3,
            name: 'testing',
            description: 'description text',
            price: 100,
            active: true,
        }
    ]

    getProducts(): Products[] {
        return this.products
    }

    getProduct(id: number): Products {
        return this.products.find(product => product.id === id)
    }
}
