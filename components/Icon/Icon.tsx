import css from './Icon.module.css';


type Props = {
    name: string;
};

export default function Icon({ name }: Props) {
    return (
        <svg className={css.icon}>
            <use href={`/icons/sprite.svg#icon-${name}`} />
        </svg>
    )
}