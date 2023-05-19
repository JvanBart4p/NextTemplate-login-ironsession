
import {useRouter} from "next/router"


const ThankYou = () => {
    const router = useRouter();
    return(
        <div className="thankyou">
            <div>
                thanks for submitting
            </div>
            <button onClick={()=> {router.back()}}>Go back</button>
        </div>
    )
}

export default ThankYou