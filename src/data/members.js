import jiPhoto from "../assets/ji.jpg";
import jiModalPhoto from "../assets/ji2.jpg";
import talynPhoto from "../assets/talyn.jpg";
import talynModalPhoto from "../assets/talyn2.jpg";
import tolenPhoto from "../assets/tolen.jpg";
import tolenModalPhoto from "../assets/tolen2.jpg";
import markPhoto from "../assets/mark.jpg";
import markModalPhoto from "../assets/mark2.jpg";

const members = [
  {
    id: "ji",
    name: "Mark Jason M. Tumulak",
    nickname: "Ji",
    age: 21,
    school: "Student at CvSU Naic",
    mascot: "Cinnamoroll",
    mascotEmoji: "🐶",
    color: "#a8d8f0",
    accent: "#5ba3cc",
    bgGradient: "linear-gradient(135deg, #d6eeff 0%, #b8d9f5 50%, #a0ccee 100%)",
    cardBg: "#e8f5ff",
    skills: ["Slightly Pro at Geometry Dash", "Can Cook like Sanji", "Can play Guitar"],
    email: "kramnosaj1@gmail.com",
    photo: jiPhoto,
    modalPhoto: jiModalPhoto,
    pattern: "circles",
  },
  {
    id: "talyn",
    name: "Ma. Cristalyn Joi B. Blanco",
    nickname: "Tala",
    age: 20,
    school: "Student at CvSU Naic",
    mascot: "My Melody",
    mascotEmoji: "🎀",
    color: "#f5a8c8",
    accent: "#e05a90",
    bgGradient: "linear-gradient(135deg, #ffe8f5 0%, #ffd0e8 50%, #f5b8d8 100%)",
    cardBg: "#fff0f8",
    skills: ["Artist", "Gamer", "Crafter"],
    email: "cristalynjoie@gmail.com",
    photo: talynPhoto,
    modalPhoto: talynModalPhoto,
    pattern: "stars",
  },
  {
    id: "tolen",
    name: "Marth Lawrence G. Peji",
    nickname: "Rence",
    age: 20,
    school: "Student at CvSU Naic",
    mascot: "Keroppi",
    mascotEmoji: "🐸",
    color: "#b8e8a8",
    accent: "#5aaa3a",
    bgGradient: "linear-gradient(135deg, #e8ffd8 0%, #d0f0b8 50%, #b8e8a0 100%)",
    cardBg: "#f0fff0",
    skills: ["Gamer", "Can Play Guitar", "Basketball"],
    email: "marthlawrencpeji@gmail.com",
    photo: tolenPhoto,
    modalPhoto: tolenModalPhoto,
    pattern: "dots",
  },
  {
    id: "mark",
    name: "Mark Angelo Z. Tolentino",
    nickname: "Mark",
    age: 22,
    school: "Student at CvSU Naic",
    mascot: "Hello Kitty",
    mascotEmoji: "🎀",
    color: "#f8a8a8",
    accent: "#e05555",
    bgGradient: "linear-gradient(135deg, #ffe8e8 0%, #ffd0d0 50%, #f5b8b8 100%)",
    cardBg: "#fff5f5",
    skills: ["Likes to Travel", "Sometimes a Cheapskate", "A big fan of Minute Burger"],
    email: "gelotolentino2004@gmail.com",
    photo: markPhoto,
    modalPhoto: markModalPhoto,
    pattern: "hearts",
  },
];

export default members;
