import data from "./data/data.json";

/**
 * @returns
 */
export function getCohorotList() {
  let cohortList = [];
  for (const student of data) {
    let { cohort } = student;
    cohort = cohort.cohortCode;
    if (!cohortList.includes(cohort)) {
      cohortList.push(cohort);
    }
  }

  cohortList = cohortList.sort((a, b) => {
    const seasonArr = ["sping", "summer", "fall", "winter"];
    if (a.slice(-4) < b.slice(-4)) {
      return -1;
    } else if (a.slice(-4) > b.slice(-4)) {
      return 1;
    } else {
      const seasonA = a.slice(0, -4);
      const seasonB = b.slice(0, -4);
      if (
        seasonArr.indexOf(seasonA.toLowerCase()) <=
        seasonArr.indexOf(seasonB.toLowerCase())
      ) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  return cohortList.map(
    (cohort) => `${cohort.slice(0, -4)} ${cohort.slice(-4)}`
  );
}

/**
 *
 * @param {*} selectedCohort
 * @returns
 */
export function getStudentsByCohort(selectedCohort) {
  if (selectedCohort == "All Students") {
    return data;
  }
  const cohort = selectedCohort.split(" ").join("");
  const students = [];

  for (const student of data) {
    if (student.cohort.cohortCode == cohort) {
      students.push(student);
    }
  }
  return students;
}

/**
 *
 * @param {*} student
 * @returns
 */
export function getStudentProfile(student) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { names, username, dob, profilePhoto, certifications } = student;
  const { resume, linkedin, github, mockInterview } = certifications;

  const name = `${names.preferredName} ${names.middleName[0]}. ${names.surname}`;
  const [month, day, year] = dob.split("/");
  const birthday = `${months[month - 1]} ${day}, ${year}`;

  return { name, username, birthday, profilePhoto };
}
