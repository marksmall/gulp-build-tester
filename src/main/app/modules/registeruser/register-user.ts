export interface RegisterUserDto {
  title: string;
  firstName: string;
  surname: string;
  email: string;
  state: string;
  institutionName: string;
  departments: string[];
  department: string;
  userTypes: string[];
  userType: string;
  hearabouts: string[];
  hearabout: string;
  supportContactable: boolean;
  marketingContactable: boolean;
}

