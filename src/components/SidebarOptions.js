import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://www.kindpng.com/picc/m/9-99939_animated-group-of-women-hd-png-download.png"
          alt=""
        />
        <p>About college</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/business-women-people-desk-vector-illustration-cartoon-characte-character-87793596.jpg"
          alt=""
        />

        <p>Career</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/z/jobs-professions-set-work-womens-professions-cartoons-vector-illustration-graphic-design-123601726.jpg"
          alt=""
        />
        <p>Activities</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/beautiful-housewife-is-cooking-kitchen-illustration-vector-cartoon-animation-design_40876-2541.jpg?w=2000"
          alt=""
        />
        <p>Top question</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/female-cartoon-vocalist-singing-microphone-attractive-lady-singer-holding-mic-music-note-doodles-afro-woman-jazz-concert-177396498.jpg"
          alt=""
        />
        <p>Top Answer</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/736x/48/cb/3f/48cb3ff030b3b2782d0304496bd7eea5.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/premium-vector/female-doctor-cartoon-design_530689-594.jpg"
          alt=""
        />
        <p>Research</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://us.123rf.com/450wm/nicoletaionescu/nicoletaionescu2102/nicoletaionescu210200051/nicoletaionescu210200051.jpg?ver=6"
          alt=""
        />
        <p>Competition</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/premium-vector/cartoon-illustration-thai-female-teacher-holding-stick-front-blackboard_49924-213.jpg?w=2000"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover More</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
