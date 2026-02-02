import { StylesConfig, GroupBase } from 'react-select';

export interface BrandOption {
  value: string;
  label: string;
}

export interface PriceOption {
  value: number;
  label: string;
}

function createStyles<T extends BrandOption | PriceOption>(): StylesConfig<T, false, GroupBase<T>> {
  return {
    control: (base) => ({
      ...base,
      backgroundColor: '#F7F7FB',
      borderRadius: '14px',
      border: 'none',
      boxShadow: 'none',
      width: '200px',
      height: '48px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '500',
      flexWrap: 'nowrap',
      '&:hover': {
        border: 'none',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 18px',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#858585ff',
      margin: 0,
      fontSize: '15px',
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: '#121417',
      padding: '0 18px 0 0',
      transition: 'transform 0.2s',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      '&:hover': {
        color: '#121417',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#ffffffff',
      borderRadius: '14px',
      marginTop: '4px',
      padding: '14px 8px',
      border: '1px solid rgba(18, 20, 23, 0.05)',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      zIndex: 100,
    }),
    menuList: (base) => ({
      ...base,
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(18, 20, 23, 0.05)',
        borderRadius: '10px',
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: 'transparent',
      color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      padding: '8px 10px',
      '&:active': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        color: '#121417',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#121417',
      margin: 0,
    }),
  } as StylesConfig<T, false, GroupBase<T>>;
}

export function getBrandStyles(): StylesConfig<BrandOption, false, GroupBase<BrandOption>> {
  return {
    ...createStyles<BrandOption>(),
    control: (base, state) => ({
      ...createStyles<BrandOption>().control!(base, state),
      width: '204px',
    }),
  };
}

export function getPriceStyles(): StylesConfig<PriceOption, false, GroupBase<PriceOption>> {
  return createStyles<PriceOption>();
}