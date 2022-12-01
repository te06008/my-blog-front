const SEC = 1;
const MIN = 60 * SEC;

export default function getModifiedTime(
  createTime: Date | string,
  updatedTime: Date | string,
) {
  const diff =
    (new Date(updatedTime).getTime() - new Date(createTime).getTime()) / 1000;
  if (diff <= MIN) {
    return '최초 작성';
  } else {
    return '';
  }
}
