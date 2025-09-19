

import Datas from './components/Data'
import { BlogPost } from './components/BlogPost'

function Blogs(){
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Blog Post</h1>
      {Datas.map((data,index) => (
        <BlogPost 
        key={index}
        info = {data}
        />
      ))}
    </section>
  )
}
export default Blogs


const styles = {
  section:{
    display : "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems : "center",
    fontFamily : "Arial",
  },
  heading :{
    fontSize : "40px"
  }
}

























