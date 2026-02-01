'use client';

import css from './Filter.module.css';
import Select from 'react-select';
import { BrandOption, PriceOption, getBrandStyles, getPriceStyles } from '../../lib/SelectStyles';
import  {FiltersProps}  from '@/lib/types';
 

export default function Filters({
  brands,
  draftBrand,
  draftPrice,
  draftMileage,
  onDraftBrandChange,
  onDraftPriceChange,
  onDraftMileageChange,
  onSearch,
}:FiltersProps) {

 const priceOptions: PriceOption[] = [30, 40, 50, 60, 70, 80].map(p => ({ value: p, label: `${p}` }));

const brandOptions: BrandOption[] = brands.map(brand => ({
  value: brand,
  label: brand,
}));
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
  <label className={css.label}>Car brand</label>
  <Select<BrandOption>
    instanceId="brand-select"
  isClearable={true}
  options={brandOptions}
  placeholder="Choose a brand"
  styles={getBrandStyles()}
  components={{ IndicatorSeparator: () => null }}
  value={brandOptions.find(opt => opt.value === draftBrand) || null}
  onChange={(option) => onDraftBrandChange(option?.value || null)}
/>
</div>
      {/* PRICE */}
<div className={css.filterGroup}>
  <label className={css.label}>Price/ 1 hour</label>
  <Select<PriceOption>
    instanceId="price-select"
    isClearable={true}
    options={priceOptions}
    styles={getPriceStyles()}
    placeholder="Choose a price"
    formatOptionLabel={({ label }, { context }) => 
      context === 'value' ? `To ${label}$` : label
    }
    onChange={(option) => onDraftPriceChange(option ? Number(option.value) : null)}
  value={priceOptions.find(opt => opt.value === draftPrice) || null}
  />
</div>
      {/* MILEAGE */}
<div className={css.filterGroup}>
  <label className={css.label}>Car mileage / km</label>
  <div className={css.mileageInputs}>
    <input
      type="number"
      placeholder="From"
      value={draftMileage.from ?? ''}
      onChange={(e) =>
        onDraftMileageChange({
          from: e.target.value ? Number(e.target.value) : null,
          to: draftMileage.to,
        })
      }
    />
    <div className={css.mileageSeparator} />
    <input
      type="number"
      placeholder="To"
      value={draftMileage.to ?? ''}
      onChange={(e) =>
        onDraftMileageChange({
          from: draftMileage.from,
          to: e.target.value ? Number(e.target.value) : null,
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