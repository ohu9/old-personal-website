import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to='/'>back home</Link>
    </div>
  );
}
export default Error;