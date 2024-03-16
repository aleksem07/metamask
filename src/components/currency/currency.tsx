import style from "./currency.module.scss";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ICurrencyProps {
  name: string;
  Icon: React.ComponentType<SvgIconProps>;
}

const Currency = ({
  currencyType,
  className,
}: {
  currencyType: ICurrencyProps[];
  className?: string;
}) => (
  <ul className={`${style.currency} ${className ? className : ""}`}>
    {currencyType.map(({ name, Icon }) => {
      return (
        <li key={uuidv4()}>
          <button className={style.currencyItem}>
            <Icon fontSize="small" />
            {name}
          </button>
        </li>
      );
    })}
  </ul>
);

export default Currency;
