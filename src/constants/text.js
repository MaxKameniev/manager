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

export const calcConsts = {
    backSum: 'BackwardDeliverySum',
    stateField: 'StateName',
    backMoneyTitle: 'Сумма к возврату',
    shipedParcel: 'Printed',
    shipedParcelTitle: 'Отправленно посылок'
}

export const general = {
    logo: 'BM CRM',
    currency: 'грн.',
    criticalDays: '4 days',
    preCriticalDays: '3 days',
}