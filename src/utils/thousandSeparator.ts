export const thousandSeparator = (number: string): string => {
   if (!number) return '0'

   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
