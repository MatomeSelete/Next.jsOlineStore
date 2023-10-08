import Image from 'next/image'
import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();

  return {
    props: {items: data}
    
  }

  console.log(items)
}

const Products = ({ items }) => {
  return (
    <div >
      <h1 className='title'> Products </h1>
      {items.map(item =>
        <Link href={'./products/' + item.id} key={item.id}>
         
            
              <Image src={'/${item.image}'} alt="logo" width={228} height={140} />
              
           
            {/* <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.rating}</p> */}
         

        </Link>

      
      )}

    </div>

  );
}

export default Products;