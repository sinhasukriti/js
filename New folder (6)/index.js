function sortStudents(students) {
    students.sort((a, b) => {
      const totalMarks1 = a.biology + a.chemistry;
      const totalMarks2 = b.biology + b.chemistry;
      if (totalMarks1 !== totalMarks2) {
        return totalMarks1 - totalMarks2;
      } else {
        const biologyMarks1 = a.biology;
        const biologyMarks2 = b.biology;
        return biologyMarks1 - biologyMarks2;
      }
    });
    return students;
  }
  
  const testCase1 = [
    {
      name: "Leo Messi",
      dob: "31-12-1995",
      biology: 95,
      chemistry: 91,
    },
    {
      name: "Cristiano Ronaldo",
      dob: "31-05-1992",
      biology: 90,
      chemistry: 81,
    },
    {
      name: "Virat Kohli",
      dob: "31-12-1995",
      biology: 95,
      chemistry: 96,
    },
    {
      name: "Rohit Sharma",
      dob: "31-12-1995",
      biology: 85,
      chemistry: 86,
    },
    {
      name: "Viswanathan Anand",
      dob: "12-12-1994",
      biology: 99,
      chemistry: 10,
    },
  ];
  
  const sortedStudents1 = sortStudents(testCase1);
  console.log(sortedStudents1);
  // expected output: ["Virat", "Leo", "Cristiano", "Rohit", "Viswanathan Anand"]
  
  const testCase2 = [
    {
      name: "Leo Messi",
      dob: "31-12-1995",
      biology: 100,
      chemistry: 80,
    },
    {
      name: "Cristiano Ronaldo",
      dob: "31-05-1992",
      biology: 80,
      chemistry: 100,
    },
    {
      name: "Virat Kohli",
      dob: "31-12-1995",
      biology: 30,
      chemistry: 40,
    },
    {
      name: "Rohit Sharma",
      dob: "31-12-1995",
      biology: 40,
      chemistry: 30,
    },
    {
      name: "Viswanathan Anand",
      dob: "12-12-1994",
      biology: 99,
      chemistry: 10,
    },
  ];
  
  const sortedStudents2 = sortStudents(testCase2);
  console.log(sortedStudents2);
  // expected output: ["Leo", "Cristiano", "Viswanathan", "Rohit", "Virat"]
  