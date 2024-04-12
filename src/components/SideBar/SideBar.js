import Menu from "../Menu/Menu";

function SideBar(props){
  const {content} = props;
console.log(content)
return (
  <div className="sidebarWrapper">
     <div className="container">
                     <a href="#">
                    <span className="icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
                    <span className="title">Tracker</span>
                </a>
    <Menu content={content}/>
    </div> 
  
 
  </div>
)
}
export default SideBar;