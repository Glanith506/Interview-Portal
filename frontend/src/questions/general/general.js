// general.js

// ✅ General Knowledge Questions (20)
const generalQuestions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    id: 2,
    question: "Which continent is India located in?",
    options: ["Asia", "Europe", "Africa", "Australia"],
    answer: "Asia",
  },
  {
    id: 3,
    question: "Which Indian city is known as the 'Pink City'?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Bhopal"],
    answer: "Jaipur",
  },
  {
    id: 4,
    question: "Which ocean lies to the south of India?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Indian Ocean",
  },
  {
    id: 5,
    question: "Who is the current Prime Minister of India (as of 2025)?",
    options: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Amit Shah"],
    answer: "Narendra Modi",
  },
  {
    id: 6,
    question: "Which Indian state is famous for the backwaters?",
    options: ["Kerala", "Goa", "Tamil Nadu", "Assam"],
    answer: "Kerala",
  },
  {
    id: 7,
    question: "Which Indian city is home to the Bollywood film industry?",
    options: ["Delhi", "Mumbai", "Hyderabad", "Kolkata"],
    answer: "Mumbai",
  },
  {
    id: 8,
    question: "Which river is called the 'Ganga of the South'?",
    options: ["Godavari", "Krishna", "Kaveri", "Yamuna"],
    answer: "Godavari",
  },
  {
    id: 9,
    question: "Which Indian city hosted the G20 Summit in 2023?",
    options: ["Mumbai", "New Delhi", "Hyderabad", "Bengaluru"],
    answer: "New Delhi",
  },
  {
    id: 10,
    question: "Which Indian state shares borders with China, Nepal, and Bhutan?",
    options: ["Sikkim", "Assam", "Arunachal Pradesh", "Uttarakhand"],
    answer: "Sikkim",
  },
  {
    id: 11,
    question: "Which Indian space agency launched Chandrayaan-3 in 2023?",
    options: ["ISRO", "NASA", "DRDO", "SpaceX"],
    answer: "ISRO",
  },
  {
    id: 12,
    question: "Which city is known as the 'Silicon Valley of India'?",
    options: ["Hyderabad", "Bengaluru", "Pune", "Chennai"],
    answer: "Bengaluru",
  },
  {
    id: 13,
    question: "Which is the largest state of India by area?",
    options: ["Maharashtra", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"],
    answer: "Rajasthan",
  },
  {
    id: 14,
    question: "Which Indian newspaper is the oldest in circulation?",
    options: ["The Hindu", "Times of India", "The Statesman", "Bombay Samachar"],
    answer: "Bombay Samachar",
  },
  {
    id: 15,
    question: "Which Indian city is located on the banks of the Ganga River?",
    options: ["Varanasi", "Kolkata", "Kanpur", "Haridwar"],
    answer: "Varanasi",
  },
  {
    id: 16,
    question: "Which continent does India import most of its crude oil from?",
    options: ["Africa", "Asia", "South America", "North America"],
    answer: "Asia",
  },
  {
    id: 17,
    question: "Which Indian state has the highest literacy rate?",
    options: ["Kerala", "Tamil Nadu", "Goa", "Mizoram"],
    answer: "Kerala",
  },
  {
    id: 18,
    question: "Which Indian monument is also a UNESCO World Heritage Site?",
    options: ["India Gate", "Gateway of India", "Qutub Minar", "Charminar"],
    answer: "Qutub Minar",
  },
  {
    id: 19,
    question: "In 2023, which Indian city was declared the cleanest in the Swachh Bharat rankings?",
    options: ["Indore", "Surat", "Bhopal", "Chandigarh"],
    answer: "Indore",
  },
  {
    id: 20,
    question: "Which Indian state recently became the first to have 100% renewable energy?",
    options: ["Gujarat", "Kerala", "Goa", "Sikkim"],
    answer: "Goa",
  },
];

