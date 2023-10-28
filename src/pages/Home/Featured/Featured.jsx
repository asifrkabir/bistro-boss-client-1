import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';

import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"></SectionTitle>
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can I get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero nemo quisquam illo neque ipsum incidunt, similique perspiciatis ratione odio numquam minima voluptatem quo sed amet quae explicabo eum eligendi deleniti impedit vitae a reprehenderit quibusdam libero. Tempora dignissimos quae, non laborum cumque incidunt repellendus nobis porro beatae consectetur similique?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
    </div>
  );
};

export default Featured;
