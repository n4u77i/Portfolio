import emoji from "react-easy-emoji";

export const greetings = {
	name: "Nautash Ahmad",
	title: "Hello there! I, Nautash Ahmad welcome you here.",
	description:
		"I'm a Software Engineer (Backend Developer) working in Python (Django, Flask, Fast API) & NodeJS (TypeScript). I mainly build the APIs (REST & GraphQL) and do the deployment stuff. \
		I have dockerized Python and NodeJS apps, deployed them to Kubernetes cluster. I am also working in cloud platforms like Google Cloud and AWS.",
	resumeLink:
		"https://drive.google.com/uc?export=download&id=1FHMtSxSCIDZd6v0MS80nFiv-uPmuge1Q",
};

export const openSource = {
	githubUserName: "n4u77i",
};

export const contact = {};

export const socialLinks = {
	twitter: "https://twitter.com/Nautash_Ahmad",
	github: "https://github.com/n4u77i",
	linkedin: "https://www.linkedin.com/in/nautash-ahmad",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY BACKEND DEVELOPER WHO LOVES TO EXPLORE EVERY NEW TECH",
	data: [
		{
			title: "Backend Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building micro-service architecture apps in Python and NodeJS"
					),
				emoji(
					"⚡ Building RESTful APIs in Django, Flask & Fast API and GraphQL APIs"
					),
				emoji("⚡ Implemented app profiling and metrics for optimization"),
			],
			softwareSkills: [
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "logos:flask",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "PM2",
					fontAwesomeClassname: "logos:pm2",
				},
				{
					skillName: "GraphQL",
					fontAwesomeClassname: "logos:graphql",
				},
				{
					skillName: "Prisma ORM",
					fontAwesomeClassname: "logos:prisma",
				},
				{
					skillName: "YAML",
					fontAwesomeClassname: "logos:yaml",
				},
				{
					skillName: "Bash",
					fontAwesomeClassname: "logos:bash-icon",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining webapps on virtual machine instances with Nginx reverse proxy ingress"
				),
				emoji(
					"⚡ Integration of databases with webapps either running in Docker or Google Cloud"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated deployment to Google Kubernetes Engine using Bitbucket"
				),
				emoji(
					"⚡ Integration of New Relic for gathering metrics of applications and machines"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "GCP",
					fontAwesomeClassname: "logos:google-cloud",
				},
				{
					skillName: "DigitalOcean",
					fontAwesomeClassname: "logos:digital-ocean",
				},
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},
				{
					skillName: "Linux",
					fontAwesomeClassname: "logos:linux-tux",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "logos:github-icon",
				},
				{
					skillName: "Gitlab",
					fontAwesomeClassname: "logos:gitlab",
				},
				{
					skillName: "Bitbucket",
					fontAwesomeClassname: "logos:bitbucket",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "New Relic",
					fontAwesomeClassname: "logos:new-relic-icon",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Neo4j",
					fontAwesomeClassname: "logos:neo4j",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend Development", //Insert stack or technology you have experience in
		// progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "API Development",
		// progressPercentage: "70",
	},
	{
		Stack: "Object Oriented Programming",
		// progressPercentage: "60",
	},
	{
		Stack: "Data Structures",
		// progressPercentage: "60",
	},
	{
		Stack: "Application Profiling",
		// progressPercentage: "60",
	},
	{
		Stack: "Load Balancing",
		// progressPercentage: "60",
	},
	{
		Stack: "Reverse Proxy",
		// progressPercentage: "60",
	},
	{
		Stack: "Ingress",
		// progressPercentage: "60",
	},
	{
		Stack: "Web Hosting",
		// progressPercentage: "60",
	},
	{
		Stack: "Virtualization",
		// progressPercentage: "60",
	},
	{
		Stack: "Containerization",
		// progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Engineering and Technology (UET Taxila) - (CASE)",
		subHeader: "Bachelors of Science in Computer Science (BSCS)",
		duration: "September 2017 - April 2021",
		// desc: "Participated in the research of XXX and published 3 papers.",
		// grade: "Grade A",
		descBullets: [
			"Participated in the speed programming competition organized by IEEE society members.",
			"Attended the workshop for creating static sites with Adobe.",
			"Attended a seminar on Cyber Security.",
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "TrailFive Technologies",
		companylogo: "/img/icons/common/trailfive_technologies.jpeg",
		date: "Dec 2021 – Present",
		// desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
		descBullets: [
			"Worked on a Django-based web app from design to implementation in a team.",
			"Integrated OAuth2 authentication of Google and LinkedIn using their APIs in a Django app.",
			"Added features to post on LinkedIn and Youtube using their APIs for a social media management web app.",
			"Implemented the CRUD functionality in Flask and Django apps.",
			"Worked on a NodsJS project, along with Prisma ORM and GraphQL for creating API endpoints.",
			"Implemented the app profiling and metrics which helped the team to reduce GraphQL queries response time from 5 - 10 secs to 100 - 300 ms.",
			"Integrated New Relic with the apps to send metrics and optimize the app.",
			"Deployed Python and NodeJS apps to Nginx server on Google Compute and Contabo instances.",
			"Dockerized apps and deployed them to Google Kubernetes Engine (GKE).",
			"Implemented Nginx reverse proxy ingress to host multiple sites on a single GCP Compute which reduced cost by 70$ - 80$ per month.",
		],
	},
	{
		role: "DevOps Support Engineer",
		company: "CloudPages",
		companylogo: "/img/icons/common/cloudpages.jpeg",
		date: "Oct 2021 – Dec 2021",
		// desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		descBullets: [
			"Deployed DigitalOcean droplets for installation and configuration of servers.",
			"Installed and configured OpenLiteSpeed server along with Web hosting control panel CyberPanel on Ubuntu machines.",
			"Hosted several WordPress-based e-commerce sites through CyberPanel.",
			"Deployed CloudPages Web hosting control panel on Amazon Lightsail VPS.",
			"Maintained DNS records of sites in Cloudflare DNS.",
			"Migrated sites from one server to another server.",
			"Generated local and remote backups of WP sites and also restored them.",
			"Installed wildcard SSL certificates for domains and associated subdomains.",
			"Manually did website testing for CyberPanel and CloudPages dashboards and identified the issues.",
			"Written technical articles and did SEO for them.",
		],
	},
	{
		role: "Exploit Developer Intern",
		company: "Sectechs",
		companylogo: "/img/icons/common/sectechs.jpeg",
		date: "May 2021 - June 2021",
		// desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
		descBullets: [
			"Exploited stack-based buffer overflow vulnerabilities in several applications of Windows for RCE.",
			"Written exploits for Unicode and SEH buffer overflows.",
			"Used ROP technique to bypass DEP.",
			"Created PoC for each exploit and did report writing.",
		],
	},
	{
		role: "Research Intern",
		company: "Secisys",
		companylogo: "/img/icons/common/secisys.jpeg",
		date: "Feb 2021 - Apr 2021",
		// desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets: [
			"Researched vulnerabilities which were discovered that affected Apple Smart Watches, iPhones, and macOS.",
			"Created virtualized home-lab for iPhone testing using exploits available on GitHub.",
		],
	},
];

