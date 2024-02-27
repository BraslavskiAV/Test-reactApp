export default interface Iblog {
  date: string,
  title: string,
  subtitle?: string,
  source: any
}

export default interface IButton{
  isDisabled?: boolean,
  clickFunction?: () => void,
  typeButton?: string,
  children?: string
}   