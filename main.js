async function req(URL) {
    return (await fetch(URL)).json();
}
var data = req('https://coding-week-2024-api.onrender.com/api/data');
async function getData(id,...fields) {
    // Returns the data of the specific id with the fields specified in an array ordered like the fields specified
    var specificData = (await data)[id-1];
    const data_array = [];
    fields.forEach(field => {
        data_array.push(specificData[field]);
    });
    return data_array;
}
async function modifyDivs(id,className,div_w,div_h, ...fields) {
    // Creates a div with the specified id and modifies the innerHTML with the fields specified
    const div = document.getElementsByClassName(className)[0];
    const data = await getData(id, ...fields);
    var netHTML = '';          
    if (fields.includes('type')) {
        netHTML += `<div class='cult'>`;
        netHTML += `<div class = 'cult2 xxx'>`;
        netHTML += `<p>Featured</p></div>`;
        netHTML += `<div class='cult1 xxx'>`;
        netHTML += `<p>${data[fields.indexOf('type')][0].toUpperCase() + data[fields.indexOf('type')].slice(1)}</p>`;
        netHTML += `</p></div>`;
        netHTML += `</div>`;       
    }
    if (fields.includes('headline')) {
        netHTML += `<div class='text1'>`
        netHTML += `<p class="font">${data[fields.indexOf('headline')]}</p>`;
       
        netHTML += `</div>`;
    }
    if (fields.includes('date')) {
        netHTML += `<div class="last-text2">`;
        netHTML += `<div class="img-last"></div>`;
        netHTML += `<div class="date-like">`;
        netHTML += `<i class="fa-regular fa-calendar"></i>`;
        netHTML += `<p class="font">${data[fields.indexOf('date')]}</p>`;
        netHTML += `</div>`;
    }
    netHTML += `</div>`;
    //document.getElementsByClassName('img-last').style.backgroundImage = `url(${data[fields.indexOf('image')]});`;
    div.innerHTML = netHTML;
}