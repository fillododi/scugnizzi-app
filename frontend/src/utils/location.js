export const BORGOFORTE_COORDINATES = {
    latitude: 45.04755313348556,
    longitude: 10.754752500565647
}

export const BUSCOLDO_COORDINATES = {
    latitude: 45.095386147114546,
    longitude: 10.700745901036706
}

export const MONTANARA_COORDINATES = {
    latitude: 45.133972319507635,
    longitude: 10.719381212679673
}

export const degreesToRadians = (degrees) => {
    return degrees * (Math.PI / 180.0)
}

export const calculateDistance = (coord1, coord2) => {
    //restituisce la distanza in km tra le 2 coordinate in linea d'aria
    const earthRadius = 6371
    const deltaLat = degreesToRadians(coord2.latitude - coord1.latitude)
    const deltaLong = degreesToRadians(coord2.longitude - coord1.longitude)
    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
        Math.cos(degreesToRadians(coord1.latitude)) * Math.cos(degreesToRadians(coord2.latitude)) * Math.sin(deltaLong/2) * Math.sin(deltaLong/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return c * earthRadius
}