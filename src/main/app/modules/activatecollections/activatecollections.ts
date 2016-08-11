export interface ActivateCollectionsDto {
  licence: string;
  licenceAccepted: boolean;
  purposes: Purpose[];
  purpose: Purpose;
  otherPurpose: string;
  state: string;
  id: string;
  name: string;
  icon?: string;
}

export interface Purpose {
  id: number;
  purposeType: string;
  purpose: string;
}
