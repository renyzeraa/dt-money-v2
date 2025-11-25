export const dateFormatter = (new Intl.DateTimeFormat("pt-BR")).format

export const priceFormatter = (new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
})).format