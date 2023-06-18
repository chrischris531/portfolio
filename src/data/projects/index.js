const university_projects = [
  {
    name: "SCARGlass",
    description:
      "A pair of smart glasses built for the Imperial College EIE Third Year Embedded Systems coursework.",
    images: [
      require("../../images/scarglass_1.jpg"),
      require("../../images/scarglass_2.jpg"),
    ],
    date: "Feb - Mar 2023",
    grade: "Not Received",
  },
  {
    name: "JAMES: Just Another Mars Exploration System",
    description:
      "A Mars Rover built for the Imperial College EIE Second Year Summer Project.",
    images: [
      require("../../images/james_1.jpg"),
      require("../../images/james_2.jpg"),
      require("../../images/james_3.jpg"),
      require("../../images/james_4.jpg"),
    ],
    date: "May - Jun 2022",
    grade: null,
  },
  {
    name: "VR Headset + FPGA Controller",
    description:
      "A VR headset controlled by an FPGA handset built for the Imperial College EIE Second Year Information Systems coursework.",
    images: [require("../../images/vr_1.jpg")],
    date: "Feb - Mar 2022",
    grade: "A**",
  },
  {
    name: "Digital Systems Design Coursework",
    description:
      "Optimisd an FPGA in software and hardware to perform a specific arithmetic function as fast as possible. Integrated DMA for faster memory access.",
    date: "Jan - Mar 2023",
    grade: "A**s and A*s",
  },
  {
    name: "Verilog MIPS CPU",
    description:
      "A MIPS CPU written in Verilog for the Imperial College EIE Second Year Instruction Architectures and Compilers coursework.",
    date: "Nov - Dec 2021",
    grade: "91%",
  },
  {
    name: "CPU Design",
    description:
      "A CPU designed and simulated in Imperial College's ISSIE software for the First Year Summer Project.",
    date: "May - Jun 2021",
    grade: "92.45%",
  },
];

const personal_projects = [
  {
    name: "Robotics YouTube Channel",
    description:
      "I spent the COVID-19 lockdown building entertaining robots, such as one that passes butter via catapult, and one that screams when within 2m of someone to enforce social distancing.",
    images: [require("../../images/yt_1.jpg")],
    date: "Apr - Sep 2020",
  },
  {
    name: "Robot Hand",
    description:
      "A robot hand built from scratch out of metal sheets and pipes that copies the actions of a human wearing a glove.",
    images: [require("../../images/hand.jpg")],
    date: "Apr - Sep 2019",
  },
];

const grades = [
  ["Subject", "Grade", "Date"],
  {
    name: "MEng Electronic & Information Engineering",
    value: "On track for a First",
    date: "2020 - Present",
  },
  {
    name: "Pre-U",
    nested: [
      {
        name: "Pre-U Mathematics",
        value: "D1 (equivalent to A**)",
        date: "2020",
      },
      {
        name: "Pre-U Further Mathematics",
        value: "D1 (equivalent to A**)",
        date: "2020",
      },
      { name: "Pre-U Physics", value: "D1 (equivalent to A**)", date: "2020" },
      { name: "Pre-U Latin", value: "D2 (equivalent to A*)", date: "2020" },
    ],
    date: "2020",
  },
  {
    name: "GCSE",
    nested: [
      { name: "GCSE Mathematics", value: "A*", date: "2018" },
      { name: "GCSE Physics", value: "9", date: "2018" },
      { name: "GCSE Chemistry", value: "9", date: "2018" },
      { name: "GCSE Biology", value: "9", date: "2018" },
      { name: "GCSE Geography", value: "9", date: "2018" },
      { name: "GCSE Latin", value: "9", date: "2018" },
      { name: "GCSE Ancient Greek", value: "9", date: "2018" },
      { name: "GCSE French", value: "A*", date: "2018" },
      { name: "GCSE English", value: "9", date: "2018" },
    ],
    date: "2018",
  },
];

const achievements = [
  ["Achievement", "Institution", "Date"],
  {
    name: "First Year Dean's List (80.32%)",
    value: "Imperial College London",
    date: "2021",
  },
  {
    name: "Ash Music Scholarship",
    value: "Imperial College London / Royal College of Music",
    date: "2020 - Present",
  },
  {
    name: "Engineering Prize",
    value: "Winchester College",
    date: "2020",
  },
  {
    name: "Latin Prize",
    value: "Winchester College",
    date: "2020",
  },
  {
    name: "Music Performance Prize",
    value: "Winchester College",
    date: "2020",
  },
  {
    name: "Academic Scholarship",
    value: "Winchester College",
    date: "2015 - 2020",
  },
  {
    name: "Music Scholarship",
    value: "Winchester College",
    date: "2015 - 2020",
  },
];

const work = [
  {
    role: "Quantitative Intern",
    name: "PrismFP",
    description:
      "I am currently a Quantitative Intern at PrismFP Analytics, where I have been responsible for building features of a FinTech SaaS product.",
    date: "Apr - Sep 2023",
  },
  {
    role: "Co-Founder & CTO",
    name: "Makrverse Ltd",
    description:
      "I co-founded Makrverse in my first year of university, and was responsible for building the mobile app and website as well as the backend, and later managed the development team of four developers. I played an integral role in the raising of $125,000 pre-seed funding.",
    date: "May 2021 - Aug 2022",
  },
  {
    role: "Intern",
    name: "EnSilica",
    description: "",
    date: "Summer 2019",
  },
  {
    role: "Intern",
    name: "Leonardo",
    description: "",
    date: "Summer 2019",
  },
  {
    role: "Intern",
    name: "Atkins",
    description: "",
    date: "Summer 2019",
  },
];

const extracurriculars = [
  {
    name: "Piano LTCL Diploma",
    date: "2017",
  },
  {
    name: "Violin & Viola Grade 7",
    date: "2015",
  },
  {
    name: "Orchestra Viola Section Lead",
    date: "2019/20",
  },
  {
    name: "ICL Lawn Tennis Society: LUSL team",
    date: "2022 - Present",
  },
  {
    name: "ICL Israel Tech Society: Tech Program Officer",
    date: "2022/23",
  },
  {
    name: "ICL Robotics Society: Chief Lab Manager",
    date: "2021/22",
  },
  {
    name: "Winchester College School Prefect",
    date: "2019/20",
  },
  {
    name: "Teach Primary School Debating Volunteering",
    date: "2019/20",
  },
  {
    name: "Teach Primary School Physics Volunteering",
    date: "2018/19",
  },
  {
    name: "Singing with Dementia Volunteering",
    date: "2017/18",
  },
];

let exported = {
  university_projects,
  personal_projects,
  grades,
  achievements,
  work,
  extracurriculars,
};

export default exported;
