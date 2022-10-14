import usePreview from '../../../hooks/main/usePreview/usePreview';
import Blog from '../blog/Blog';

function Preview() {
  usePreview();
  return <Blog isPreview />;
}

export default Preview;
