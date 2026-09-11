// Edit this file to update the portfolio. Arrays control display order.
const repo = name => `https://github.com/PranaySadavarte/${name}`;
export const Profile = {
 name:'Pranay Hemant Sadavarte', shortName:'Pranay Sadavarte', initials:'PS', location:'San Jose, California',
 headline:'Software Quality, Automation & AI-Driven Systems Engineer',
 heroTitle:['Engineering reliability.','Building intelligence.'],
 statement:'I build scalable automation, validation systems, developer tooling, and intelligent workflows for complex software and device platforms.',
 secondary:'From device operating systems and wireless validation to AI-assisted automation and intelligent applications, I focus on making complex systems measurable, reliable, and easier to understand.',
 roles:['SDET','QA Automation Engineer','Validation & Tools Engineer','Device OS Engineer','AI-Driven Quality Engineer','Systems Validation Engineer'],
 email:'phsadavarte@gmail.com', resumeUrl:'https://resume-pranay-sadavarte.tiiny.site',
 contact:'Let’s build reliable systems, scalable automation, and intelligent engineering tools.',
 heroNodes:['Python','AI','LLMs','Selenium','Appium','pytest','Jenkins','Git','Linux','Android','Device OS','Perfetto','Wireshark','Wi-Fi','Bluetooth','CI/CD','Observability'],
 about:[
 'Engineer with experience across device software quality, validation infrastructure, test automation, connectivity, platform software, and developer tooling.',
 'At Amazon Lab126, I worked across Connectivity, WebView, and Application Framework components of consumer-device operating systems, building automation and investigating complex system behavior across software, networking, lifecycle, and performance layers.',
 'I currently work as a Validation and Tools Engineer at ALSO, focusing on scalable validation, authentication workflows, mobile platforms, automation infrastructure, and tooling.',
 'My current technical direction combines software and quality engineering with AI, LLM-powered workflows, intelligent automation, speech technologies, recommendation systems, and autonomous engineering tools.'
 ],
 journey:['Embedded / Electronics','Software & Web','Automation / Device Systems','Validation & Tools','AI / Intelligent Automation'],
 pipeline:['Devices','Telemetry','Automation','Analysis','AI','Decision']
};
export const SocialLinks = [
 {name:'GitHub',url:'https://github.com/PranaySadavarte'},
 {name:'LinkedIn',url:'https://www.linkedin.com/in/pranaysadavarte/'},
 {name:'Portfolio',url:'https://pranaysadavarte.github.io/'}
];
export const Metrics = [
 {value:'35%',label:'Less execution time',detail:'Approximate reduction in automation test execution time'},
 {value:'400+',label:'Test cases automated',detail:'Unique cases automated during a high-velocity automation effort'},
 {value:'100+',label:'Performance scenarios',detail:'Automated time-to-first-frame (TTFF) scenarios across applications'},
 {value:'20+',label:'Device configurations',detail:'Configurations used in connectivity automation'},
 {value:'3',label:'Device OS domains',detail:'Connectivity · WebView · Application Framework'}
];
export const Experience = [
 {company:'ALSO',title:'Validation and Tools Engineer',dates:'May 2026 – Present',location:'California, USA',current:true,
 description:'Build and support validation systems, automation infrastructure, and engineering tools for mobile and software platform workflows.',
 highlights:['Python-based validation and reusable tooling for Android and iOS.','Authentication and account workflows: Google Sign-In, Apple Sign-In, and email OTP validation.','Parallel testbeds, automated execution, CI integration, and test infrastructure.','Defect investigation, failure triage, improved test coverage, engineering documentation, and cross-functional collaboration.'],
 technologies:['Python','Android','iOS','Authentication','CI','Test infrastructure']},
 {company:'Amazon Lab126',title:'Quality Assurance Engineer – Device OS',dates:'June 2024 – May 2026',location:'Sunnyvale, California',
 description:'Developed automation, validation infrastructure, and diagnostic workflows for Amazon consumer-device operating systems across Fire TV, Fire Tablet, Echo, Fire OS, and VegaOS environments.',
 highlights:['Reduced automation execution time by approximately 35%.','Automated 400+ unique test cases and 100+ performance / TTFF scenarios.','Recognized internally as an “Automation Expert.”'],
 technologies:['Python','Selenium','Appium','pytest','Jenkins','Device farms'],
 progression:['Connectivity','WebView','Application Framework'],
 domains:[
 {name:'Application Framework',description:'Validated app lifecycle, foreground/background transitions, process termination, IPC behavior, startup, package behavior, platform services, and system reliability.',tags:['Lifecycle Manager','Security Manager','Background Work Manager','Idle Manager','STEMD','Message Router','Vega Failure Manager','Package Manager','Asset Resolver','Resource Manager','Event Manager','Service Registrar']},
 {name:'Performance & Observability',description:'Used Perfetto traces when traditional logs were insufficient to explain deeper device behavior. Investigated pre-main/post-main timing, TTFF, KPIs, failures, and root causes.',tags:['Perfetto','System traces','TTFF','logcat','adb','System logs','KPI validation','Root-cause analysis']},
 {name:'WebView',description:'Built Selenium automation and release validation for Chromium / WebView, media playback, HDR, codecs, DRM, FPS, playback quality, and degraded networks.',tags:['Selenium','Chromium','WebView','HTML/CSS','HDR','DRM','Media playback']},
 {name:'Connectivity',description:'Validated wireless and wired device behavior using packet captures, access-point configuration, attenuation chambers, traffic generators, RvR testing, and Bluetooth snoop logs.',tags:['Wi-Fi','Bluetooth','BLE','Zigbee','Ethernet','Cellular concepts','tcpdump','Wireshark','iPerf','RSSI','SNR','MCS','QAM','QPSK','BPSK','Throughput','Packet loss','Latency','Roaming','Coexistence','Knee point']}
 ]},
 {company:'ThinkRound',title:'Software Developer (Volunteer)',dates:'February 2024 – Present',location:'San Francisco, California',
 description:'Contribute to collaborative web application development, improving functionality, user experience, and navigation through research, implementation, and testing.',
 highlights:['Develop front-end and back-end components and user-friendly interfaces.','Research implementation approaches, define project requirements, and test new functionality.','Iterate on user feedback to improve interaction and navigation.','Collaborate with the team, document navigation and functionality, and evaluate project work against organizational goals.'],
 technologies:['Web development','Front-end development','Back-end development','UI / UX','Testing','User research']},
 {company:'Lennox International',title:'Controls QA Co-Op / Engineering Intern',dates:'June 2023 – December 2023',location:'',
 description:'Combined embedded development, device validation, and Python automation to improve engineering workflows and controls QA.',
 highlights:['Firmware work on M4, W4, and C4 controller platforms; JSON/jsoncpp migration.','BLE development and validation, mobile workflows, and OOBE validation automation.','Artifact upload automation and a test-search utility with Python, Tkinter, and Pandas.','Focused on engineering efficiency, QA coverage, development time, and hardware/platform cost reduction.'],technologies:['Python','C','C++','BLE','Firmware','JSON','Tkinter','Pandas']},
 {company:'University of Texas at Dallas',title:'Web Developer Student Assistant',dates:'September 2022 – June 2023',location:'',description:'Built and maintained web content systems and event portals through collaborative Agile/Scrum workflows.',highlights:['WordPress and front-end development for university web experiences.','HTML, CSS, content systems, and event portals.'],technologies:['WordPress','HTML','CSS','Agile / Scrum']}
];
export const Skills = [
 {name:'AI & Intelligent Systems',short:'AI & intelligence',accent:true,context:'Current learning, experimentation & project work',items:['Artificial Intelligence','LLM Applications','AI Agents','Agentic Workflows','Prompt Engineering','AI-assisted Automation','AI-driven Quality Engineering','Intelligent Failure Analysis','Speech Recognition','Recommendation Systems','Model Inference','Local LLMs','Human-in-the-loop Automation','TensorFlow','AI APIs','AI Tool Integration']},
 {name:'Software',short:'Software',items:['Python','Java','C','C++','JavaScript','SQL','Bash','HTML','CSS']},
 {name:'Automation',short:'Automation',items:['Selenium','Appium','pytest','WebDriver','UI Automation','Mobile Automation','Regression Testing','Functional Testing','End-to-End Testing','Automation Framework Development']},
 {name:'Device & Platform Engineering',short:'Device & platform',items:['Android','iOS','Fire OS','VegaOS','WebView','Chromium','Linux','Unix','Application Lifecycle','IPC','Embedded Systems']},
 {name:'CI/CD & Development',short:'CI/CD & development',items:['Jenkins','Git','GitHub','CI/CD','Docker','Jira','Code Reviews','Release Validation']},
 {name:'Observability & Debugging',short:'Observability',items:['ADB','Logcat','Perfetto','System Traces','Wireshark','tcpdump','iPerf','Root Cause Analysis','Failure Triage','Performance Analysis']},
 {name:'Connectivity',short:'Connectivity',items:['Wi-Fi','Bluetooth','BLE','Zigbee','Ethernet','TCP/IP','Wireless Performance','RSSI','SNR','Throughput','Latency','Roaming']}
];
export const Projects = [
 {name:'DinnerCue Movie Match',category:'Recommendation Systems / Full-Stack Engineering',type:'AI & software',description:'An intelligent movie and TV discovery application that combines personalized preferences, social recommendations, contextual signals, availability, and novelty to produce explainable rankings.',technologies:['Python','Flask','SQLite','REST APIs'],highlights:['Movie and TV search, autocomplete, watched history, taste quiz, and genre/runtime/content filters.','Watchlists, Surprise Me selection, trailer discovery, and streaming availability links.','Trusted recommenders, friendships, reviews, and direct social recommendations.','Authentication, HTTP-only sessions, password hashing, and automated recommendation tests.'],architecture:['User','Taste + Friends + Context','Candidate movies','Ranking engine','Recommendation'],concepts:['Personal taste','Trusted friends','Streaming availability','Current context','Novelty'],githubUrl:repo('dinnercue-movie-match'),demoUrl:'',image:'',featured:true,visual:'recommendation'},
 {name:'VoiceGuard Speech Monitor',category:'Speech AI / Python / Real-Time Systems',type:'AI & software',description:'A configurable desktop application that performs near-real-time speech transcription, detects user-defined terms and phrases, highlights matches, and maintains live scoring and frequency analytics.',technologies:['Python','SpeechRecognition','Tkinter','pytest'],highlights:['Google Web Speech API with multithreading and event queues.','Separated detection and scoring logic, thread-safe UI architecture, and deterministic business logic.','Configurable vocabulary, live statistics, automated tests, Ruff, GitHub Actions, and CI.','Roadmap: Offline Whisper / faster-whisper support, local speech recognition, context-aware classification, false-positive reduction, and privacy-preserving summaries.'],architecture:['Microphone','Google Speech Recognition','Thread-safe queue','Detection engine','Score tracker','Tkinter UI'],concepts:['Speech AI','Text processing','Concurrency','Testable business logic'],githubUrl:repo('voiceguard-speech-monitor'),demoUrl:'',image:'',featured:true,visual:'waveform'},
 {name:'Engineering Impact Dashboard',category:'Developer Analytics / Data Tooling',type:'AI & software',description:'A deploy-ready Streamlit dashboard that analyzes GitHub pull-request activity and converts engineering contribution signals into an interactive impact-ranking system.',technologies:['Python','Streamlit','GitHub API','Data visualization'],highlights:['Engineer leaderboard and top-performer analysis.','Score distributions, percentile views, and dynamic ranking explanations.','Contribution breakdown, work-style analysis, and PR complexity analysis.','Live GitHub API data and automated scoring.'],architecture:['GitHub PR activity','Contribution signals','Scoring','Interactive dashboard'],concepts:['Developer analytics','Explainable scoring','PR complexity'],githubUrl:repo('PostHog_Engineers_Impact_Dashboard'),demoUrl:'',image:'',featured:true,visual:'dashboard'},
 {name:'Gesture Recognition using TensorFlow',category:'Computer Vision / AI',type:'AI & software',description:'Computer-vision project exploring custom gesture recognition using TensorFlow’s object-detection ecosystem. An earlier foundation for my continuing interest in AI.',technologies:['TensorFlow','Python','Computer Vision','Object Detection'],highlights:['Custom gesture recognition and model training with TensorFlow’s object-detection ecosystem.'],architecture:['Gesture images','Model training','Object detection'],concepts:['Model Training','Computer Vision','AI'],githubUrl:repo('Gesture-Recognition-using-TensorFlow'),demoUrl:'',image:'',featured:false,visual:'vision'},
 {name:'Gesture Keyboard',category:'Embedded Systems / Human-Computer Interaction',type:'Embedded',description:'An embedded gesture-based input system designed to recognize physical movement patterns and translate them into typed characters.',technologies:['Arduino','Python','Sensor data','Gesture processing'],highlights:['Movement recognition and gesture processing for human-computer interaction.'],architecture:['Movement','Sensor data','Gesture processing','Typed characters'],concepts:['Embedded Systems','Human-computer interaction'],githubUrl:repo('Gesture-Keyboard'),demoUrl:'',image:'',featured:false},
 {name:'Gesture Recognizing Smart Glove',category:'Embedded Assistive Technology',type:'Embedded',description:'A microcontroller-based assistive system translating hand gestures into text and speech.',technologies:['Microcontrollers','Flex sensors','Embedded electronics'],highlights:['Gesture detection and text/speech conversion for assistive technology.'],architecture:['Hand gesture','Flex sensors','Microcontroller','Text / speech'],concepts:['Assistive Technology','Gesture Detection'],githubUrl:repo('Gesture-Recognizing-smart-glove'),demoUrl:'',image:'',featured:false},
 {name:'Wi-Fi Controlled Four-Wheel Drive',category:'IoT / Embedded / Wireless',type:'Embedded',description:'A wireless four-wheel-drive platform with Android control over Wi-Fi.',technologies:['NodeMCU ESP8266','Wi-Fi','Android','Motor control'],highlights:['Embedded motor control and wireless interaction.'],architecture:['Android','Wi-Fi','ESP8266','Motors'],concepts:['IoT','Wireless Control'],githubUrl:repo('Wi-Fi-4WD-Using-NodeMCU-8266'),demoUrl:'',image:'',featured:false}
];
export const HardwareProjects = [
 ['Bluetooth Controlled 2WD','Android-Bluetooth-Controlled-Two-Wheel-Drive-2WD'],['Obstacle Detecting 4WD','Obstacle-Detecting-Four-Wheel-Drive-4WD'],['Ultrasonic Distance Measurement','Distance-measurement-using-Ultrasonic-Sensor-and-Arduino'],['PIR Motion Detection','Motion-detection-using-Passive-Infrared-PIR-Sensor'],['TFT Touchscreen Calculator','Touchscreen-TFT-Calculator'],['4×4×4 LED Cube','LED-Cube-4x4x4'],['LASER / Li-Fi Sound Transmission','Sound-Transmission-using-LASER']
].map(([name,path])=>({name,githubUrl:repo(path)}));
export const AIStory = {
 title:'From Automation to Intelligent Automation',
 description:'My AI direction builds naturally on years of automation and systems validation. Instead of treating AI as a separate discipline, I focus on using AI to improve engineering workflows, recommendations, diagnostics, speech systems, and automation.',
 stages:['Traditional Automation','System Observability','Data & Traces','Intelligent Analysis','LLMs / AI Models','AI Agents','Autonomous Quality Systems'],
 learning:['AI agents','LLM orchestration','Local model inference','Hugging Face models','Gemini','Tool-calling','AI APIs','Recommendation systems','Speech AI','Intelligent test automation','Failure analysis','Human-in-the-loop systems']
};
export const Education = [
 {degree:'M.S. Computer Engineering',school:'University of Texas at Dallas',dates:'2022–2023',coursework:['Artificial Intelligence','Machine Learning','Advanced Operating Systems','Algorithms','Computer Architecture','Information Security','Advanced Digital Logic','Microprocessors & Embedded Systems','Operating Systems']},
 {degree:'B.E. Electronics Engineering',school:'University of Mumbai',dates:'2015–2019',coursework:[]}
];
export const Credentials = [
  {
    "name": "IBM Applied AI Professional Certificate",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/c8c731cf-3b18-44a0-8ca1-34973bafcbab",
    "badge": "./assets/credential-3.png",
    "verified": true
  },
  {
    "name": "Introduction to Programming using Python",
    "issuer": "Microsoft",
    "url": "https://www.credly.com/badges/f10a5ad2-e9d4-4a59-86ca-931e980b0417?source=linked_in_profile",
    "badge": "./assets/credential-0.png",
    "verified": true
  },
  {
    "name": "Python for Data Science and AI",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/aa32faa1-1a1b-4f0d-929c-4f511934e88a",
    "badge": "./assets/credential-1.png",
    "verified": true
  },
  {
    "name": "Introduction to MongoDB",
    "issuer": "MongoDB",
    "url": "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    "badge": "",
    "verified": false
  },
  {
    "name": "Watson AI Application Building Practitioner",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/909aa707-1dbb-4f31-9bf9-b0ea49f58413",
    "badge": "./assets/credential-4.png",
    "verified": true
  },
  {
    "name": "Artificial Intelligence Foundation Specialist",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/81d6b889-f783-4c4f-9f84-1e0abe5822e1",
    "badge": "./assets/credential-5.png",
    "verified": true
  },
  {
    "name": "Chatbot Building Essentials",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/66e39030-6806-4d60-9331-e4d35882172d",
    "badge": "./assets/credential-6.png",
    "verified": true
  },
  {
    "name": "Introduction to Artificial Intelligence",
    "issuer": "IBM",
    "url": "https://www.coursera.org/account/accomplishments/verify/6GH9W7H8FU96",
    "badge": "",
    "verified": false
  },
  {
    "name": "Getting started with AI using IBM Watson",
    "issuer": "IBM",
    "url": "https://www.credly.com/badges/52ba6232-8150-45e7-9e1a-a2b170358f16",
    "badge": "./assets/credential-8.png",
    "verified": true
  }
];
export const UI = {nav:[['Home','home'],['About','about'],['Experience','experience'],['Engineering Impact','impact'],['Skills','skills'],['AI & Projects','projects'],['Education','education'],['Achievements','achievements'],['Contact','contact']],sections:{about:['01 / THE ENGINEER','Systems thinking.','From the ground up.'],experience:['02 / CAREER TRAJECTORY','Built on experience.','Driven by curiosity.'],impact:['03 / ENGINEERING IMPACT','Reliability, measured.',''],skills:['04 / SKILLS UNIVERSE','Connected expertise.',''],projects:['05 / SELECTED WORK','Ideas into','working systems.'],education:['07 / FOUNDATIONS','The foundations behind the work.',''],achievements:['08 / RECOGNITION','Always building. Always learning.','']},achievement:'Automation Expert',achievementText:'Internal recognition at Amazon Lab126 for automation expertise.',footer:'Systems knowledge. Automation depth. AI-forward engineering.'};

