import usePreview from '../../../hooks/main/usePreview/usePreview';
import Blog from '../blog/Blog';

function Preview() {
  const [isLogin] = usePreview();
  return <>{isLogin && <Blog isPreview />}</>;
}

export default Preview;
