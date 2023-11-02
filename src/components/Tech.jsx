import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { tech } from "../constants";

const isMobile = window.innerWidth <= 768;

const Tech = () => {
  return isMobile?(
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {tech.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="techName">{technology.name}</p>
        </div>
      ))}
    </div>
  ):(
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="techName">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
