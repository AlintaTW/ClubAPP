import React, {FC, memo, useCallback, useState} from 'react';

import NoRegister from './components/NoRegister';
import UpComingEvent from './components/UpComingEvent';
import {View} from 'react-native-ui-lib';

const UpComingEventCard: FC<any> = ({data}: any) => {
  const [isVisiable, setVisiable] = useState(false);
  const onDialog = useCallback(() => {
    setVisiable(!isVisiable);
  }, [isVisiable]);

  return (
    <View>
      <UpComingEvent item={data} onDialog={onDialog} />
      <NoRegister isVisiable={isVisiable} onDialog={onDialog} />
    </View>
  );
};
export default memo<any>(UpComingEventCard);
