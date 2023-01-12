
const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
    }
    else if (typeof XDomainRequest != 'undefined') {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    else {
        xhr = null;
    }
    return xhr;
}

const request = createCORSRequest('GET',
    'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=c9PWjh67zpPlAQxPA8g4wfx1I3DZG2Hq&q=Ha%20Noi');
if (!request) {
    throw new Error('CORS is not supported');
}

request.onload = () => {
    const responseText = request.responseText;
    console.log(responseText);
    var responseJson = JSON.parse(responseText);
    var key = responseJson[0].ParentCity.Key;
    var name = responseJson[0].LocalizedName;
    console.log(key);
   $('.location-key').html('Location Key: ' + key);
   $('.city').html("City Name: " + name);

}
request.onerror = () => {
    console.log('Error');
}


request.send();

