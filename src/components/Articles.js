import React  from 'react'
//import Article from './Article'

 const Articles = (props) => {
   console.log("articleData in Articles: ", props.articleData)
    return (
      <div>
        -
        {
          //I think this is what we need to use inside of the map function to get the articles to show up on the actual screen
          //props.articleData.hits.author
          //props.articleData.hits.title
          //props.articleData.hits.url
          //having trouble with the needed expression to get the map to work without shooting an error

          //this map is coming up as props.articleData.map is not a function when i hit the search bar
          //in all the previous assignments i never had an issue with this, I think the issue is how i named it
          //but im not sure what the correct way to name it is
        /* props.articleData.map(Article => (
          <div className="story-container" key={Article.objectID}>
            <h4 style={{margin: "5px"}}>{Article.title}</h4>
            <p style={{fontSize: "20px", margin: "5px"}}>Author: {Article.author}</p>
            <a href={Article.url} target="_blank" rel="noreferrer" style={{color: "white", fontSize: "18px"}}>Visit Website</a>
          </div>
        ))} */}
      </div>
    )
  }

  export default Articles;

