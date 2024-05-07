export function getCohortListSorted(data) {
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
