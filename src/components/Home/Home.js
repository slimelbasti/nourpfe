import Recent from "./Recent/Recent";
import AssignedToMe from "./AssignedToMe/AssignedToMe";
import MyWork from "./MyWork/MyWork";

function Home(props){
  const {content} = props;

return (
  <div className="homeWrapper">
    Home
    <div className="row">
    <div className="col-md-4">
    <Recent />
    </div>
    <div className="col-md-8">
        <MyWork/>
        </div>
        <div className="col-md-12">
     <AssignedToMe />
        </div>
    </div>
    </div>

  
)
}
export default Home;