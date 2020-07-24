/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Nagaveda Reddy",
	logo_name: "Nagaveda",
	nickname: "Veda..",
	subTitle:
		"A passionate CSE student willing to make an impact on the field of computer science by developing solutions for human problems with technology.",
	resumeLink:
		"https://drive.google.com/file/d/1FKZUsPc7-CSeEJADXxfDCO3Iahahi1Vb/view?usp=sharing",
	portfolio_repository: "https://github.com/nagaveda/masterPortfolio",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/nagaveda",
	linkedin: "https://www.linkedin.com/in/nagaveda999/",
	gmail: "gajjalanagaveda@karunya.edu.in",
};

const skills = {
  data: [
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Drawing insights from Data",
        "⚡ Machine Learning, data visualisation and Data analysis",
        "⚡ Quantitative modelling for time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux, Bootstrap, Jquery",
        "⚡ Implementing end to end Full stack web applications and deploy",
		"⚡ Creating application backend in NodeJS, ExpressJS & MongooseODM",
		"⚡ Managing Database technologies like MongoDB, Sql"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
		},
		{
			skillName: "MongoDB",
			fontAwesomeClassname: "simple-icons:mongodb",
			style: {
			  color: "#2C8EBB"
			}
		},
		
        
      ]
    },
    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Google cloud platform",
		"⚡ Hosting and maintaining websites on Heroku and Netlify",
		"⚡ Maintaining a Full fledged Database in Mongodb atlas"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
      ]
    },
    
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/nagaveda999"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@nagavedasaikumarreddy"
	},
	{
		siteName: "Datacamp",
		iconifyClassname: "simple-icons:datacamp",
		style: {
		  color: "#323754"
		},
		profileLink: "https://www.datacamp.com/profile/gajjalanagaveda"
	  },
    
  ]
}

