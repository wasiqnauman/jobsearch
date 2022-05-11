import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import LocalMap from "../components/LocalMap";




function Search({searchResults}) {
    console.log(searchResults);
    const router = useRouter();
    const {location, startDate, endDate, numGuests} = router.query;
    console.log(startDate)
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} -${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numGuests}`} />
            
            <main className="flex">
                <section className="flex-grow pt-8 px-6">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold mb-1">Jobs in {location}</h1>
                    <p className="text-xs mb-6">{searchResults.length}+ job postings available in {location} for {range}</p>
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
                <section className="hidden xl:inline-flex min-w-[600px] ">
                    <LocalMap searchResults={searchResults}/>
                </section>
            </main>

            {/* <Footer /> */}
        </div>
    )
}

export default Search;



export async function getServerSideProps() {
    const searchResults = await fetch("http://127.0.0.1:5000/jobs").then(res => res.json());
    return {
        props: {
            searchResults,
        }
    }
}
