// const QUIZ_DATA = [
//   {
//     id: 1,
//     question: "What is the primary purpose of functional quality attributes?",
//     options: [
//       "To evaluate developer code perspective",
//       "To focus on business value and feature behavior",
//       "To measure end-user experience only",
//       "To assess system performance metrics",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "Functional quality attributes focus on how well the software performs its intended functions correctly and accurately, emphasizing business value and feature behavior.",
//   },
//   {
//     id: 2,
//     question:
//       "Which phase comes first in the Software Testing Life Cycle (STLC)?",
//     options: [
//       "Test Planning",
//       "Test Case Development",
//       "Requirement Analysis",
//       "Test Environment Setup",
//     ],
//     correctAnswer: 2,
//     explanation:
//       "Requirement Analysis is the first phase of STLC where testers understand what needs to be tested and analyze functional and non-functional requirements.",
//   },
//   {
//     id: 3,
//     question: "What does Unit Testing primarily focus on?",
//     options: [
//       "Testing the entire application workflow",
//       "Testing individual components or functions in isolation",
//       "Testing user acceptance criteria",
//       "Testing system integration points",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "Unit testing focuses on testing individual components or functions in isolation to detect bugs early and ensure each function behaves as expected before integration.",
//   },
//   {
//     id: 4,
//     question:
//       "Which metric measures the number of defects per 1,000 lines of code?",
//     options: [
//       "Code Coverage",
//       "Defect Density",
//       "MTTF (Mean Time To Failure)",
//       "Cyclomatic Complexity",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "Defect Density is calculated as (Total Defects) / (KLOC) where KLOC is Kilo Lines of Code (1000 lines), helping assess code quality.",
//   },
//   {
//     id: 5,
//     question:
//       "What is the main difference between Verification and Validation?",
//     options: [
//       "Verification is done after development, Validation during development",
//       "Verification ensures software is built correctly, Validation ensures the right software is built",
//       "Verification is for testers, Validation is for developers",
//       "Verification focuses on user needs, Validation on design specifications",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "Verification ensures that software meets design specifications (built correctly), while Validation confirms that software meets user requirements and expectations (right software is built).",
//   },
//   {
//     id: 6,
//     question:
//       "Which testing technique divides input data into valid and invalid groups?",
//     options: [
//       "Boundary Value Analysis",
//       "Decision Table Testing",
//       "Equivalence Partitioning",
//       "State Transition Testing",
//     ],
//     correctAnswer: 2,
//     explanation:
//       "Equivalence Partitioning divides input values into valid and invalid groups that are expected to be treated the same by the system, reducing test cases while maintaining coverage.",
//   },
//   {
//     id: 7,
//     question: "What does ISO/IEC 25010 standard define?",
//     options: [
//       "Software development methodologies",
//       "Quality model for evaluating software product quality",
//       "Test case documentation standards",
//       "Project management frameworks",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "ISO/IEC 25010 is an international standard that defines a quality model for evaluating software product quality with 8 characteristics including functional suitability, performance efficiency, and security.",
//   },
//   {
//     id: 8,
//     question: "Which type of testing examines the internal structure of code?",
//     options: [
//       "Black-box Testing",
//       "White-box Testing",
//       "Gray-box Testing",
//       "Acceptance Testing",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "White-box testing (also known as glass-box or clear-box testing) examines the internal workings of a program, including its source code and design, to identify potential bugs.",
//   },
//   {
//     id: 9,
//     question: "What is the formula for Code Coverage?",
//     options: [
//       "(Total Defects / KLOC) * 100",
//       "(Executed Code Lines / Total Code Lines) * 100",
//       "(Passed Test Cases / Total Test Cases) * 100",
//       "(Total Operating Time / Number of Failures)",
//     ],
//     correctAnswer: 1,
//     explanation:
//       "Code Coverage is calculated as (Executed Code Lines / Total Code Lines) * 100, measuring the percentage of code executed during automated testing.",
//   },
//   {
//     id: 10,
//     question: "Which CMMI level represents 'Optimizing' processes?",
//     options: ["Level 3", "Level 4", "Level 5", "Level 2"],
//     correctAnswer: 2,
//     explanation:
//       "CMMI Level 5 (Optimizing) represents the highest maturity level where continuous process improvement is institutionalized across the organization.",
//   },
// ];

