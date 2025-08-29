export type DossierMedical = {
  antecedents: string[];
  allergies: string[];
  traitements: {
    nom: string;
    dose: string;
    frequence: string;
  }[];
};