export const Portrait = { image:'./assets/pranay-portrait-sharp.png',alt:'Pranay Sadavarte smiling in a black jacket',caption:'Pranay Sadavarte',detail:'SYSTEMS THINKER · BUILDER' };
export const Organizations = [
 {name:'ThinkRound',image:'./assets/thinkround.png',url:'https://www.thinkround.org/',kind:'company'},
 {name:'ALSO',image:'./assets/also.svg',url:'https://ridealso.com/',kind:'company'},
 {name:'Amazon Lab126',image:'./assets/amazon.png',url:'https://www.amazon.jobs/content/en/teams/devices-and-services/lab126',kind:'company'},
 {name:'Lennox International',image:'./assets/lennox.png',url:'https://www.lennox.com/',kind:'company'},
 {name:'University of Texas at Dallas',image:'./assets/utd.png',url:'https://www.utdallas.edu/',kind:'university'},
 {name:'University of Mumbai',image:'./assets/mumbai.png',url:'https://mu.ac.in/',kind:'university'}
];
export const TechnologyBadges = ['Python','TensorFlow','Selenium','pytest','Jenkins','Git','Linux','Android','Docker','JavaScript'].map(name=>({name,image:'./assets/tech-'+name.toLowerCase()+'.svg'}));
export const Showcase = {title:'The tools. The teams. The learning.',description:'Credentials earned, technologies explored, and teams I’ve contributed to.',tabs:['Credentials','Technologies','Teams'],credentialNote:'Open a credential to view its issuer record.',technologyNote:'Engineering tools and project technologies. AI and intelligent systems include current learning and experimentation.',teamNote:'Professional experience across device platforms, validation, embedded systems, and the web.'};
