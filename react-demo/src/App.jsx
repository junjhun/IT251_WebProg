import Navbar from "./components/Navbar";
import MemberCard from "./components/MemberCard";
import "./App.css";

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Niro Jacob",
      role: "Unemployed",
      skills: ["Sleeping", "Eating", "Breathing"],
      isOnline: true,
    },
    {
      id: 2,
      name: "Kim Mandy",
      role: "IT Support",
      skills: ["Talking", "Dancing", "Singing"],
      isOnline: false,
    },
    {
      id: 3,
      name: "Sy Boring",
      role: "HouseWife",
      skills: ["Cleaning", "Cooking", "Ahhh"],
      isOnline: true,
    },
  ];

  return (
    <div className="app-container">
      <Navbar brandName="ViceCity"/>
      <Navbar brandName="San Andreas"/>

      <main className="main-Content">
        <h1>Meet The Team</h1>
        <p className="subtitle">
          Kilalanin ang mga pera at ang sir siguraduhin sir i'm still lost subalit
        </p>

        <div className = "card-grid">
          {teamMembers.map((member) => (
            <MemberCard 
            key={member.id} 
            name={member.name} 
            role={member.role}
            skills={member.skills}
            isOnline={member.isOnline}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;