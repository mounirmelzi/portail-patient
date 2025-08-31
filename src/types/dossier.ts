export type DossierMedical = {
  patient: {
    nom: string;
    prenom: string;
    dateNaissance: string;
  };
  antecedents: string[];
  allergies: string[];
  traitements: {
    nom: string;
    dose: string;
    frequence: string;
  }[];
};
