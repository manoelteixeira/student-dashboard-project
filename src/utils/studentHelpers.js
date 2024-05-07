export function getStudentsByCohort(data, cohort) {
  if (cohort == "All Students") {
    return data;
  }
  cohort = cohort.split(" ").join("");
  return data.filter((student) => student.cohort.cohortCode == cohort);
}

function getStudentFullName(student) {
  const { names } = student;
  return `${names.preferredName} ${names.middleName[0]}. ${names.surname}`;
}

function getDobString(dob) {
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
  const [month, day, year] = dob.split("/");
  return `${months[month - 1]} ${day}, ${year}`;
}

function isOnTrack(student) {
  const { resume, linkedin, github, mockInterview } = student.certifications;
  const certificationsStatus = resume && linkedin && github && mockInterview;
  const codewarsStatus = student.codewars.current.total > 600;
  return certificationsStatus && codewarsStatus;
}

export function getStudentInfo(student) {
  return {
    fullName: getStudentFullName(student),
    email: student.username,
    dob: getDobString(student.dob),
    isOnTrack: isOnTrack(student),
    photo: student.profilePhoto,
  };
}

function getStudentCodeWars(student) {
  const { codewars } = student;
  const codeWarsTotal = codewars.current.total;
  const codeWarsLastWeek = codewars.current.lastWeek;
  const codeWarsGoal = codewars.goal.total;
  const codeWarsPercentage = `${
    (codeWarsGoal / codeWarsTotal).toFixed(2) * 100
  }%`;

  return {
    total: codeWarsTotal,
    lastWeek: codeWarsLastWeek,
    goal: codeWarsGoal,
    percentage: codeWarsPercentage,
  };
}

function getStudentScores(student) {
  const { assignments, projects, assessments } = student.cohort.scores;
  return {
    assignments: `${assignments * 100}%`,
    projects: `${projects * 100}%`,
    assessments: `${assessments * 100}%`,
  };
}

function getStudentCertifications(student) {
  const { resume, linkedin, github, mockInterview } = student.certifications;
  return {
    resume: resume ? "✅" : "❌",
    linkedin: linkedin ? "✅" : "❌",
    github: github ? "✅" : "❌",
    mockInterview: mockInterview ? "✅" : "❌",
  };
}

export function getStudentPortifolio(student) {
  return {
    codewars: getStudentCodeWars(student),
    scores: getStudentScores(student),
    certifications: getStudentCertifications(student),
  };
}
