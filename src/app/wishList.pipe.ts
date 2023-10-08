import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishList',
})
export class WishListPipe implements PipeTransform {
  transform(WishlistIds: string[], wishId: string): any {
    WishlistIds.filter((wishlisid)=>wishlisid==wishId)
    return true;
  }
}
