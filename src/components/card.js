import React from "react"
import { Link } from "gatsby"


const Card = ({ article }) => {


  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">

    <Link to={`/article/${article.node.strapiId}`} className="uk-link-reset">

    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <img src={article.node.image.publicURL} alt={article.node.image.publicURL} />
      </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{article.node.title}</h3>
          <p>{article.node.headline}</p>
           </div>
       </div>
   </Link>
</div>

  )
}

export default Card
