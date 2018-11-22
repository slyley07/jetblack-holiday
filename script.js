let json = [
  {
    "img": "1_thanksgiving_icon",
    "name": "Thanksgiving",
    "eDate": "Nov 14th",
    "lDate": "Nov 21st"
  },
  {
    "img": "2_hanukkah_icon",
    "name": "Hanukkah",
    "alt": "Hanukkah Icon",
    "eDate": "Nov 23th",
    "lDate": "Dec 1st"
  },
  {
    "img": "3_christmas_icon",
    "name": "Christmas",
    "alt": "Christmas Icon",
    "eDate": "Dec 14th",
    "lDate": "Dec 24st"
  }
]

function holidayGreyer(holidayImg) {
  if ('1_thanksgiving_icon' === holidayImg) {
    $('.mobile .holidayIcon').addClass('greyedOut');
    $('.mobile .holidayName').addClass('greyedOut');
    $('.mobile .eDate').addClass('greyedOut');
    $('.mobile .lDate').addClass('greyedOut');
  } else {
    $('.mobile .holidayIcon').removeClass('greyedOut');
    $('.mobile .holidayName').removeClass('greyedOut');
    $('.mobile .eDate').removeClass('greyedOut');
    $('.mobile .lDate').removeClass('greyedOut');
  }
}

function changer(data) {

  let image = './imgs/' + data.img + '.png';
  $('.mobile .holidayIcon').attr('src', image);
  $('.mobile .holidayName').text(data.name);
  $('.mobile .eDate').text(data.eDate);
  $('.mobile .lDate').text(data.lDate);
  holidayGreyer(data.img);
}

$(document).ready(function() {
  let i = 0;

  $('.rightie').click(function() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }

    let data = json[i];

    // holidayGreyer(data.img);

    // let image = './imgs/' + data.img + '.png';
    changer(data)
    // $('.mobile .holidayIcon').attr('src', image);
    // $('.mobile .holidayName').text(data.name);
    // $('.mobile .eDate').text(data.eDate);
    // $('.mobile .lDate').text(data.lDate);
  })

  $('.leftie').click(function() {
    if (i === 0) {
      i = 2;
    } else {
      i--;
    }

    let data = json[i];

    // holidayGreyer(data.img);
    changer(data)

    // let image = './imgs/' + data.img + '.png';
    // $('.mobile .holidayIcon').attr('src', image);
    // $('.mobile .holidayName').text(data.name);
    // $('.mobile .eDate').text(data.eDate);
    // $('.mobile .lDate').text(data.lDate);
  })


  setInterval(function() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    let data = json[i];

    // holidayGreyer(data.img);
    changer(data)

    // let image = './imgs/' + data.img + '.png';
    // $('.mobile .holidayIcon').attr('src', image);
    // $('.mobile .holidayName').text(data.name);
    // $('.mobile .eDate').text(data.eDate);
    // $('.mobile .lDate').text(data.lDate);
  }, 5000)
})
