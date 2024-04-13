function Projects(props){
    const {content} = props;
  return (
    <div className="ProjectsWrapper">
        <nav id="main" className="menu_boutique-area" role="navigation" aria-label="Secondary">
  <ul className="liste-categories">
    <li><strong className="categories-item">Catégorie 1</strong><ul className="liste-produits"><li><a className="produit-item" href="#">Produit 1</a></li></ul></li>
    <li>
      <strong className="categories-item">Catégorie 2</strong> 
      <ul className="liste-produits">
        <li><a className="produit-item" href="#">Produit 1</a></li>
        <li><a className="produit-item" href="#">Produit 2</a></li>
        <li><a className="produit-item" href="#">Produit 3</a></li>
      </ul>
    </li>
    <li>
      <strong className="categories-item">Catégorie 3</strong>
      <ul className="liste-produits">
        <li><a className="produit-item" href="#">Produit 1</a></li>
        <li><a className="produit-item" href="#">Produit 2</a></li>
        <li><a className="produit-item" href="#">Produit 3</a></li>
      </ul>
    </li>
   </ul>
</nav>
    </div>
  )
  }
  export default Projects;

