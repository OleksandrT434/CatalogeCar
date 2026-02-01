import css from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, hasMore, isLoading }: LoadMoreButtonProps) {
  return (
    <div className={css.wrapper}>
      {(hasMore) && (
        <button 
          type="button"
          className={css.button}
          onClick={onLoadMore}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
      {isLoading && (
        <p className={css.loadingText}>Loading...</p>
      )}
    </div>
  );
}
