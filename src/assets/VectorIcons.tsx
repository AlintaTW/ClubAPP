import React, {FC} from 'react';
import Svg, {Path, G, Circle, Defs, ClipPath, Rect} from 'react-native-svg';

import Colors from './Colors';

interface Props {
  active?: boolean; // only using with icon Home
  color: string;
}

export const IconHome: FC<Props> = ({active, color}) => (
  <Svg width="35" height="20" viewBox="0 0 35 20" fill="none" x={0} y={0}>
    <Path
      d="M16 6.93381C21.28 6.93381 25.6 11.2538 25.6 16.5338H32C32 7.73381 24.8 0.533813 16 0.533813C7.2 0.533813 0 7.73381 0 16.5338H6.4C6.4 11.2538 10.72 6.93381 16 6.93381Z"
      fill={color}
    />
    <Path
      d="M16 13.3338C17.76 13.3338 19.2 14.7738 19.2 16.5338H24C24 12.0538 20.48 8.53381 16 8.53381C11.52 8.53381 8 12.0538 8 16.5338H12.8C12.8 14.7738 14.24 13.3338 16 13.3338Z"
      fill={active ? Colors.orangeCarrot : color}
    />
  </Svg>
);

export const IconHistory: FC<Props> = ({color}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" x={0} y={0}>
    <Path
      d="M20.5452 5.00006H18.7452V3.00006H16.7452V5.00006H6.74524V3.00006H4.74524V5.00006H3.54523C2.64523 5.00006 1.94524 5.70006 1.94524 6.60006V19.4001C1.94524 20.3001 2.64523 21.0001 3.54523 21.0001H20.4452C21.3452 21.0001 22.0452 20.3001 22.0452 19.4001V6.60006C22.1452 5.70006 21.4452 5.00006 20.5452 5.00006ZM20.1452 19.0001H4.14523V11.0001H20.1452V19.0001Z"
      fill={color}
    />
  </Svg>
);

export const IconFavorite: FC<Props> = ({color}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" x={0} y={0}>
    <Path
      d="M12 20.9L10.6 19.6C5.6 15.1 2.3 12.1 2.3 8.40004C2.3 5.40004 4.6 3.10004 7.6 3.10004C9.3 3.10004 12 4.50004 12 6.60004C12 4.60004 14.7 3.10004 16.4 3.10004C19.4 3.10004 21.7 5.40004 21.7 8.40004C21.7 12.1 18.4 15.1 13.4 19.6L12 20.9Z"
      fill={color}
    />
  </Svg>
);

export const IconNotifications: FC<Props> = ({color}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" x={0} y={0}>
    <Path
      d="M17 10.55C19.2091 10.55 21 8.75919 21 6.55005C21 4.34091 19.2091 2.55005 17 2.55005C14.7909 2.55005 13 4.34091 13 6.55005C13 8.75919 14.7909 10.55 17 10.55Z"
      fill={Colors.readAlizarin}
    />
    <Path
      d="M17 12.55C13.7 12.55 11 9.85005 11 6.55005C11 5.85005 11.1 5.15005 11.3 4.55005C11.2 4.55005 11.1 4.55005 11 4.55005C7.8 4.55005 5.2 7.05005 5 10.25V17.55H3V19.55H9C9.1 20.65 9.9 21.4501 11 21.4501C12.1 21.4501 12.9 20.65 13 19.55H19V17.55H17V12.55Z"
      fill={color}
    />
  </Svg>
);

export const IconProfile: FC<Props> = ({color}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" x={0} y={0}>
    <G clip-path="url(#clip0)">
      <Path
        d="M12 16.0001C15.3 16.0001 18 18.7001 18 22.0001H22C22 16.5001 17.5 12.0001 12 12.0001C6.5 12.0001 2 16.5001 2 22.0001H6C6 18.7001 8.6 16.0001 12 16.0001Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7323 2.3936C13.2081 2.14138 12.6206 2.00006 12 2.00006C9.79086 2.00006 8 3.79092 8 6.00006C8 8.2092 9.79086 10.0001 12 10.0001C13.0942 10.0001 14.0858 9.5607 14.808 8.84876C13.7034 7.93162 13 6.54798 13 5.00006C13 4.04505 13.2677 3.15257 13.7323 2.3936Z"
        fill={color}
      />
      <Circle cx="18" cy="4.96002" r="4" fill={Colors.readAlizarin} />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
