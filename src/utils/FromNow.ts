import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function fromNow(dateString: string) {
  return formatDistanceToNowStrict(parseISO(dateString),{addSuffix: true});
}
