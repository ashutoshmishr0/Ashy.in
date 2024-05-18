import BackgroundCon from "../component/BackgroundCon"
import Form from "../component/Form"
import { BackgroundBeams } from "../component/ui/background-beams"



 export default function contectus() {
    return(
        <main>
            <div className=" pt-[100px] flex  bg-neutral-950  flex-col flex-shrink justify-center ">
                <BackgroundCon/>
                  <Form/>
                 
            </div>
            
            <BackgroundBeams/> 
        </main>
        
        
    )
}