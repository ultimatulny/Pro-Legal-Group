import {Link} from 'react-router-dom'

const NotfoundPage = () => {
    return(
        <div className="page notFoundPage">
            This page doesn't exists. <Link to="/">Go home</Link>
        </div>
    )
}

export {NotfoundPage}