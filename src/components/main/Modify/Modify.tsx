import useModify from '../../../hooks/modify/useModify';
import Write from '../write/Write';

function Modify() {
  const [blogData] = useModify();
  return (
    <>{blogData !== undefined && <Write isModify modifyData={blogData} />}</>
  );
}

export default Modify;
