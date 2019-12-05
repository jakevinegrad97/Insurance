const API = 'https://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount'

export const getVehicleByReg = (reg, callback) => {
    reg="mt09nks"
    const url = `${API}&licencePlate=${reg}`

    fetch(url)
        .then(res => res.json())
        .then(callback)
}