import { DaySchedule } from './types';

export const EVENT_DATE = '2026-02-10T09:00:00';

export const SCHEDULES: Record<string, DaySchedule> = {
  day1: {
    date: 'February 10, 2026',
    venueInfo: '9:00 AM - 3:00 PM | CP Lab 1 & CP Lab 2',
    events: [
      {
        id: 'xynapse',
        title: 'Xynapse (Paper Presentation)',
        type: 'Paper Presentation',
        description: 'A platform for students to present their research papers, innovative ideas, and technical projects. Get feedback from experts and showcase your work.',
        time: '9:00 AM - 10:30 AM',
        venue: 'CP Lab 2'
      },
      {
        id: 'framux',
        title: 'FramUX (UI/UX Design)',
        type: 'UI/UX Design',
        description: 'A premier UI/UX design competition challenging students to create intuitive, user-centric interfaces. Participants will demonstrate their skills in user research, wireframing, and interactive prototyping using modern design tools.',
        time: '10:30 AM - 12:00 PM',
        venue: 'CP Lab 1'
      },
      {
        id: 'xplore',
        title: 'XPlore (Seminar)',
        type: 'Seminar',
        description: 'An interactive seminar exploring innovative ideas and emerging technologies in the field of computer science and software development.',
        time: '12:30 PM - 1:30 PM',
        venue: 'CP Lab 1'
      },
      {
        id: 'aura-post',
        title: 'Aura Post (Poster presentation)',
        type: 'Poster presentation',
        description: 'Professional competition for presenting research and innovative concepts via visual posters. Showcase your design skills and ability to communicate complex ideas effectively.',
        time: '1:30 PM - 3:00 PM',
        venue: 'CP Lab 1'
      }
    ]
  },
  day2: {
    date: 'February 11, 2026',
    venueInfo: '9:00 AM - 3:00 PM | CP Lab 1 & CP Lab 2',
    events: [
      {
        id: 'code-fest',
        title: 'Code Fest (Coding Contest)',
        type: 'Coding Contest',
        description: 'A competitive coding contest where participants solve algorithmic challenges and showcase their programming skills. Compete with peers and win exciting prizes while improving your coding proficiency.',
        time: '9:00 AM - 10:45 AM',
        venue: 'CP Lab 2'
      },
      {
        id: 'quiztrix',
        title: 'QuizTrix (Quiz)',
        type: 'Quiz',
        description: "Event Description:\nQuiztrix is a multi-round quiz competition designed to assess participants’ communication skills, logical reasoning, and technical knowledge across different domains. The event progresses through structured rounds with increasing complexity.\n\nTotal Event Duration: 2 Hours 15 Minutes\n\nRound 1: Talk Tact (Communication Round)\nDomain: Technology Trends and Innovation\nDescription: This round evaluates participants’ ability to clearly communicate ideas and answer questions related to emerging technologies and innovation.\nTime: 45 Minutes\nCriteria: Accuracy (50%), Confidence/Knowledge (25%), Teamwork (25%)\n\nRound 2: Word Forge (Problem Solving & Reasoning Round)\nDomain: Problem Solving and Logical Reasoning\nDescription: Each correct answer leads to the next question, testing logical reasoning and problem-solving skills.\nTime: 45 Minutes\nCriteria: Logical Reasoning (25%), Correct Sequencing (25%), Accuracy (50%)\n\nRound 3: Virtual Vortex Round\nDomain: Internet of Things (IoT)\nDescription: Final round testing analytical thinking and real-world application of IoT concepts through scenario-based questions.\nTime: 45 Minutes\nCriteria: Leaderboard method with accuracy and Timing.",
        time: '11:00 AM - 1:15 PM',
        venue: 'CP Lab 1'
      },
      {
        id: 'brain-x',
        title: 'Brain X (Seminar)',
        type: 'Seminar',
        description: 'An engaging seminar focused on cognitive science, artificial intelligence, and innovative problem-solving techniques. Explore the intersection of human intelligence and technology.',
        time: '1:30 PM - 3:00 PM',
        venue: 'CP Lab 1'
      }
    ]
  },
  day3: {
    date: 'February 12, 2026',
    venueInfo: '9:00 AM - 3:00 PM | CP Lab 1 & CP Lab 2',
    events: [
      {
        id: 'hack-fest',
        title: 'HackFest (Hackathon)',
        type: 'Hackathon',
        description: "Event Description:\n\nHACK FEST is a fast-paced hackathon that challenges participants to design, develop, and deliver innovative digital solutions within a limited time. Teams will be tested on their ability to quickly understand a problem, brainstorm ideas, and build practical applications using modern technologies.\nThe hackathon focuses on real-world problem solving, teamwork, and technical execution across multiple development domains.\n\nDomains:\n\nApp Development\nWeb Development\nArtificial Intelligence & Machine Learning (AI/ML)\n\nRequirements:\nLaptop\n\nNote:\n\nProblem statements will be given on the spot, requiring participants to adapt quickly and think creatively under time constraints.\n\nEvent Duration:\n\n5 Hours\n\nJudging / Evaluation Criteria:\n\nInnovation & Creativity – 30%\nTechnical Implementation – 30%\nProblem Understanding & Solution Effectiveness – 20%\nTeam Collaboration & Presentation – 20%\n\nParticipation Type:\n\nTeam-based (1–4 members per team)",
        time: '9:00 AM - 2:00 PM',
        venue: 'CP Lab 1 & CP Lab 2'
      }
    ]
  }
};