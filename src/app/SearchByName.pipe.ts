import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Core/InterFace/Product';

@Pipe({
  name: 'SearchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(allProducts: Product[], searchKey: string): Product[] {
    return allProducts.filter((product) =>product.title.toLowerCase().includes(searchKey.toLowerCase()));
  }
}
