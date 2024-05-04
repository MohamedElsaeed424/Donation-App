import { Pipe, PipeTransform } from '@angular/core';
import { MedicalCase } from './medical-case.model';

@Pipe({
  name: 'medicalCaseFilter'
})
export class MedicalCaseFilterPipe implements PipeTransform {
  transform(medicalCases: MedicalCase[], medicalSpecialty: string, organizationName: string, area: string, governorate: string): MedicalCase[] {
    if (!medicalCases) {
      return [];
    }

    const medicalSpecialtyFilter = medicalSpecialty ? medicalSpecialty.toLowerCase() : '';
    const organizationNameFilter = organizationName ? organizationName.toLowerCase() : '';
    const areaFilter = area ? area.toLowerCase() : '';
    const governorateFilter = governorate ? governorate.toLowerCase() : '';

    return medicalCases.filter(medicalCase => {
      return (
        (!medicalSpecialtyFilter || medicalCase.medicalSpecialty.toLowerCase().includes(medicalSpecialtyFilter)) &&
        (!organizationNameFilter || medicalCase.organizationName.toLowerCase().includes(organizationNameFilter)) &&
        (!areaFilter || medicalCase.area.toLowerCase().includes(areaFilter)) &&
        (!governorateFilter || medicalCase.governorate.toLowerCase().includes(governorateFilter))
      );
    });
  }
}