const QUIZ_DATA = [
  {
    id: 1,
    question: "What is the primary purpose of functional quality attributes?",
    options: [
      "To evaluate developer code perspective",
      "To focus on business value and feature behavior",
      "To measure end-user experience only",
      "To assess system performance metrics",
    ],
    correctAnswer: 1,
    explanation:
      "Functional quality attributes focus on how well the software performs its intended functions correctly and accurately, emphasizing business value and feature behavior.",
  },
  {
    id: 2,
    question:
      "Which phase comes first in the Software Testing Life Cycle (STLC)?",
    options: [
      "Test Planning",
      "Test Case Development",
      "Requirement Analysis",
      "Test Environment Setup",
    ],
    correctAnswer: 2,
    explanation:
      "Requirement Analysis is the first phase of STLC where testers understand what needs to be tested and analyze functional and non-functional requirements.",
  },
  {
    id: 3,
    question: "What does Unit Testing primarily focus on?",
    options: [
      "Testing the entire application workflow",
      "Testing individual components or functions in isolation",
      "Testing user acceptance criteria",
      "Testing system integration points",
    ],
    correctAnswer: 1,
    explanation:
      "Unit testing focuses on testing individual components or functions in isolation to detect bugs early and ensure each function behaves as expected before integration.",
  },
  {
    id: 4,
    question:
      "Which metric measures the number of defects per 1,000 lines of code?",
    options: [
      "Code Coverage",
      "Defect Density",
      "MTTF (Mean Time To Failure)",
      "Cyclomatic Complexity",
    ],
    correctAnswer: 1,
    explanation:
      "Defect Density is calculated as (Total Defects) / (KLOC) where KLOC is Kilo Lines of Code (1000 lines), helping assess code quality.",
  },
  {
    id: 5,
    question:
      "What is the main difference between Verification and Validation?",
    options: [
      "Verification is done after development, Validation during development",
      "Verification ensures software is built correctly, Validation ensures the right software is built",
      "Verification is for testers, Validation is for developers",
      "Verification focuses on user needs, Validation on design specifications",
    ],
    correctAnswer: 1,
    explanation:
      "Verification ensures that software meets design specifications (built correctly), while Validation confirms that software meets user requirements and expectations (right software is built).",
  },
  {
    id: 6,
    question:
      "Which testing technique divides input data into valid and invalid groups?",
    options: [
      "Boundary Value Analysis",
      "Decision Table Testing",
      "Equivalence Partitioning",
      "State Transition Testing",
    ],
    correctAnswer: 2,
    explanation:
      "Equivalence Partitioning divides input values into valid and invalid groups that are expected to be treated the same by the system, reducing test cases while maintaining coverage.",
  },
  {
    id: 7,
    question: "What does ISO/IEC 25010 standard define?",
    options: [
      "Software development methodologies",
      "Quality model for evaluating software product quality",
      "Test case documentation standards",
      "Project management frameworks",
    ],
    correctAnswer: 1,
    explanation:
      "ISO/IEC 25010 is an international standard that defines a quality model for evaluating software product quality with 8 characteristics including functional suitability, performance efficiency, and security.",
  },
  {
    id: 8,
    question: "Which type of testing examines the internal structure of code?",
    options: [
      "Black-box Testing",
      "White-box Testing",
      "Gray-box Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 1,
    explanation:
      "White-box testing (also known as glass-box or clear-box testing) examines the internal workings of a program, including its source code and design, to identify potential bugs.",
  },
  {
    id: 9,
    question: "What is the formula for Code Coverage?",
    options: [
      "(Total Defects / KLOC) * 100",
      "(Executed Code Lines / Total Code Lines) * 100",
      "(Passed Test Cases / Total Test Cases) * 100",
      "(Total Operating Time / Number of Failures)",
    ],
    correctAnswer: 1,
    explanation:
      "Code Coverage is calculated as (Executed Code Lines / Total Code Lines) * 100, measuring the percentage of code executed during automated testing.",
  },
  {
    id: 10,
    question: "Which CMMI level represents 'Optimizing' processes?",
    options: ["Level 3", "Level 4", "Level 5", "Level 2"],
    correctAnswer: 2,
    explanation:
      "CMMI Level 5 (Optimizing) represents the highest maturity level where continuous process improvement is institutionalized across the organization.",
  },

  // New questions generated below based on PDFs
  {
    id: 11,
    question: "What does the 'Test Plan' primarily define?",
    options: [
      "Code quality and formatting rules",
      "Automation scripting strategies",
      "Scope, resources, and schedule of testing activities",
      "Requirements gathering approach",
    ],
    correctAnswer: 2,
    explanation:
      "The Test Plan defines the overall strategy, scope, resources, and schedule for testing activities.",
  },
  {
    id: 12,
    question:
      "Which quality attribute focuses on how easily users can interact with the software?",
    options: ["Performance", "Reliability", "Usability", "Portability"],
    correctAnswer: 2,
    explanation:
      "Usability measures how easy and intuitive it is for users to interact with the software interface.",
  },
  {
    id: 13,
    question: "What is the purpose of regression testing?",
    options: [
      "To verify performance under load",
      "To test edge cases in input values",
      "To ensure recent changes haven't broken existing features",
      "To validate user interfaces",
    ],
    correctAnswer: 3,
    explanation:
      "Regression testing ensures that recent changes or bug fixes haven't adversely affected existing functionality.",
  },
  {
    id: 14,
    question: "Which testing method is most associated with CI/CD pipelines?",
    options: [
      "Ad-hoc Testing",
      "Continuous Testing",
      "Shift-Right Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 2,
    explanation:
      "Continuous Testing integrates automated tests into the CI/CD pipeline for frequent, real-time validation of software changes.",
  },
  {
    id: 15,
    question:
      "Which quality attribute ensures the software is resistant to unauthorized access?",
    options: ["Maintainability", "Security", "Reliability", "Portability"],
    correctAnswer: 1,
    explanation:
      "Security ensures that the software protects data and operations from unauthorized access or modifications.",
  },
  {
    id: 16,
    question: "What does MTTF (Mean Time To Failure) measure?",
    options: [
      "Time taken to fix a defect",
      "Time between successive failures",
      "Average operational time before a failure",
      "Amount of defects per KLOC",
    ],
    correctAnswer: 2,
    explanation:
      "MTTF measures the average time a system operates before a failure occurs, reflecting its reliability.",
  },
  {
    id: 17,
    question:
      "Which type of test ensures the system meets legal or regulatory requirements?",
    options: [
      "Compatibility Testing",
      "Exploratory Testing",
      "Compliance Testing",
      "Recovery Testing",
    ],
    correctAnswer: 3,
    explanation:
      "Compliance Testing ensures that the software adheres to legal, regulatory, and industry standards such as GDPR or HIPAA.",
  },
  {
    id: 18,
    question:
      "In white-box testing, which technique ensures every path in the code is tested?",
    options: [
      "Loop Testing",
      "Path Coverage",
      "Branch Coverage",
      "Equivalence Partitioning",
    ],
    correctAnswer: 2,
    explanation:
      "Path coverage ensures that all possible execution paths in the program are tested at least once.",
  },
  {
    id: 19,
    question: "Which is an example of a non-functional testing type?",
    options: [
      "Smoke Testing",
      "Sanity Testing",
      "Usability Testing",
      "Interface Testing",
    ],
    correctAnswer: 2,
    explanation:
      "Usability Testing is a non-functional test focusing on user-friendliness and ease of use.",
  },
  {
    id: 20,
    question: "What is the goal of Integration Testing?",
    options: [
      "Test individual units",
      "Ensure the software meets user requirements",
      "Verify interactions between modules",
      "Conduct real-world scenario testing",
    ],
    correctAnswer: 2,
    explanation:
      "Integration Testing verifies that different modules or services interact correctly after being combined.",
  },
  {
    id: 21,
    question: "Which quality metric calculates how much of the code is tested?",
    options: ["Defect Density", "Code Coverage", "MTTF", "DRE"],
    correctAnswer: 1,
    explanation:
      "Code Coverage is calculated as the percentage of executed code lines over total code lines during testing.",
  },
  {
    id: 22,
    question:
      "Which ISO standard defines the most recent software quality model?",
    options: ["ISO/IEC 9126", "ISO 9001", "ISO/IEC 25010", "IEEE 730"],
    correctAnswer: 2,
    explanation:
      "ISO/IEC 25010 is the modern standard that replaced ISO/IEC 9126 and defines eight product quality characteristics.",
  },
  {
    id: 23,
    question: "What does 'Defect Removal Efficiency' (DRE) indicate?",
    options: [
      "Percentage of defects fixed before release",
      "Efficiency of automated test scripts",
      "Percentage of test cases executed",
      "Time to detect a defect",
    ],
    correctAnswer: 0,
    explanation:
      "DRE = (Defects found before release / Total defects) * 100. It measures the effectiveness of the pre-release defect detection process.",
  },
  {
    id: 24,
    question: "Which CMMI level has documented and standardized processes?",
    options: ["Level 1", "Level 2", "Level 3", "Level 5"],
    correctAnswer: 2,
    explanation:
      "CMMI Level 3 is the 'Defined' level, where processes are well-documented, standardized, and integrated across the organization.",
  },
  {
    id: 25,
    question:
      "Which type of testing is used to verify workflows from start to finish?",
    options: [
      "Exploratory Testing",
      "End-to-End Testing",
      "Ad-hoc Testing",
      "Decision Table Testing",
    ],
    correctAnswer: 1,
    explanation:
      "End-to-End Testing simulates real-user scenarios to verify complete workflows function as expected.",
  },
  {
    id: 26,
    question: "What does Boundary Value Analysis (BVA) test?",
    options: [
      "Typical user behavior",
      "Average values in the dataset",
      "Values at the edges of input ranges",
      "Random input data combinations",
    ],
    correctAnswer: 2,
    explanation:
      "BVA tests input values at the edge of valid and invalid ranges, such as minimum and maximum limits, to catch boundary-related errors.",
  },
  {
    id: 27,
    question: "What is the purpose of Smoke Testing?",
    options: [
      "To test detailed business logic",
      "To verify data flows across modules",
      "To confirm major functionalities work before deeper testing",
      "To evaluate user-friendliness",
    ],
    correctAnswer: 2,
    explanation:
      "Smoke Testing is a basic check to ensure that the main functionalities of an application work, allowing further testing to proceed.",
  },
  {
    id: 28,
    question: "Which metric evaluates how quickly issues are resolved?",
    options: ["MTTF", "Code Coverage", "MTTR", "Build Success Rate"],
    correctAnswer: 2,
    explanation:
      "MTTR (Mean Time to Repair) measures the average time required to fix a failure or defect in the system.",
  },
  {
    id: 29,
    question:
      "Which model includes 'Maintainability' as a product revision factor?",
    options: ["ISO/IEC 25010", "McCall’s Model", "Boehm’s Model", "Six Sigma"],
    correctAnswer: 1,
    explanation:
      "McCall’s Quality Model includes Maintainability under the Product Revision category.",
  },
  {
    id: 30,
    question: "Which testing strategy is used without predefined test cases?",
    options: [
      "Functional Testing",
      "Exploratory Testing",
      "Regression Testing",
      "Interface Testing",
    ],
    correctAnswer: 1,
    explanation:
      "Exploratory Testing involves exploring the application on the fly to discover defects without predefined scripts.",
  },
  {
    id: 31,
    question: "What is Shift-Left Testing?",
    options: [
      "Testing during deployment only",
      "Delaying testing until production",
      "Involving testing early in development",
      "Real-user testing after release",
    ],
    correctAnswer: 2,
    explanation:
      "Shift-Left Testing means performing testing activities earlier in the software development lifecycle to detect issues sooner.",
  },
  {
    id: 32,
    question: "What is the role of a Test Environment Setup phase?",
    options: [
      "Writing test scripts",
      "Analyzing requirements",
      "Configuring hardware, software, and access for testing",
      "Automating test cases",
    ],
    correctAnswer: 2,
    explanation:
      "The Test Environment Setup phase ensures all required infrastructure and configurations are ready for effective test execution.",
  },
  {
    id: 33,
    question: "What does the acronym CI/CD stand for?",
    options: [
      "Continuous Improvement / Code Development",
      "Continuous Integration / Continuous Deployment",
      "Customer Insight / Code Debugging",
      "Continuous Iteration / Cloud Deployment",
    ],
    correctAnswer: 1,
    explanation:
      "CI/CD stands for Continuous Integration and Continuous Deployment, enabling frequent, automated code integration and release.",
  },
  {
    id: 34,
    question: "What is a 'Test Case Pass Rate'?",
    options: [
      "Number of tests executed daily",
      "Percentage of test cases that pass",
      "Percentage of code lines tested",
      "Success rate of deployed builds",
    ],
    correctAnswer: 1,
    explanation:
      "Test Case Pass Rate is calculated as (Passed Test Cases / Total Test Cases) * 100, showing how many test cases passed in a cycle.",
  },
  {
    id: 35,
    question:
      "Which Six Sigma phase focuses on identifying the root cause of defects?",
    options: ["Define", "Measure", "Analyze", "Improve"],
    correctAnswer: 2,
    explanation:
      "The 'Analyze' phase of Six Sigma identifies the root causes of defects using statistical tools.",
  },
  {
    id: 36,
    question: "Which of the following is an example of black-box testing?",
    options: [
      "Statement Coverage",
      "Loop Testing",
      "Boundary Value Analysis",
      "Path Coverage",
    ],
    correctAnswer: 2,
    explanation:
      "Boundary Value Analysis is a black-box technique where input values at the edges of valid ranges are tested.",
  },
  {
    id: 37,
    question: "What is the main focus of Quality Assurance (QA)?",
    options: [
      "Finding bugs in the software",
      "Ensuring test scripts run smoothly",
      "Improving and standardizing development processes",
      "Executing test cases manually",
    ],
    correctAnswer: 2,
    explanation:
      "QA focuses on improving and standardizing the processes to ensure quality from the start, rather than detecting issues afterward.",
  },
  {
    id: 38,
    question: "What does 'Portability' refer to in software quality?",
    options: [
      "Ability to maintain the code",
      "Ability to reuse code",
      "Ability to use the software across platforms",
      "Ability to scale with demand",
    ],
    correctAnswer: 2,
    explanation:
      "Portability refers to the software’s ability to operate on different hardware or software environments with minimal modification.",
  },
  {
    id: 39,
    question: "Which tool is commonly used for performance testing?",
    options: ["JIRA", "Selenium", "JMeter", "GitHub"],
    correctAnswer: 2,
    explanation:
      "JMeter is a popular tool used for performance and load testing of web applications.",
  },
  {
    id: 40,
    question: "Which metric helps identify how complex a codebase is?",
    options: [
      "MTBF",
      "Cyclomatic Complexity",
      "Defect Density",
      "Test Case Pass Rate",
    ],
    correctAnswer: 1,
    explanation:
      "Cyclomatic Complexity measures the number of independent paths through a codebase, indicating its complexity and maintainability.",
  },
  {
    id: 41,
    question:
      "Which type of testing evaluates a system’s ability to recover from crashes?",
    options: [
      "Reliability Testing",
      "Stress Testing",
      "Recovery Testing",
      "Compliance Testing",
    ],
    correctAnswer: 2,
    explanation:
      "Recovery Testing ensures that the system can recover gracefully after failures or crashes.",
  },
  {
    id: 42,
    question: "What is the goal of Localization Testing?",
    options: [
      "Ensure APIs return correct data",
      "Check translation and regional formatting",
      "Validate cross-browser functionality",
      "Evaluate response under load",
    ],
    correctAnswer: 1,
    explanation:
      "Localization Testing verifies that the application works correctly in different languages, regions, and cultural settings.",
  },
  {
    id: 43,
    question: "What is meant by 'Escaped Defects'?",
    options: [
      "Bugs found during initial testing",
      "Defects found in code reviews",
      "Issues that were missed during testing and found after release",
      "Bugs caused by user errors",
    ],
    correctAnswer: 2,
    explanation:
      "Escaped Defects are those that were not detected during testing and were discovered post-release in the live environment.",
  },
  {
    id: 44,
    question:
      "Which standard provides guidelines for Software Quality Assurance Plans?",
    options: ["IEEE 730", "ISO/IEC 25010", "CMMI", "ISO 27001"],
    correctAnswer: 0,
    explanation:
      "IEEE 730 is the standard for Software Quality Assurance Plans, outlining how to manage quality during development.",
  },
  {
    id: 45,
    question:
      "Which metric represents average time between one failure and the next?",
    options: ["MTTF", "MTTR", "MTBF", "Build Success Rate"],
    correctAnswer: 2,
    explanation:
      "Mean Time Between Failures (MTBF) = MTTF + MTTR. It indicates the reliability of the system over time.",
  },
  {
    id: 46,
    question: "What does 'Code Churn' measure?",
    options: [
      "Number of lines covered in tests",
      "Changes in code lines over time",
      "System uptime after release",
      "Time to write test cases",
    ],
    correctAnswer: 1,
    explanation:
      "Code Churn measures the number of lines added, modified, or deleted, providing insight into code stability and refactoring frequency.",
  },
  {
    id: 47,
    question: "What is a key benefit of Equivalence Partitioning?",
    options: [
      "Ensures loop iterations run correctly",
      "Reduces number of test cases while maintaining coverage",
      "Maximizes code reuse",
      "Improves UI responsiveness",
    ],
    correctAnswer: 1,
    explanation:
      "Equivalence Partitioning reduces the number of test cases by selecting representative values from input partitions.",
  },
  {
    id: 48,
    question: "Which testing technique uses rules and input-output mapping?",
    options: [
      "Decision Table Testing",
      "Path Coverage",
      "Stress Testing",
      "Exploratory Testing",
    ],
    correctAnswer: 0,
    explanation:
      "Decision Table Testing systematically tests combinations of conditions and corresponding actions using tabular formats.",
  },
  {
    id: 49,
    question: "What is the goal of Compatibility Testing?",
    options: [
      "Check legal compliance",
      "Check cross-browser and cross-device consistency",
      "Measure application speed",
      "Check defect density across modules",
    ],
    correctAnswer: 1,
    explanation:
      "Compatibility Testing ensures that the application works consistently across different browsers, devices, and operating systems.",
  },
  {
    id: 50,
    question: "What does the 'Improve' phase in Six Sigma aim to achieve?",
    options: [
      "Identify defects",
      "Monitor changes",
      "Eliminate root causes of defects",
      "Review documentation",
    ],
    correctAnswer: 2,
    explanation:
      "The 'Improve' phase focuses on implementing solutions that eliminate the root causes identified during the 'Analyze' phase.",
  },
  {
    id: 51,
    question:
      "Which testing type involves quick, informal checks without documentation?",
    options: [
      "Sanity Testing",
      "Ad-hoc Testing",
      "Alpha Testing",
      "Compliance Testing",
    ],
    correctAnswer: 1,
    explanation:
      "Ad-hoc Testing involves informal, unstructured testing to quickly identify defects without planning or documentation.",
  },
];

export default QUIZ_DATA;
