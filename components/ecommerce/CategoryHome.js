import Link from "next/link";
import Image from 'next/image'
function CategoryHome({ homecategory }) {
  return (
    <>
      <div className="category-home-wraper">
         {homecategory && homecategory.map((item,i)=>{
     return <div className="pic" key={i}>
       <Link href={`/collections/${item.slug}`}>
       
      <img
      src={`${process.env.NEXT_PUBLIC_BACKENDAPI_URL}uploads/category/${item.image}`}
      alt="Picture of the author"
      width={309}
      height={309}
    />
    <span>{item.name}</span>
      </Link>
     </div>
    })} 
        
      </div>
    </>
  );
}
export default CategoryHome;
