export function getGeoLocation() {
    return fetch('https://extreme-ip-lookup.com/json/')
    .then(res => res.json())
    .then(res => {
        if (res.status === 'success'){
            return res.city;
        } else {
            return 'London';
        }
    });
}