// ✅ Current Affairs Questions (20)
const currentAffairsQuestions = [
  {
    id: 1,
    question: "Who won the ICC Cricket World Cup 2023?",
    options: ["India", "Australia", "England", "New Zealand"],
    answer: "Australia",
  },
  {
    id: 2,
    question: "Which country hosted the 2024 Summer Olympics?",
    options: ["Japan", "USA", "France", "Germany"],
    answer: "France",
  },
  {
    id: 3,
    question: "Who is the current President of India (2025)?",
    options: ["Droupadi Murmu", "Ram Nath Kovind", "Pratibha Patil", "Venkaiah Naidu"],
    answer: "Droupadi Murmu",
  },
  {
    id: 4,
    question: "Which Indian city was declared the 'Startup Capital of India' in 2024?",
    options: ["Mumbai", "Hyderabad", "Bengaluru", "Delhi"],
    answer: "Bengaluru",
  },
  {
    id: 5,
    question: "Which space mission made India the first to land on the Moon’s south pole?",
    options: ["Chandrayaan-2", "Chandrayaan-3", "Mangalyaan", "Aditya-L1"],
    answer: "Chandrayaan-3",
  },
  {
    id: 6,
    question: "In 2023, India signed a trade agreement with which group?",
    options: ["BRICS", "G20", "EU", "ASEAN"],
    answer: "EU",
  },
  {
    id: 7,
    question: "Which country became the 5th largest economy in 2024?",
    options: ["India", "Germany", "Brazil", "Japan"],
    answer: "India",
  },
  {
    id: 8,
    question: "Which movie won the Oscar for Best Picture in 2023?",
    options: ["Everything Everywhere All At Once", "Oppenheimer", "RRR", "Top Gun: Maverick"],
    answer: "Everything Everywhere All At Once",
  },
  {
    id: 9,
    question: "Which Indian airport was ranked the world's cleanest in 2024?",
    options: ["Delhi Airport", "Mumbai Airport", "Bengaluru Airport", "Hyderabad Airport"],
    answer: "Delhi Airport",
  },
  {
    id: 10,
    question: "Which Indian state topped the 2024 Happiness Index?",
    options: ["Sikkim", "Kerala", "Goa", "Mizoram"],
    answer: "Sikkim",
  },
  {
    id: 11,
    question: "Which Indian company became the most valuable in 2024?",
    options: ["Reliance", "TCS", "Infosys", "Adani Enterprises"],
    answer: "Reliance",
  },
  {
    id: 12,
    question: "In 2024, who won the Nobel Peace Prize?",
    options: ["UNHCR", "Narges Mohammadi", "Greta Thunberg", "World Food Programme"],
    answer: "Narges Mohammadi",
  },
  {
    id: 13,
    question: "Which Indian state launched 'Green Hydrogen Mission' in 2024?",
    options: ["Gujarat", "Tamil Nadu", "Rajasthan", "Kerala"],
    answer: "Tamil Nadu",
  },
  {
    id: 14,
    question: "Which team won IPL 2024?",
    options: ["Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders", "Gujarat Titans"],
    answer: "Chennai Super Kings",
  },
  {
    id: 15,
    question: "Who became the new CEO of Twitter (X) in 2023?",
    options: ["Parag Agrawal", "Linda Yaccarino", "Jack Dorsey", "Elon Musk"],
    answer: "Linda Yaccarino",
  },
  {
    id: 16,
    question: "Which country recently launched the world’s first AI President?",
    options: ["Japan", "Estonia", "USA", "UAE"],
    answer: "Estonia",
  },
  {
    id: 17,
    question: "Which Indian state was most affected by Cyclone Michaung in 2023?",
    options: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "West Bengal"],
    answer: "Tamil Nadu",
  },
  {
    id: 18,
    question: "Which Indian IT company crossed $200 billion market cap in 2024?",
    options: ["Infosys", "Wipro", "TCS", "HCL"],
    answer: "TCS",
  },
  {
    id: 19,
    question: "Which country won the FIFA World Cup 2022?",
    options: ["Argentina", "France", "Brazil", "Germany"],
    answer: "Argentina",
  },
  {
    id: 20,
    question: "Who is the current UN Secretary General (2025)?",
    options: ["Ban Ki-moon", "Kofi Annan", "Antonio Guterres", "Kristalina Georgieva"],
    answer: "Antonio Guterres",
  },
];

