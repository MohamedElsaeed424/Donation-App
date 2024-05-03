import { Pipe, PipeTransform } from '@angular/core';
import { RequestedItem } from "../../super/RequestedItem.model";
import {MedicalSupply} from "../../categories/medical-supplies.model";


@Pipe({
  name: 'medicalSupplyFilter',
  pure :false
})
export class MedicalSupplyFilterPipe implements PipeTransform {
  transform(items: RequestedItem[], type: string, medicalUse: string): RequestedItem[] {
    if (!items) {
      return [];
    }
    const typeFilter = type ? type.toLowerCase() : '';
    const medicalUseFilter = medicalUse ? medicalUse.toLowerCase() : '';

    return items.filter(item => {
      if (item instanceof MedicalSupply) {
        const medicalSupply = item as MedicalSupply;
        return (
          (!typeFilter || medicalSupply.type.toLowerCase().includes(typeFilter)) &&
          (!medicalUseFilter || medicalSupply.medicalUse.toLowerCase().includes(medicalUseFilter))
        );
      }else{
        return false;
      }
    });
  }
}
