import css from './LoadMoreButton.module.css';

export default function LoadMoreButton({ onLoadMore, hasMore , loading }) {
  if (!hasMore) return null;

  return (
    <button 
      className={css.button} 
      onClick={onLoadMore} 
      disabled={loading}
    >
      {loading ? 'Load More...' : 'Load More'}
    </button>
  );
}
