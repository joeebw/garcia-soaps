
export enum SelectedPage {
  Inicio = 'inicio',
  Beneficios = 'beneficios',
  Clases = 'clases',
  Contactanos = 'contactanos'
}

export type BenefitType = {
  icon: JSX.Element;
  title: string,
  description: string
}

export type ClasesType = {
  image: string;
  description?: string;
  title: string
}