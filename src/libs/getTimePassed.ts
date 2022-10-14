const SEC = 1;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

export default function getTimePassed(time: Date | string) {
  const diff = (new Date(time).getTime() - new Date().getTime()) / 1000;
  if (diff <= 5) {
    return '방금 전';
  } else if (diff <= MIN) {
    return `${Math.floor(diff)}초 전`;
  } else if (diff <= HOUR) {
    return `${Math.floor(diff / MIN)}분 전`;
  } else if (diff <= DAY) {
    return `${Math.floor(diff / HOUR)}시간 전`;
  } else if (diff <= WEEK) {
    return `${Math.floor(diff / DAY)}일 전`;
  } else if (diff <= MONTH) {
    return `${Math.floor(diff / WEEK)}주 전`;
  } else if (diff <= YEAR) {
    return `${Math.floor(diff / MONTH)}개월 전`;
  } else {
    return `${Math.floor(diff / YEAR)}년 전`;
  }
}
