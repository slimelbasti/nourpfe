function Menu(props){
    const {content} = props;
 
return (
    <div className="menuWrapper">  
        <div className="navigation">
        
        <ul>
            <li>
            <a href="/">
        <span className="icon"><ion-icon name="bar-chart-outline"></ion-icon></span>
                    <span className="title">Tracker</span>
                </a>
                </li>  
            {
                content.map((menuItems, index) => {
                    return (
                        <li key={index}>
                            <a href={menuItems}>
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">{menuItems}</span>
                            </a>
                        </li> 
                    );
                }
                )
            }
   
        </ul>
    </div>
    </div>
);
}
export default Menu;