import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import cover from "/assets/images/cover.jpg";

function Banner() {
    const router = useRouter();
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src={cover}
                layout="fill"
                objectFit="cover"
                className="blur-[3px]"
            />
            <div className="absolute top-1/2 w-full text-center space-x-3">
                <p className="text-sm sm:text-lg text-white">Got nothing to do?</p>
                <button onClick={()=> router.push('list')} className="text-gray-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Find a job</button>
                <button className="text-gray-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Post a job</button>
            </div>
        </div>
    )
}

export default Banner
