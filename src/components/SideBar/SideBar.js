import Menu from "../Menu/Menu";
import Projects from "./Projects/Projects";

function SideBar(props){
  const {content} = props;
console.log(content)
return (
  <div className="sidebarWrapper">            
    <Menu content={content}/>
    <Projects />
  </div>
)
}
export default SideBar;