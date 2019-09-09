export const api = {
    endpoint: "https://api.novaposhta.ua/v2.0/json/",
    monthRange: 1,
    dateFormat: 'DD.MM.YYYY'
}

export const menu = [
    // {name: "Orders", id: "1", url: 'orders'},
    // {name: "Tasks", id: "2", url: 'tasks'},
    {name: "Tracking", id: "3", url: ''}
]

export const status = {
    privat: 'Приватна особа',
    parcelRecived: "Одержано",
    parcelArrived: "Прибув у відділення",
    refusalToReceive: "Відмова від отримання"
}

export const awesomeIcons = {
    info: 'fas fa-info-circle',
    close: 'far fa-times-circle'
};

export const logo = 'BM CRM';

export const statistic = [
    {title: 'Сумма к возврату', key: 'BackwardDeliverySum'},
    {title: 'В процессе доставки', key: 'Printed'}
]

export const general = {
    logo: 'BM CRM',
    currency: 'грн.',
    criticalPeriod: '4 days',
    preCriticalPeriod: '3 days',
    stateField: 'StateName',
}
