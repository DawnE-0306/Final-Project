const organization = [
  {
    name: "Central Supreme Government",
    description: "cdhkbsdjvknsndvlsndvksdvsd",
  },
  {
    name: "Central Supreme",
    description: "cdhkbsdjvknsndvlsndsd",
  },
  {
    name: "Central Government",
    description: "cdhkbsnsndvlsndvksdvsd",
  },
  {
    name: " Supreme Government",
    description: "kbsdjvknsndvlsndvksdvsd",
  },
  {
    name: "Central Government",
    description: "cdhkbsnsndvlsndvksdvsd",
  }
]

const programs = [
  {
    department: "College of Information Technology",
    description: "",
    course: "Bachelor of Science in Information Technology",
    major: "",
    logo: ""
  },
  {
    department: "College of Teachers Education",
    description: "",
    course: [
      {
        name: "Bachelor of Elementary Education"
      },
      {
        name: "Bachelor of Secondary Education"
      }
    ],
    major: "Major in English",
    logo: ""
  },
  {
    department: "College of Business Administration",
    description: "",
    course: "Bachelor of Science in Business Administration",
    major: [
      {
        name: "Major in Maarketing Management"
      },
      {
        name: "Major in Financial Management"
      }
    ],
    logo: ""
  },
]





let org = document.getElementById("result");

function sbo() {
org.innerHTML = "";
for (let i = 0; i < organization.length; i++) {

    org.innerHTML += `
      <div class="box1">
        <div>${organization[i].name}</div>
        <br>
        <div>${organization[i].description}</div>

      </div>
    `
}}