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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.7915905025766!2d31.35767608880997!3d30.12877655812532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581712acf03161%3A0x930ed1e59aff7702!2sThe%20cave%20Ps!5e0!3m2!1sen!2seg!4v1715447213649!5m2!1sen!2seg"  ,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1283069791334!2d31.32406188088901!3d30.090511488700262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e20d3324d87%3A0xa84e27f0f14e08bd!2sTree%20Trunk!5e0!3m2!1sen!2seg!4v1715447326609!5m2!1sen!2seg" ,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.8614576302894!2d31.33576220719317!3d30.095966901271556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815eb42857fa5%3A0x25a3cb22ad5a8d49!2sXHALE.EGY!5e0!3m2!1sen!2seg!4v1715447400824!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.9503539752369!2d31.344047706118616!3d30.09987319938548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458151c33fe2733%3A0x9b381fbd6f11507d!2sUltra%20Medical%20Cairo!5e0!3m2!1sen!2seg!4v1715447462537!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.9247031513977!2d31.345330892135618!3d30.102811072513955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815e1c9449fc7%3A0x419ddfe17533bee!2sBoxops!5e0!3m2!1sen!2seg!4v1715447502313!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.141731405296!2d31.341976926128627!3d30.105886151769685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a3beb16a3d%3A0xdfe7355a09335f27!2sDeeb%20tours!5e0!3m2!1sen!2seg!4v1715447567689!5m2!1sen!2seg",
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
      'Organization 13',
      'Type 13',
      '990 Birch St',
      'Area 13',
      'Government 13',
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.8730966656567!2d31.34204886853696!3d30.10872094576497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815e807229ab9%3A0xc29bf843d1dcec74!2sUD%20Crops!5e0!3m2!1sen!2seg!4v1715447639333!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.6726849534318!2d31.349336890367688!3d30.112929322329716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815c02e58191b%3A0xe375925a13a5f868!2sAMCO%20Egypt!5e0!3m2!1sen!2seg!4v1715447720363!5m2!1sen!2seg" ,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.6134859221784!2d31.359908733275127!3d30.1163180971344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817b8a87bda1f%3A0xe6c21e9a16bb7b68!2zTSZT!5e0!3m2!1sen!2seg!4v1715447776696!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1725.9672334154368!2d31.30746851871562!3d30.096063122317737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fd5354567b9%3A0xf5cf704a894adead!2sTarget!5e0!3m2!1sen!2seg!4v1715447844109!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.383643919316!2d31.33217605866825!3d30.05453580378124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e64205b6b5d%3A0xfef7eadd1a1cfb92!2sVilla%20One%20Eleven!5e0!3m2!1sen!2seg!4v1715447921248!5m2!1sen!2seg" ,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.6887169430474!2d31.36596804337789!3d30.052161991430584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dbd3ca1a753%3A0xb96ac16a7ce11eed!2sKPJ%20Mesir!5e0!3m2!1sen!2seg!4v1715448030667!5m2!1sen!2seg",
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
      'Organization 20',
      'Type 20',
      '1767 Oak St',
      'Area 20',
      'Government 20',
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.3297979914619!2d31.418593378298137!3d30.01792927622921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583da3443f3099%3A0x3202cdfd4ddf7645!2sSutherland%20Global%20Services!5e0!3m2!1sen!2seg!4v1715448104238!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.344072720327!2d31.41315456479787!3d30.017109741345703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d0936b2ffa3%3A0xab70b571a06cb20a!2sMapei%20Egypt!5e0!3m2!1sen!2seg!4v1715448188984!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.3438552890989!2d31.424281038343914!3d30.01712222457043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cdd01d56a41%3A0x1c9dddd68e86df0!2sShell%20Business%20View!5e0!3m2!1sen!2seg!4v1715448260639!5m2!1sen!2seg"  ,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.3239202539614!2d31.431947856404346!3d30.018266720588787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d4d0b1f6c91%3A0x3450c2e8d3030ae2!2sBellzee!5e0!3m2!1sen!2seg!4v1715448315653!5m2!1sen!2seg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.5763187413556!2d31.41654214778663!3d30.003773276273282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392bb0a896b5%3A0x90c8fdb5728d41ef!2sTakwene!5e0!3m2!1sen!2seg!4v1715448407445!5m2!1sen!2seg" ,
      new OrganizationRepresentitve(
        'Harper',
        'Reed',
        'Female',
        'harper@example.com',
        'passwordabc',
        1234567809
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