// ✅ Logical Reasoning Questions (20)
const logicalReasoningQuestions = [
  {
    id: 1,
    question: "If A is taller than B, and B is taller than C, who is the tallest?",
    options: ["A", "B", "C", "Cannot say"],
    answer: "A",
  },
  {
    id: 2,
    question: "Find the odd one out: Apple, Banana, Mango, Potato",
    options: ["Apple", "Banana", "Mango", "Potato"],
    answer: "Potato",
  },
  {
    id: 3,
    question: "Complete the series: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "30"],
    answer: "32",
  },
  {
    id: 4,
    question: "If 5 cats catch 5 mice in 5 minutes, how many mice can 10 cats catch in 10 minutes?",
    options: ["10", "20", "25", "50"],
    answer: "20",
  },
  {
    id: 5,
    question: "Which number comes next? 7, 14, 21, 28, ?",
    options: ["32", "35", "36", "40"],
    answer: "35",
  },
  {
    id: 6,
    question: "If 'TREE' is coded as 'USFF', then 'BOOK' is coded as?",
    options: ["CPPL", "COOL", "BNNL", "CPLL"],
    answer: "CPPL",
  },
  {
    id: 7,
    question: "Ravi is facing north. He turns 90° right, then 180°, then 90° left. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    answer: "South",
  },
  {
    id: 8,
    question: "If 2x + 3 = 11, what is the value of x?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 9,
    question: "What comes next: Z, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    answer: "R",
  },
  {
    id: 10,
    question: "Pointing to a man, Ramesh said, 'He is the son of my grandfather’s only son.' Who is he?",
    options: ["Brother", "Father", "Cousin", "Uncle"],
    answer: "Brother",
  },
  {
    id: 11,
    question: "Choose the odd one out: Circle, Square, Triangle, Cylinder",
    options: ["Circle", "Square", "Triangle", "Cylinder"],
    answer: "Cylinder",
  },
  {
    id: 12,
    question: "If A = 1, B = 2, C = 3, what is the value of CAT?",
    options: ["24", "26", "27", "29"],
    answer: "24",
  },
  {
    id: 13,
    question: "Find the missing number: 3, 6, 12, 24, ?",
    options: ["36", "46", "48", "52"],
    answer: "48",
  },
  {
    id: 14,
    question: "If 'EARTH' is coded as 'FSBSI', what is 'MOON' coded as?",
    options: ["NPPM", "NPPN", "NPOO", "NQPP"],
    answer: "NPPN",
  },
  {
    id: 15,
    question: "Which is different? 121, 144, 169, 225",
    options: ["121", "144", "169", "225"],
    answer: "225",
  },
  {
    id: 16,
    question: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?",
    options: ["3", "4", "5", "6"],
    answer: "3",
  },
  {
    id: 17,
    question: "Which direction is opposite to North-East?",
    options: ["North-West", "South-West", "South-East", "North-East"],
    answer: "South-West",
  },
  {
    id: 18,
    question: "Find the odd one out: Dog, Cat, Lion, Car",
    options: ["Dog", "Cat", "Lion", "Car"],
    answer: "Car",
  },
  {
    id: 19,
    question: "If ALL = 36, CAT = 24, then BAT = ?",
    options: ["23", "24", "26", "28"],
    answer: "24",
  },
  {
    id: 20,
    question: "Which number replaces the question mark? 15, 30, 60, 120, ?",
    options: ["180", "200", "220", "240"],
    answer: "240",
  },
];

export { generalQuestions, currentAffairsQuestions, logicalReasoningQuestions };
