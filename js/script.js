;

function pad(number, length) {
   
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

$(function(){
    var tmpIf = $('form').attr('method');
    var dateNow = new Date;
    if (tmpIf == "post" || tmpIf == "POST"){
      dateNow.setMinutes(dateNow.getMinutes()+30)
    }else{
      dateNow.setHours(dateNow.getHours()+1)
    }

    $('.countdown').countdown(dateNow)
        .on('update.countdown', function(event) {
          const data = event.offset;
          const [daysF1, daysF2] = pad(data.hours, 2).split('');
          const [hoursF1, hoursF2] = pad(data.minutes, 2).split('');
          const [minutesF1, minutesF2] = pad(data.seconds, 2).split('');

          $('.day-f-1 .curr').html(daysF1)
          $('.day-f-2 .curr').html(daysF2)

          $('.hours-f-1 .curr').html(hoursF1)
          $('.hours-f-2 .curr').html(hoursF2)

          $('.minutes-f-1 .curr').html(minutesF1)
          $('.minutes-f-2 .curr').html(minutesF2)
        })
});


function countPeopleZone(){
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            var city = JSON.stringify(data.city);
            // console.log(city);
            var people = Math.round(Math.random() * (79 - 26) + 26);
            // console.log(people);
            var seconds = Math.round(Math.random() * (59 - 12) + 12);
            // console.log(seconds);
            $('.count_people').text(people);
            $('.include_town').text(city);
            $('.count_time').text(seconds + ' seconds');
        });
};

countPeopleZone();

var user;
// function makeRandomUsers(){
//     $.ajax({
//         url: 'https://uinames.com/api/?region=England&ext&amount=3',
//         success: function(data){
//             user = data;
//             for(var i=0; i<3; i++){
//               var randsum = Math.round(Math.random() * (5000 - 800) + 800);
//               $("#usr_img"+ i).attr('src', user[i].photo);
//               $("#usr_city"+ i).text(user[i].region);
//               $("#usr_name"+ i).text(user[i].name);
//               $("#usr_sum"+ i).text("$" + randsum);
//             }
//         }
//     });
// }
// makeRandomUsers();
// setInterval(makeRandomUsers, 6000);

function addTopData() {
    var nowDate = new Date();
    var days = nowDate.getDate();
    var days_yes = nowDate.getDate() - 1;
    var month = nowDate.getMonth() + 1;
    var year = nowDate.getFullYear();
    if (days < 10) days = '0' + days;
    if (month < 10) month = '0' + month;
    $('.data_now').text(days + '.' + month + '.' + year);
    $('.data_yes').text(days_yes + '.' + month + '.' + year);
}

addTopData();