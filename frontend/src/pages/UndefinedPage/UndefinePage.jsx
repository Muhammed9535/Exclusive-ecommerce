import './UndefinedPage.css'
import { Link } from 'react-router-dom'

function UndefinedPage() {
    return (
        <div className="error-container container">
            <p className='mt-5'>Home / <b>404 Error</b></p>
            <div className="error-content text-center mt-5">
                <h2 className='not-found my-3'>404 Not Found</h2>
                <p className='mb-5'>Your visited page not found . You may go home page</p>
                <div >
                    <Link to="/" className="back-home py-2  px-4">Back to home Page </Link>
                </div>
            </div>
        </div>
    )
}

export default UndefinedPage;