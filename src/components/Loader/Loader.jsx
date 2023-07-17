import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';
function Loader() {
  return (
    <LoaderStyle>
      <CirclesWithBar
        height="200"
        width="200"
        color="#fafafa"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#3f51b5"
        innerCircleColor=""
        barColor="#3f51b5"
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderStyle>
  );
}
export default Loader;
