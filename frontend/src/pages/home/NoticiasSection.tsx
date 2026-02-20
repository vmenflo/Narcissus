import {Link} from "react-router-dom";

export default function NoticiasSection(){
    return(
        <div>
            <h3>Noticias</h3>
            <hr />
            <Link to={`/noticias`}>
                <div >
                    <img style={{height: 200, width:400}} src="https://flixole.com/wp-content/uploads/2025/03/Hollywood-portada.jpg" alt="portada-noticias" />
                </div>
            </Link>
        </div>
    )
}