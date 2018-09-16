import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array, orderBy): any {
    if (!orderBy || orderBy.trim() === '') {
      return array;
    }

    return Array.from(array).sort((item1: any, item2: any) =>
      this.orderByComparator(this.getSubvalues(item1, orderBy), this.getSubvalues(item2, orderBy)));
  }

  getSubvalues(item, orderBy: string): any {
    return orderBy.split('.').reduce((res, prop) => res[prop], item);
  }

  orderByComparator(a: any, b: any): number {
    const isNotNumber = (isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b));
    if (isNotNumber) {
      if (a.toLowerCase() < b.toLowerCase()) { return -1; }
      if (a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
      if (parseFloat(a) < parseFloat(b)) { return -1; }
      if (parseFloat(a) > parseFloat(b)) { return 1; }
    }

    return 0;
  }

}
