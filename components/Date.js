import { parseISO, format } from 'date-fns';

export default function Date({ iso }) {
  const date = parseISO(iso);
  return <time dateTime={iso}>{format(date, 'LLLL d, yyyy')}</time>;
}
