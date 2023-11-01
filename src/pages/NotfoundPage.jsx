import {Link} from 'react-router-dom'

const NotfoundPage = () => {
    return(
        <div className="page">
            This page doesn't exists. Go <Link to="/">home</Link>
        </div>
    )
}

export {NotfoundPage}