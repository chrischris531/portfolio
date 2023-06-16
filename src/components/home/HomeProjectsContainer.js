import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import projects from "../../data/projects";
import HomeProjectsTab from "./HomeProjectsTab";

const HomeProjectsContainer = () => {
  const [hover, setHover] = useState(0);

  return (
    <Tabs
      defaultActiveKey="university"
      id="projects_tabs"
      className="mb-3"
      justify
    >
      <Tab eventKey="university" title="University Projects">
        <HomeProjectsTab
          data={projects.university_projects}
          hover={hover}
          setHover={setHover}
          style="grid"
        />
      </Tab>
      <Tab eventKey="personal" title="Personal Projects">
        <HomeProjectsTab
          data={projects.personal_projects}
          hover={hover}
          setHover={setHover}
          style="grid"
        />
      </Tab>
      <Tab eventKey="grades" title="Grades">
        <HomeProjectsTab
          data={projects.grades}
          hover={hover}
          setHover={setHover}
          style="list"
        />
      </Tab>
      <Tab eventKey="achievements" title="Achievements">
        <HomeProjectsTab
          data={projects.achievements}
          hover={hover}
          setHover={setHover}
          style="list"
        />
      </Tab>
      <Tab eventKey="work" title="Work Experience">
        <HomeProjectsTab
          data={projects.work}
          hover={hover}
          setHover={setHover}
          style="grid"
        />
      </Tab>
    </Tabs>
  );
};

export default HomeProjectsContainer;
