import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(tableData: any[], searchText: string): any[] {
    if (!tableData) return [];
    if (!searchText) return tableData;
    searchText = searchText.toLowerCase();
    return tableData.filter(details => {
      let values = [];
      for (let i = Object.values(details).length-1; i >= 0; i--) {
        const element = Object.values(details)[i];
          values.push(element)
      }
      return JSON.stringify(values).toLowerCase().includes(searchText);
    });
  }
}