const degrees = {
  degrees : [
    {
      title: "Karunya Institute of Technology and Sciences",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "kits_logo.png",
      alt_name: "Karunya University",
      duration: "2018 - 2022",
      descriptions: [
		"⚡ Recieved Academic incentive award for securing Highest SGPA and 100% attendance for the even semester 2018-19",
		"⚡ Recieved Academic incentive award for securing Highest SGPA and 100% attendance for the odd semester 2019-20",
        "⚡ I have done several courses on Machine Learning, Data Science and Full Stack Development.",
        "⚡ Got first prize in Hackathon conducted by KarunyaHacks"
      ],
      website_link: "https://www.karunya.edu/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Frontend Development with React",
			subtitle: "- Hongkong University of Science and Technology",
			logo_path: "hkuniv_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/2CD6F6EZE2ZV",
			alt_name: "Hongkong University",
			color_code: "#8C151599"
		},
		{
			title: "Machine Learning on GCP specialization",
			subtitle: "- Google cloud",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/certificate/D7A5BJVC7W3Q",
			alt_name: "Gcp Training",
			color_code: "#00000099"
		},
		{
			title: "Server-side Development with NodeJS, Express and MongoDB",
			subtitle: "- Hongkong University of Science and Technology",
			logo_path: "hkuniv_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/SP9YJZFTT9X8",
			alt_name: "Hongkong university",
			color_code: "#0C9D5899"
		},
		{
			title: "Data Scientist with Python",
			subtitle: "- Data Camp",
			logo_path: "datacamp_logo.png",
			certificate_link:
				"https://www.datacamp.com/statement-of-accomplishment/track/b9412c0ec36c698f9bcd9feef24ff5574c18b10f",
			alt_name: "Datacamp",
			color_code: "#1F70C199"
		},
		{
			title: "Feature Engineering",
			subtitle: "- Google cloud",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/TRCDBHNMU9GS",
			alt_name: "Google cloud",
			color_code: "#D83B0199"
		},
		{
			title: "Front-End Web UI Frameworks Bootstrap and Jquery",
			subtitle: "- Hongkong University of Science and Technology",
			logo_path: "hkuniv_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/N5KDTX5T9DD5",
			alt_name: "Hongkong University",
			color_code: "#1F70C199"
		},
		{
			title: "How Google does Machine Learning",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/6SCZWGRDV2D6",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Intro to Tensorflow",
			subtitle: "- Google cloud",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/R6ZY9P7X5GVT",
			alt_name: "google cloud",
			color_code: "#00000099"
		},
		{
			title: "Neural Networks and Deep Learning",
			subtitle: "- Deeplearning.ai",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/ZTF693ZMMRR8?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
			alt_name: "Deeplearning.ai",
			color_code: "#2A73CC"
		},
		{
			title: "Applied Machine Learning in Python",
			subtitle: "- University of Michigan",
			logo_path: "michuniv_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/2YJ7N36SET7Y?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate",
			alt_name: "University of Michigan",
			color_code: "#4285F499"
		},
		{
			title: "Machine Learning",
			subtitle: "- Stanford University",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/XWXVXPZ36E9E",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		},
		{
			title: "Full stack web development",
			subtitle: "- Udemy",
			logo_path: "udemy_logo.png",
			certificate_link:
				"https://www.udemy.com/certificate/UC-7VZ42FUA/",
			alt_name: "udemy",
			color_code: "#4285F499"
		},
		{
			title: "Cambridge Business English Certificate Vantage",
			subtitle: "- Cambridge Univeristy",
			logo_path: "camb_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1T_ERskBrs-XeYvxxmRm-UJH77i08-Er2/view",
			alt_name: "Cambridge",
			color_code: "#4285F499"
		},
		{
			title: "SQL and Relational Databases",
			subtitle: "- BigData University",
			logo_path: "bguniv_logo.png",
			certificate_link:
				"https://courses.cognitiveclass.ai/certificates/0cfac2d47d0949cc90ec9a5f47b01241",
			alt_name: "Bigdata University",
			color_code: "#4285F499"
		},
		{
			title: "Big Data Foundations Level - 1",
			subtitle: "- IBM",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.youracclaim.com/badges/02746dd2-87ad-4e62-b9ba-1adb40206b6e/linked_in_profile",
			alt_name: "IBM",
			color_code: "#4285F499"
		}

	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Internship and Volunteership",
	description:
		"I have experience in building projects with React, Nodejs, Mongodb, Express, Python, Javascript, Machine learning and Data science",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Internship",
			experiences: [
				{
					title: "Software engineering virtual Internship experience",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/en-in",
					logo_path: "microsoft_logo.png",
					duration: "Jun 2020 - present",
					location: "Virtual",
					description:
						"Getting an experience of the organizational culture at Microsoft and exploring azure features.",
					color: "#0879bf",
				},
				{
					title: "Data Science virtual Intern",
					company: "ANZ",
					company_url: "https://www.anz.com.au/personal/",
					logo_path: "anz_logo.png",
					duration: "May 2020 - Jun 2020",
					location: "Virtual",
					description:
						"Worked on Real world banking transactions data drawing insights by performing Exploratory Data Analysis and building Machine Learning models for predictive analytics",
					color: "#0879bf",
				}
				
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Technical Team member",
					company: "National Service Scheme",
					company_url: "https://nss.gov.in/",
					logo_path: "nss_logo.png",
					duration: "June 2019 - Present",
					location: "Karunya University, Coimbatore",
					description:
						"Conducted classes to students and gave them basic training on some technolgies like HTMl and scratch",
					color: "#4285F4",
				},
				{
					title: "GitHub Student Developer",
					company: "GitHub",
					company_url:
						"https://www.github.com",
					logo_path: "github_logo.png",
					duration: "Jan 2018 - present",
					location: "Remote",
					description:
						"Contributing to public repositories..",
					color: "#0C9D58",
				}
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects makes use of vast variety of latest technology tools. My best experience is to develop fully functional full stack web applications and machine learning models and to deploy them to the cloud.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "me.png",
		description:
			"I am available on linkedin and gmail. I can help you with ML, AI, React, NodeJS and Opensource Development.",
	},
	blogSection: {
		title: "Linkedin",
		subtitle:
			"Follow me on Linkedin",
		link: "https://www.linkedin.com/in/nagaveda999/",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle:
			"Vani street, Kadiri, Ananthapur Dist, Andhra pradesh - 515591",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/H7fGCUFPc76z617J6",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 9121739250",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