export const projects = [
	{
		name: "Djaminn | Collaborative Music Making Platform",
		desc: "Djaminn a is music collab app. I have created GraphQL endpoints and did deployment on Google Cloud Platform. Collaborated with the Ukranian frontend devs team along with my project teammates and handled communication with the frontend team.",
		tech: "NodeJS, TypeScript, Prisma ORM, GraphQL, Docker, Kubernetes, GKE, GCP, CI/CD, PM2",
		// github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://www.djaminn.com/",
	},
	{
		name: "Flask Abundance Bot",
		desc: "Converted desktop based crypto app to web. It was previously written in Tkinter but then shifted it to Flask with team member.",
		tech: "Python, Flask, Tkinter, JavaScript, JQuery, Ajax, Docker, Contabo",
		// github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Social Media Management Tool",
		desc: "Created social media management which authenticates with LinkedIn, Youtube and other social platforms and posting to these platofrms using their APIs.",
		tech: "Python, Django, Jinja, JavaScript, JQuery, Ajax, Pythonanywhere"
		// github: "https://github.com/1hanzla100/django-react-forum",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Nautash Ahmad",
	description:
		"A passionate Software Engineer and Devops Engineer.",
	author: "Nautash Ahmad",
	image: "https://media-exp1.licdn.com/dms/image/C4D03AQEYmagkCVQxPA/profile-displayphoto-shrink_200_200/0/1612650995275?e=1668038400&v=beta&t=y26t-n3Tw9No98jLJPS6Mc1AT1SP-0nqzMIQCa5Ust8",
	url: "https://www.nautashahmad.com",
	keywords: [
		"Nautash",
		"Nautash Ahmad",
		"nautash",
		"nautash ahmad",
		"Portfolio",
		"Nautash Portfolio ",
		"Nautash Ahmad Portfolio",
	],
}