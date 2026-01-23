import css from './Filter.module.css';

export default function Filters({
  brands,
  draftBrand,
  draftPrice,
  draftMileage,
  onDraftBrandChange,
  onDraftPriceChange,
  onDraftMileageChange,
  onSearch,
}: FiltersProps) {
  return (
    <section className={css.wrapper}>
    <form
      className={css.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      {/* BRAND */}
      <div className={css.filterGroup}>
        <label>Car brand</label>
        <select
          className={css.select}
          value={draftBrand ?? ''}
          onChange={(e) =>
            onDraftBrandChange(e.target.value || null)
          }
        >
          <option value="">Choose a brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* PRICE */}
      <div className={css.filterGroup}>
        <label>Price/ 1 hour</label>
        <select 
        
          className={css.select}
          value={draftPrice ?? ''}
          onChange={(e) =>
            onDraftPriceChange(
              e.target.value ? Number(e.target.value) : null
            )
          }
        >
          <option value="">Choose a price</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
        </select>
      </div>

      {/* MILEAGE */}
      <div className={css.filterGroup}>
        <label >Сar mileage / km</label>
        <div className={css.mileageInputs}>
          <input
            type="number"
            placeholder="From"
            value={draftMileage?.from ?? ''}
            onChange={(e) =>
              onDraftMileageChange({
                ...draftMileage,
                from: e.target.value ? Number(e.target.value) : null
              })
            }
          />
          <div className={css.mileageSeparator}></div>
          <input
            type="number"
            placeholder="To"
            value={draftMileage?.to ?? ''}
            onChange={(e) =>
              onDraftMileageChange({
                ...draftMileage,
                to: e.target.value ? Number(e.target.value) : null
              })
            }
          />
        </div>
      </div>

      <button className={css.button} type="submit">Search</button>
    </form>
    </section>
  );
}