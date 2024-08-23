import Link from "next/link";
import Image from 'next/image'
function CategoryHome({ homecategory }) {
  return (
    <>
      <div className="category-home-wraper">
        {/* {homecategory && homecategory.map((item,i)=>{
     return <div className="pic" key={i}>
       <Link href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}>
       
      <Image
      src={item.category_image_url}
      alt="Picture of the author"
      width={309}
      height={309}
    />
      </Link>
     </div>
    })} */}
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-1.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Jewelery</span>
          </Link>
        </div>
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-2.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Utensils</span>
          </Link>
        </div>
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-3.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Pooja Items</span>
          </Link>
        </div>
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-4.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Coins</span>
          </Link>
        </div>
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-5.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Gifts</span>
          </Link>
        </div>
        <div className="pic">
          <Link href="">
            <Image
              src="/img/demo-6.jpg"
              alt="Picture of the author"
              width={309}
              height={309}
            />
            <span>Baby Items</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CategoryHome;
