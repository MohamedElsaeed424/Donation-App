import {OrganizationRepresentitve} from "../OrganizationRepresentitve";
import {Organization} from "../Organization.model";
import {OrganizationService} from "../registered-organization/RegisteredOrganization.service"
import {Injectable} from "@angular/core";
@Injectable()
export class OrganizationPendingRequestService {
  private organizations: Organization[] = [
    new Organization(
      'Organization 6',
      'Type 6',
      '223 Maple St',
      'Area 6',
      'Government 6',
      new OrganizationRepresentitve(
        'Sarah',
        'Wilson',
        'Female',
        'sarah@example.com',
        'password123',
        111111111
      )
    ),
    new Organization(
      'Organization 7',
      'Type 7',
      '334 Birch St',
      'Area 7',
      'Government 7',
      new OrganizationRepresentitve(
        'Thomas',
        'Anderson',
        'Male',
        'thomas@example.com',
        'password456',
        222222222
      )
    ),
    new Organization(
      'Organization 8',
      'Type 8',
      '445 Oak St',
      'Area 8',
      'Government 8',
      new OrganizationRepresentitve(
        'Jessica',
        'Wilson',
        'Female',
        'jessica@example.com',
        'password789',
        333333333
      )
    ),
    new Organization(
      'Organization 9',
      'Type 9',
      '556 Pine St',
      'Area 9',
      'Government 9',
      new OrganizationRepresentitve(
        'Matthew',
        'Robinson',
        'Male',
        'matthew@example.com',
        'passwordabc',
        444444444
      )
    ),
    new Organization(
      'Organization 10',
      'Type 10',
      '667 Elm St',
      'Area 10',
      'Government 10',
      new OrganizationRepresentitve(
        'Olivia',
        'Johnson',
        'Female',
        'olivia@example.com',
        'passwordxyz',
        555555555
      )
    ),
    new Organization(
      'Organization 11',
      'Type 11',
      '778 Cedar St',
      'Area 11',
      'Government 11',
      new OrganizationRepresentitve(
        'William',
        'Martinez',
        'Male',
        'william@example.com',
        'password123',
        666666666
      )
    ),
    new Organization(
      'Organization 12',
      'Type 12',
      '889 Maple St',
      'Area 12',
      'Government 12',
      new OrganizationRepresentitve(
        'Sophia',
        'Garcia',
        'Female',
        'sophia@example.com',
        'password456',
        777777777
      )
    ),
    new Organization(
      'Organization 13',
      'Type 13',
      '990 Birch St',
      'Area 13',
      'Government 13',
      new OrganizationRepresentitve(
        'James',
        'Taylor',
        'Male',
        'james@example.com',
        'password789',
        888888888
      )
    ),
    new Organization(
      'Organization 14',
      'Type 14',
      '1101 Oak St',
      'Area 14',
      'Government 14',
      new OrganizationRepresentitve(
        'Mia',
        'Hernandez',
        'Female',
        'mia@example.com',
        'passwordabc',
        999999999
      )
    ),
    new Organization(
      'Organization 15',
      'Type 15',
      '1212 Pine St',
      'Area 15',
      'Government 15',
      new OrganizationRepresentitve(
        'Benjamin',
        'Lopez',
        'Male',
        'benjamin@example.com',
        'passwordxyz',
        1234567890
      )
    ),
    new Organization(
      'Organization 16',
      'Type 16',
      '1323 Elm St',
      'Area 16',
      'Government 16',
      new OrganizationRepresentitve(
        'Ava',
        'Gonzalez',
        'Female',
        'ava@example.com',
        'password123',
        2345678901
      )
    ),
    new Organization(
      'Organization 17',
      'Type 17',
      '1434 Cedar St',
      'Area 17',
      'Government 17',
      new OrganizationRepresentitve(
        'Daniel',
        'Rodriguez',
        'Male',
        'daniel@example.com',
        'password456',
        3456789012
      )
    ),
    new Organization(
      'Organization 18',
      'Type 18',
      '1545 Maple St',
      'Area 18',
      'Government 18',
      new OrganizationRepresentitve(
        'Sofia',
        'Perez',
        'Female',
        'sofia@example.com',
        'password789',
        4567890123
      )
    ),
    new Organization(
      'Organization 19',
      'Type 19',
      '1656 Birch St',
      'Area 19',
      'Government 19',
      new OrganizationRepresentitve(
        'Joseph',
        'Sanchez',
        'Male',
        'joseph@example.com',
        'passwordabc',
        5678901234
      )
    ),
    new Organization(
      'Organization 20',
      'Type 20',
      '1767 Oak St',
      'Area 20',
      'Government 20',
      new OrganizationRepresentitve(
        'Charlotte',
        'Rivera',
        'Female',
        'charlotte@example.com',
        'passwordxyz',
        6789012345
      )
    ),
    new Organization(
      'Organization 21',
      'Type 21',
      '1878 Pine St',
      'Area 21',
      'Government 21',
      new OrganizationRepresentitve(
        'Ethan',
        'Mitchell',
        'Male',
        'ethan@example.com',
        'password123',
        7890123456
      )
    ),
    new Organization(
      'Organization 22',
      'Type 22',
      '1989 Elm St',
      'Area 22',
      'Government 22',
      new OrganizationRepresentitve(
        'Amelia',
        'Cruz',
        'Female',
        'amelia@example.com',
        'password456',
        8901234567
      )
    ),
    new Organization(
      'Organization 23',
      'Type 23',
      '2000 Cedar St',
      'Area 23',
      'Government 23',
      new OrganizationRepresentitve(
        'Mason',
        'Edwards',
        'Male',
        'mason@example.com',
        'password789',
        9012345678
      )
    ),
    new Organization(
      'Organization 24',
      'Type 24',
      '2111 Maple St',
      'Area 24',
      'Government 24',
      new OrganizationRepresentitve(
        'Harper',
        'Reed',
        'Female',
        'harper@example.com',
        'passwordabc',
        1234567809
      )
    ),
    new Organization(
      'Organization 25',
      'Type 25',
      '2222 Birch St',
      'Area 25',
      'Government 25',
      new OrganizationRepresentitve(
        'Alexander',
        'Cook',
        'Male',
        'alexander@example.com',
        'passwordxyz',
        2345678901
      )
    )
  ];

  constructor(private RegisteredOrganization: OrganizationService) {
  }

  acceptrganization(organization: Organization) {
    this.RegisteredOrganization.addOrganization(organization) ;
  }

  // Method to delete organization
  deleteOrganization(index: number) {
    this.organizations.splice(index, 1);
  }

  // Method to get all organizations
  getOrganizations() {
    return this.organizations;
  }

  getOrganizationByID (id:number){
    return this.organizations[id] ;
  }

}
