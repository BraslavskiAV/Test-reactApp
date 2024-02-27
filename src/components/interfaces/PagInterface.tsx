export default interface IButtonPag{
  isDisabled?: boolean,
  clickFuncPagin?: () => void,
  children?: string
  page?: number | any,
  text: string,
  anyPage: number | string,
}