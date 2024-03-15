import style from "./currency.module.scss";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

interface ICurrencyProps {
  name: string;
  Icon: React.ComponentType<SvgIconProps>;
}

const Currency = ({ currencyType }: { currencyType: ICurrencyProps[] }) => (
  <ul className={style.currency}>
    {currencyType.map(({ name, Icon }, index) => {
      return (
        <li key={index} className={style.currencyItem}>
          <Icon />
          <span>{name}</span>
        </li>
      );
    })}
  </ul>
);

export default Currency;
