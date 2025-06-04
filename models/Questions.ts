export type Answer = {
  answer: string
  isCorrect: boolean
}

export type Question = {
  question: string
  answers: Answer[]
}

export const Questions: Question[] = [
  {
    question: "What does HTML stand for?",
    answers: [
      { answer: "Home Tool Markup Language", isCorrect: false },
      { answer: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answer: "Hyper Transfer Markup Language", isCorrect: false },
      { answer: "Hyper Text Markup Language", isCorrect: true },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { answer: "Computer Style Sheets", isCorrect: false },
      { answer: "Cascading Style Sheets", isCorrect: true },
      { answer: "Colorful Style Sheets", isCorrect: false },
      { answer: "Creative Style Syntax", isCorrect: false },
    ],
  },
  {
    question: "Which language is used to add interactivity to a website?",
    answers: [
      { answer: "JavaScript", isCorrect: true },
      { answer: "HTML", isCorrect: false },
      { answer: "SQL", isCorrect: false },
      { answer: "CSS", isCorrect: false },
    ],
  },
  {
    question: "Which device is used to permanently store data?",
    answers: [
      { answer: "Cache", isCorrect: false },
      { answer: "Hard Drive", isCorrect: true },
      { answer: "RAM", isCorrect: false },
      { answer: "CPU", isCorrect: false },
    ],
  },
  {
    question: "What does CPU stand for?",
    answers: [
      { answer: "Central Programming Unit", isCorrect: false },
      { answer: "Central Processing Unit", isCorrect: true },
      { answer: "Computer Performance Unit", isCorrect: false },
      { answer: "Core Processing Utility", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is an input device?",
    answers: [
      { answer: "Printer", isCorrect: false },
      { answer: "Monitor", isCorrect: false },
      { answer: "Speaker", isCorrect: false },
      { answer: "Keyboard", isCorrect: true },
    ],
  },
  {
    question: "What does URL stand for?",
    answers: [
      { answer: "Unified Resource Link", isCorrect: false },
      { answer: "Uniform Retrieval Line", isCorrect: false },
      { answer: "Universal Routing Link", isCorrect: false },
      { answer: "Uniform Resource Locator", isCorrect: true },
    ],
  },
  {
    question: "Which of these file extensions is for a JavaScript file?",
    answers: [
      { answer: ".css", isCorrect: false },
      { answer: ".html", isCorrect: false },
      { answer: ".json", isCorrect: false },
      { answer: ".js", isCorrect: true },
    ],
  },
  {
    question: "What is the function of an operating system?",
    answers: [
      { answer: "Manages hardware and software resources", isCorrect: true },
      { answer: "Writes code automatically", isCorrect: false },
      { answer: "Displays images only", isCorrect: false },
      { answer: "Creates web pages", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a web browser?",
    answers: [
      { answer: "Ubuntu", isCorrect: false },
      { answer: "Windows 11", isCorrect: false },
      { answer: "Microsoft Excel", isCorrect: false },
      { answer: "Google Chrome", isCorrect: true },
    ],
  },
  {
    question: "What does IP stand for in networking?",
    answers: [
      { answer: "Internet Protocol", isCorrect: true },
      { answer: "Internal Processing", isCorrect: false },
      { answer: "Instant Packet", isCorrect: false },
      { answer: "Internet Path", isCorrect: false },
    ],
  },
  {
    question: "Which company developed the Windows operating system?",
    answers: [
      { answer: "Apple", isCorrect: false },
      { answer: "Microsoft", isCorrect: true },
      { answer: "Google", isCorrect: false },
      { answer: "IBM", isCorrect: false },
    ],
  },
  {
    question: "Which of these is a popular cloud storage service?",
    answers: [
      { answer: "Dropbox", isCorrect: true },
      { answer: "Photoshop", isCorrect: false },
      { answer: "MySQL", isCorrect: false },
      { answer: "WordPress", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is an operating system?",
    answers: [
      { answer: "Windows 11", isCorrect: true },
      { answer: "MS Office", isCorrect: false },
      { answer: "NVIDIA", isCorrect: false },
      { answer: "Intel Core", isCorrect: false },
    ],
  },
  {
    question: "What does RAM stand for?",
    answers: [
      { answer: "Random Access Memory", isCorrect: true },
      { answer: "Read Access Module", isCorrect: false },
      { answer: "Remote Access Machine", isCorrect: false },
      { answer: "Run Action Monitor", isCorrect: false },
    ],
  },
  {
    question: "Which tool is used to create spreadsheets?",
    answers: [
      { answer: "Microsoft Excel", isCorrect: true },
      { answer: "Google Chrome", isCorrect: false },
      { answer: "PowerPoint", isCorrect: false },
      { answer: "Visual Studio", isCorrect: false },
    ],
  },
  {
    question: "Which of these is not a programming language?",
    answers: [
      { answer: "Python", isCorrect: false },
      { answer: "HTML", isCorrect: false },
      { answer: "Wi-Fi", isCorrect: true },
      { answer: "Java", isCorrect: false },
    ],
  },
  {
    question: "Which part of the computer handles graphics processing?",
    answers: [
      { answer: "GPU", isCorrect: true },
      { answer: "RAM", isCorrect: false },
      { answer: "SSD", isCorrect: false },
      { answer: "Motherboard", isCorrect: false },
    ],
  },
  {
    question: "What is phishing?",
    answers: [
      {
        answer: "A cyber attack to trick users into revealing personal info",
        isCorrect: true,
      },
      { answer: "A type of virus that replicates itself", isCorrect: false },
      { answer: "A program to clean your hard drive", isCorrect: false },
      { answer: "An error in coding logic", isCorrect: false },
    ],
  },
  {
    question: "Which of these is used to view websites?",
    answers: [
      { answer: "Web Browser", isCorrect: true },
      { answer: "Firewall", isCorrect: false },
      { answer: "Compiler", isCorrect: false },
      { answer: "Router", isCorrect: false },
    ],
  },
  {
    question: "What does USB stand for?",
    answers: [
      { answer: "Universal Serial Bus", isCorrect: true },
      { answer: "Unified Software Bridge", isCorrect: false },
      { answer: "Universal Software Backup", isCorrect: false },
      { answer: "Ultra Speed Buffer", isCorrect: false },
    ],
  },
  {
    question: "Which software is commonly used for photo editing?",
    answers: [
      { answer: "Photoshop", isCorrect: true },
      { answer: "Excel", isCorrect: false },
      { answer: "Chrome", isCorrect: false },
      { answer: "PowerPoint", isCorrect: false },
    ],
  },
  {
    question: "Which of these is an example of an email service?",
    answers: [
      { answer: "Gmail", isCorrect: true },
      { answer: "YouTube", isCorrect: false },
      { answer: "Netflix", isCorrect: false },
      { answer: "GitHub", isCorrect: false },
    ],
  },
  {
    question: "What is a firewall used for?",
    answers: [
      {
        answer: "To protect a computer network from unauthorized access",
        isCorrect: true,
      },
      { answer: "To increase internet speed", isCorrect: false },
      { answer: "To connect devices wirelessly", isCorrect: false },
      { answer: "To store files securely", isCorrect: false },
    ],
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      { answer: "HyperText Transfer Protocol", isCorrect: true },
      { answer: "High Transfer Text Protocol", isCorrect: false },
      { answer: "Hyperlink Transfer Terminal Protocol", isCorrect: false },
      { answer: "HyperText Transmission Path", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a valid domain name extension?",
    answers: [
      { answer: ".com", isCorrect: true },
      { answer: ".exe", isCorrect: false },
      { answer: ".jpeg", isCorrect: false },
      { answer: ".pdf", isCorrect: false },
    ],
  },
  {
    question: "Which type of memory is non-volatile?",
    answers: [
      { answer: "ROM", isCorrect: true },
      { answer: "RAM", isCorrect: false },
      { answer: "Cache", isCorrect: false },
      { answer: "Registers", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of a browser's incognito mode?",
    answers: [
      {
        answer: "To prevent browsing history and cookies from being saved",
        isCorrect: true,
      },
      { answer: "To block ads", isCorrect: false },
      { answer: "To speed up internet downloads", isCorrect: false },
      { answer: "To access websites faster", isCorrect: false },
    ],
  },
  {
    question: "Which language is mainly used for styling web pages?",
    answers: [
      { answer: "CSS", isCorrect: true },
      { answer: "HTML", isCorrect: false },
      { answer: "Python", isCorrect: false },
      { answer: "Java", isCorrect: false },
    ],
  },
  {
    question: "Which component connects a computer to a network?",
    answers: [
      { answer: "Network Interface Card (NIC)", isCorrect: true },
      { answer: "Graphics Card", isCorrect: false },
      { answer: "Sound Card", isCorrect: false },
      { answer: "Hard Drive", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a search engine?",
    answers: [
      { answer: "Google", isCorrect: true },
      { answer: "Firefox", isCorrect: false },
      { answer: "Outlook", isCorrect: false },
      { answer: "Linux", isCorrect: false },
    ],
  },
  {
    question: "What does URL help you do?",
    answers: [
      { answer: "Access a specific website or web page", isCorrect: true },
      { answer: "Store data on your hard drive", isCorrect: false },
      { answer: "Send files to a printer", isCorrect: false },
      { answer: "Edit images", isCorrect: false },
    ],
  },
  {
    question: "Which company makes the macOS operating system?",
    answers: [
      { answer: "Apple", isCorrect: true },
      { answer: "Microsoft", isCorrect: false },
      { answer: "Dell", isCorrect: false },
      { answer: "HP", isCorrect: false },
    ],
  },
  {
    question: "What type of device is a smartphone?",
    answers: [
      { answer: "Mobile computer", isCorrect: true },
      { answer: "Input-only device", isCorrect: false },
      { answer: "Mainframe", isCorrect: false },
      { answer: "Peripheral", isCorrect: false },
    ],
  },
  {
    question: "What is the main purpose of antivirus software?",
    answers: [
      { answer: "To detect and remove malicious software", isCorrect: true },
      { answer: "To speed up the computer", isCorrect: false },
      { answer: "To organize desktop icons", isCorrect: false },
      { answer: "To run games better", isCorrect: false },
    ],
  },
  {
    question: "Which of these is an example of open-source software?",
    answers: [
      { answer: "Linux", isCorrect: true },
      { answer: "Windows", isCorrect: false },
      { answer: "macOS", isCorrect: false },
      { answer: "Adobe Illustrator", isCorrect: false },
    ],
  },
  {
    question: "What does PDF stand for?",
    answers: [
      { answer: "Portable Document Format", isCorrect: true },
      { answer: "Public Data File", isCorrect: false },
      { answer: "Personal Document Folder", isCorrect: false },
      { answer: "Printable Data Frame", isCorrect: false },
    ],
  },
  {
    question: "Which one of these is a hardware component?",
    answers: [
      { answer: "Motherboard", isCorrect: true },
      { answer: "Google Docs", isCorrect: false },
      { answer: "Photoshop", isCorrect: false },
      { answer: "Windows 10", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of a web server?",
    answers: [
      { answer: "To deliver web pages to users", isCorrect: true },
      { answer: "To store images", isCorrect: false },
      { answer: "To create spreadsheets", isCorrect: false },
      { answer: "To scan for viruses", isCorrect: false },
    ],
  },
  {
    question: "Which file type is commonly used for videos?",
    answers: [
      { answer: ".mp4", isCorrect: true },
      { answer: ".docx", isCorrect: false },
      { answer: ".exe", isCorrect: false },
      { answer: ".css", isCorrect: false },
    ],
  },
  {
    question: "What is the primary function of an IP address?",
    answers: [
      { answer: "To identify a device on a network", isCorrect: true },
      { answer: "To block viruses", isCorrect: false },
      { answer: "To store files", isCorrect: false },
      { answer: "To create documents", isCorrect: false },
    ],
  },
  {
    question: "Which one of these is a type of malware?",
    answers: [
      { answer: "Trojan horse", isCorrect: true },
      { answer: "JPEG", isCorrect: false },
      { answer: "Router", isCorrect: false },
      { answer: "Compiler", isCorrect: false },
    ],
  },
  {
    question: "Which of these tasks is best suited for a spreadsheet program?",
    answers: [
      { answer: "Tracking expenses and budgets", isCorrect: true },
      { answer: "Editing photos", isCorrect: false },
      { answer: "Browsing websites", isCorrect: false },
      { answer: "Creating videos", isCorrect: false },
    ],
  },
  {
    question: "What does the 'S' in HTTPS stand for?",
    answers: [
      { answer: "Secure", isCorrect: true },
      { answer: "Simple", isCorrect: false },
      { answer: "Server", isCorrect: false },
      { answer: "Speed", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a mobile operating system?",
    answers: [
      { answer: "Android", isCorrect: true },
      { answer: "macOS", isCorrect: false },
      { answer: "Ubuntu", isCorrect: false },
      { answer: "Windows 11", isCorrect: false },
    ],
  },
  {
    question: "Which tool helps programmers find and fix bugs?",
    answers: [
      { answer: "Debugger", isCorrect: true },
      { answer: "Compressor", isCorrect: false },
      { answer: "Compiler", isCorrect: false },
      { answer: "Router", isCorrect: false },
    ],
  },
  {
    question: "Which of these is not a social media platform?",
    answers: [
      { answer: "Excel", isCorrect: true },
      { answer: "Instagram", isCorrect: false },
      { answer: "Snapchat", isCorrect: false },
      { answer: "TikTok", isCorrect: false },
    ],
  },
  {
    question: "What kind of device is a router?",
    answers: [
      { answer: "A networking device", isCorrect: true },
      { answer: "A graphics processor", isCorrect: false },
      { answer: "A storage drive", isCorrect: false },
      { answer: "An input device", isCorrect: false },
    ],
  },
  {
    question: "Which of these is used to convert code into machine language?",
    answers: [
      { answer: "Compiler", isCorrect: true },
      { answer: "Keyboard", isCorrect: false },
      { answer: "Monitor", isCorrect: false },
      { answer: "Browser", isCorrect: false },
    ],
  },
  {
    question: "What does the undo function typically do in software?",
    answers: [
      { answer: "Reverses the last action", isCorrect: true },
      { answer: "Deletes a file", isCorrect: false },
      { answer: "Saves the document", isCorrect: false },
      { answer: "Opens a new window", isCorrect: false },
    ],
  },
  {
    question: "What is the main purpose of an operating system?",
    answers: [
      { answer: "To manage hardware and software resources", isCorrect: true },
      { answer: "To create documents", isCorrect: false },
      { answer: "To access the internet", isCorrect: false },
      { answer: "To print files", isCorrect: false },
    ],
  },
  {
    question: "What does GUI stand for?",
    answers: [
      { answer: "Graphical User Interface", isCorrect: true },
      { answer: "General User Input", isCorrect: false },
      { answer: "Global Uniform Instruction", isCorrect: false },
      { answer: "Graphical Utility Integration", isCorrect: false },
    ],
  },
  {
    question: "What is the main function of a CPU?",
    answers: [
      {
        answer: "To perform calculations and run instructions",
        isCorrect: true,
      },
      { answer: "To connect to Wi-Fi", isCorrect: false },
      { answer: "To display images", isCorrect: false },
      { answer: "To play sound", isCorrect: false },
    ],
  },
  {
    question: "Which of these is a file compression format?",
    answers: [
      { answer: ".zip", isCorrect: true },
      { answer: ".docx", isCorrect: false },
      { answer: ".html", isCorrect: false },
      { answer: ".exe", isCorrect: false },
    ],
  },
  {
    question: "What is a byte?",
    answers: [
      { answer: "A unit of digital data equal to 8 bits", isCorrect: true },
      { answer: "A type of computer virus", isCorrect: false },
      { answer: "A command line instruction", isCorrect: false },
      { answer: "An error message", isCorrect: false },
    ],
  },
  {
    question: "Which of these is used to access websites using a domain name?",
    answers: [
      { answer: "DNS (Domain Name System)", isCorrect: true },
      { answer: "RAM", isCorrect: false },
      { answer: "GPU", isCorrect: false },
      { answer: "FTP", isCorrect: false },
    ],
  },
  {
    question:
      "Which language is mainly used for adding interactivity to websites?",
    answers: [
      { answer: "JavaScript", isCorrect: true },
      { answer: "HTML", isCorrect: false },
      { answer: "CSS", isCorrect: false },
      { answer: "Python", isCorrect: false },
    ],
  },
  {
    question: "What is a hyperlink?",
    answers: [
      { answer: "A clickable link to another page or site", isCorrect: true },
      { answer: "A computer cable", isCorrect: false },
      { answer: "A part of the CPU", isCorrect: false },
      { answer: "An internet virus", isCorrect: false },
    ],
  },
  {
    question: "Which one of these is an input device?",
    answers: [
      { answer: "Mouse", isCorrect: true },
      { answer: "Monitor", isCorrect: false },
      { answer: "Printer", isCorrect: false },
      { answer: "Speaker", isCorrect: false },
    ],
  },
  {
    question: "What is the function of a hard drive?",
    answers: [
      { answer: "To store data permanently", isCorrect: true },
      { answer: "To transmit internet signals", isCorrect: false },
      { answer: "To process video", isCorrect: false },
      { answer: "To cool the system", isCorrect: false },
    ],
  },
]
