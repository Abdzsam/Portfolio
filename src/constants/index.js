import project1 from "../assets/projects/FitAI.png";
import project2 from "../assets/projects/FineTuned.jpeg";
import project3 from "../assets/projects/PetImage.jpeg";
import project4 from "../assets/projects/RICS.jpeg";
import cogLogo from "../assets/COG.svg";
import kraptonLogo from "../assets/krapton-logo.webp";


export const ABOUT_TEXT = `As a 3rd-year Computer Science student at Dalhousie University with a CGPA of 3.91, I’ve mastered both backend and frontend development across ten coding languages: Java, Python, TypeScript, JavaScript, HTML, CSS, SQL, NoSQL, C, and C++. My experience ranges from fine-tuning AI models to optimizing real-world applications, such as enhancing healthcare systems at Krapton and improving AI accuracy at Cognizant. Driven by a passion for problem-solving and a curiosity for new technologies, I thrive in dynamic, remote teams and am eager to contribute to innovative projects that deliver impactful results.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Generative AI Engineer",
    company: "Cognizant",
    description: `Developed and fine-tuned AI models using advanced techniques, significantly improving sentiment analysis accuracy and image classification performance. Leveraged Hugging Face tools and Transformer Models, showcasing expertise in machine learning and generative AI.`,
    technologies: ["Python", "Hugging Face", "Machine Learning", "Generative AI", "Convolutional Neural Networks (CNN)", "Transformer Models", "PEFT", "Jupyter", "PyTorch"],
    logo: cogLogo,
    altLogo: "Cognizant",
    companyURL: "https://www.cognizant.com/ca/en",
  },
  {
    year: "August 2024 - September 2024",
    role: "Software Developer",
    company: "Krapton",
    description: `Enhanced application performance by implementing Redis caching and integrating Paystack for affordable API access. Developed key healthcare modules, contributing to seamless integration and improved user experience in the application. Collaborated effectively within a remote team environment.`,
    technologies: ["NestJS", "TypeScript", "JavaScript", "Node.js", "Redis Cache", "MongoDB", "Paystack", "REST API"],
    logo: kraptonLogo,
    altLogo: "Krapton",
    companyURL: "https://www.krapton.com",
  },
];

export const PROJECTS = [
  {
    title: "AI Fitness Coach",
    image: project1,
    description:
      "AI coach that sends you daily customized challenges to improve your mental & physical fitness",
    technologies: ["OpenAI API", "React.js", "JavaScript", "Tailwind CSS", "TypeScript", "Next.js", "CockroachDB", "Node.js", "REST API", "Axios", "Express", "Prisma", "Clerk API", "Jotai"],
  },
  {
    title: "AI Fine-Tuned Yelp Model",
    image: project2,
    description:
      "Enhanced a DistilBERT model by fine-tuning it on Yelp review data, boosting classification accuracy from 50% to 92%, a 42% improvement. This project showcases effective model adaptation for sentiment analysis using advanced techniques.",
    technologies: ["Generative AI", "Transformer Models", "Hugging Face", "Machine Learning", "Python", "Convolutional Neural Networks (CNN)", "PEFT (Parameter-Efficient Fine-Tuning)", "Data Preprocessing and Tokenization", "Jupyter"],
  },
  {
    title: "Pet Image Classifier",
    image: project3,
    description:
      "This project is a pet image classification system implemented in Python. It uses a Convolutional Neural Network (CNN) to classify images of pets and determine whether the pet in the image is a dog and identify its breed. The project is organized into multiple modules to handle different aspects of the classification process.",
    technologies: ["Python", "Data Preprocessing and Tokenization", "Jupyter"],
  },
  {
    title: "RISC X86 Translator",
    image: project4,
    description:
      "RISC X86 Translator is a project entirely implemented in C, demonstrating the smooth conversion of simplified RISC-based 16-bit instructions to x86-64 assembly code.",
    technologies: ["Debugging", "GitBash", "C", "Developer Tools", "CLion", "x86 Assembly", "Assembly Language", "RISC", "Software Development", "GitLab", "Remote terminal"],
  },
];

export const CONTACT = {
  address: "Halifax, Nova Scotia, Canada",
  phoneNo: "+12 4555 666 00 ",
  email: "abdulsamad@dal.ca",
};
