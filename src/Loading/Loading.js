import "./Loading.css"
import steamlogo from "./steamlogo.png"
function Loading() {
    return(
        <div className="loading-background">
            <img src={steamlogo} className="loading"></img>
        </div>
    )
}
export default Loading
