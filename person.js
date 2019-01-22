let person = {
  firstname: "",
  lastname: "",
  dateofbirth: "01/22/1991",

  getAge: function () {

    let now = new Date();
    let today = new Date(now.getYear(), now.getMonth(), now.getDate());

    let yearNow = now.getYear();
    let monthNow = now.getMonth();
    let dateNow = now.getDate();
    // date of birth razdeleno
    let dob = new Date(dateofbirth.substring(6, 10),
                       dateofbirth.substring(0, 2) - 1,
                       dateofbirth.substring(3, 5)
    );

    let yearDob = dob.getYear();
    let monthDob = dob.getMonth();
    let dateDob = dob.getDate();
    let age = {};
    let ageString = "";
    let yearString = "";
    let monthString = "";
    let dayString = "";


    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) {
      let monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      let monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
      let dateAge = dateNow - dateDob;
    else {
      monthAge--;
      let dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";

    if (age.months > 1) monthString = " months";
    else monthString = " month";

    if (age.days > 1) dayString = " days";
    else dayString = " day";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
      ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";

    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
      ageString = "Only " + age.days + dayString + " old!";

    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
      ageString = age.years + yearString + " old. Happy Birthday!!";

    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
      ageString = age.years + yearString + " and " + age.months + monthString + " old.";
      
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
      ageString = age.months + monthString + " and " + age.days + dayString + " old.";

    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
      ageString = age.years + yearString + " and " + age.days + dayString + " old.";

    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
      ageString = age.months + monthString + " old.";

    else ageString = "Oops! ";

    return ageString;

  }

}

