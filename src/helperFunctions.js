export function getCohorotList(data) {
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

export function getStudentsByCohort(data, selectedCohort) {
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

  const name = `${names.preferredName} ${names.middleName[0]}. ${names.surname}`;
  const [month, day, year] = dob.split("/");
  const birthday = `${months[month - 1]} ${day}, ${year}`;

  const graduationStatus = isOnTrack(student);
  const onTrack = {
    status: graduationStatus,
    message: `${graduationStatus ? "On" : "Off"} Track to Graduate`,
  };

  return { name, username, birthday, profilePhoto, onTrack };
}

export function isOnTrack(student) {
  const { resume, linkedin, github, mockInterview } = student.certifications;
  const certificationsStatus = resume && linkedin && github && mockInterview;
  const codewarsStatus = student.codewars.current.total > 600;
  return certificationsStatus && codewarsStatus;
}

export function getStudentDetails(student) {
  const { codewars, certifications, cohort } = student;
  // Codewars
  const codeWarsTotal = codewars.current.total;
  const codeWarsLastWeek = codewars.current.lastWeek;
  const codeWarsGoal = codewars.goal.total;
  const codeWarsPercentage = `${
    (codeWarsGoal / codeWarsTotal).toFixed(2) * 100
  }%`;

  const codeWarsStatus = [
    {
      label: "Current Total",
      value: codeWarsTotal,
    },
    {
      label: "Last Week",
      value: codeWarsLastWeek,
    },
    {
      label: "Goal",
      value: codeWarsGoal,
    },
    {
      label: "Percentage of Goal Achieved",
      value: codeWarsPercentage,
    },
  ];

  // Scores
  const scoresStaus = [
    {
      label: "Assignments",
      value: `${cohort.scores.assignments * 100}%`,
    },
    {
      label: "Projects",
      value: `${cohort.scores.projects * 100}%`,
    },
    {
      label: "Assessments",
      value: `${cohort.scores.assessments * 100}%`,
    },
  ];
  // Certifications
  const certificationsStatus = [
    {
      label: "Resume",
      value: certifications.resume ? "✅" : "❌",
    },
    {
      label: "LinkedIn",
      value: certifications.linkedin ? "✅" : "❌",
    },
    {
      label: "GitHub",
      value: certifications.github ? "✅" : "❌",
    },
    {
      label: "Mock Interview",
      value: certifications.mockInterview ? "✅" : "❌",
    },
  ];

  return {
    codewars: codeWarsStatus,
    certifications: certificationsStatus,
    scores: scoresStaus,
  };
}

export function updateStudent(data, id, student) {
  console.log(id);
}
