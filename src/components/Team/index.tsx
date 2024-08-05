"use client"

import { useState, useEffect } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import { TeamType } from "@/types/team";

const Team = () => {
  const [teamData, setTeamData] = useState<TeamType[] | null>(null);
  const [sectionTitle, setSectionTitle] = useState({
    subtitle: "",
    title: "",
    paragraph: ""
  });

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/data/homepage.json');
        const data = await response.json();
        const teamSection = data.Team; // Access the 'Team' key
        setTeamData(teamSection.team);
        setSectionTitle(teamSection.sectionTitle);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  if (!teamData) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle={sectionTitle.subtitle}
            title={sectionTitle.title}
            paragraph={sectionTitle.paragraph}
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
