function getPrice(imgId){
    var twentyfives = ['6', '7', '8', '9', '12', '13', '14', '17'];
    var thirtyies = ['4', '10', '11', '16', '19'];
    var thirtyfives = ['3', '5', '15', '18'];
    var fourties = ['1', '2'];

    if (twentyfives.indexOf(imgId) != -1)
    {
        return '25';
    }

    if (thirtyies.indexOf(imgId) != -1)
    {
        return '30';
    }

    if (thirtyfives.indexOf(imgId) != -1)
    {
        return '35';
    }

    if (fourties.indexOf(imgId) != -1)
    {
        return '40';
    }
}
