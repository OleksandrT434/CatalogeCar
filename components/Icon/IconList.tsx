import Icon from '@/components/Icon/Icon';
import css from './Icon.module.css';

type Props = {
  items: string[];
};

export default function IconList({ items }: Props) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item} className={css.item}>
          <Icon name="okey" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
