const parse = (data) => JSON.parse(data);

const requestData = (url, callback) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', url);
    xml.send();

    xml.addEventListener('load', () => {
        if (xml.status < 400) {
            const response = parse(xml.response);
            callback(response.children);
        } 
    });
};

let arr = [];

const handleData = (data) => {
  
    arr = arr.concat(data);
    console.log(arr); 
};

requestData('request/data.json', handleData);
requestData('request/data2.json', handleData);