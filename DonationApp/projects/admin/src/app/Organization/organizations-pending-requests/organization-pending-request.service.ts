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
      'Government 6',"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85308.60515504004!2d30.725363274699787!3d29.969488020849363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 7', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d340746.8231979895!2d31.228757806193005!3d30.035247345129776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 8',  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102301.62060189652!2d31.828288757168067!3d30.979341509606014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 9', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d503779.9865172232!2d31.816396299466573!3d26.72231825936015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 10', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d862939.1307577865!2d31.526837269463244!3d26.343388289429054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 11', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102299.13492910508!2d31.772907522750476!3d30.9992542410608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 12', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d862959.4855104281!2d30.48427472672764!3d26.36570460965092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 13', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68642.23114421111!2d31.269522469155937!3d29.734152780228256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 14', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d342369.1861767999!2d32.87926481926543!3d24.089680998792703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 15', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d514367.84043893215!2d30.2174019782394!3d29.40689533263558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 16', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d342369.1861767999!2d32.87926481926543!3d24.089680998792703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 17',"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d342369.1861767999!2d32.87926481926543!3d24.089680998792703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 18', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d514367.84043893215!2d30.2174019782394!3d29.40689533263558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 19', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d173166.2740015707!2d31.76166680808322!3d30.700706372076055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 20', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1018751.1236325349!2d31.707649106610584!3d30.04367750746763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 21', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172994.82704916636!2d31.29473952330886!3d30.029363803509383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg",
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
      'Government 22',"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51413.161543213055!2d29.917289631518095!3d31.261798387129013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714772156263!5m2!1sen!2seg" ,
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
      'Government 23', "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d258862.71522333116!2d31.344500173308675!3d30.040222799101583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen",
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
      'Government 24', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137150.33511134457!2d31.22418519618729!3d30.04441904329484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838d94a29db6f%3A0xac60bf5d8e55a853!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1647597581557!5m2!1sen!2s",
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
      'Government 25', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344881.6526541043!2d31.22418519618729!3d30.04441904329484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838d94a29db6f%3A0xac60bf5d8e55a853!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1647597581557!5m2!1sen!2s",
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
