import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";




function List({searchResults}) {
    const router = useRouter();
    return (
        <div>
            <Header placeholder={""} />
            
            <main className="flex">
                <section className="flex-grow pt-8 px-6">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mb-1">Jobs in your area</h1>
                    <p className="text-xs mb-6">{searchResults.length}+ job postings available nearby</p>
                </div>
                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Local postings</p>
                    <p className="button">Professional Contractors</p>
                    <p className="button">Freelance workers</p>
                </div>
                
                <div className="flex flex-col">
                    {searchResults.map(
                        ({id, title, description, ratings, wage, numHrs, tags, longitude, latitude,img, location}) => (
                        <InfoCard 
                        key={id}
                        img={img}
                        title={title}
                        description={description}
                        ratings={ratings}
                        wage={wage}
                        numHrs={numHrs}
                        tags={tags}
                        longitude={longitude}
                        latitude={latitude}
                        />
                    ))}
                </div>
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    )
}

export default List;



export async function getServerSideProps() {
    const searchResults = await fetch("http://127.0.0.1:5000/jobs").then(res => res.json());
    return {
        props: {
            searchResults,
        }
    }
}
