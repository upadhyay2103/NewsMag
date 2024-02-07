import image from '../assets/news.jpg'

const NewsItem = ({title,src,description,link}) => {
  if(src!==null)
  {
  return <>
    <div className="card bg-dark text-white" style={{width: "18rem"}}>
      <img src={`${src?src:image}`} height="200px" className="card-img-top imagine" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={`${link}`} className="btn btn-primary">Read More</a>
        </div>
    </div>
    </>
  }
}

export default NewsItem;
