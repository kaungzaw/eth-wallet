import React, { useCallback } from 'react';
import { ScrollView, RefreshControl, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card, Subheading, Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { requested, reset, selectBalance } from '@/Redux/Slices/Balance';
import BigNumber from 'bignumber.js';
import { address } from '@/Constants';
import { CommonStyle } from '@/Styles';

export default function HomeScreen() {
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(requested());

      return () => {
        dispatch(reset());
      };
    }, [])
  );

  const onRefresh = useCallback(() => {
    dispatch(requested());
  }, []);

  return (
    <ScrollView
      style={CommonStyle.fill}
      refreshControl={
        <RefreshControl refreshing={balance.isLoading} onRefresh={onRefresh} />
      }
    >
      {balance.error ? (
        <Text>{balance.error}</Text>
      ) : (
        balance.data && (
          <>
            <Card>
              <Card.Title title="ETH Wallet" />
              <Card.Content>
                <Subheading>Address</Subheading>
                <Text>{address}</Text>
                <Subheading>Balance</Subheading>
                <Text>{balance.data.result} Wei</Text>
                <Text>
                  {new BigNumber(balance.data.result)
                    .dividedBy(new BigNumber(1e18))
                    .toString()}{' '}
                  Ether
                </Text>
              </Card.Content>
            </Card>
            <View style={[CommonStyle.center, { paddingVertical: 10 }]}>
              <Text>Pull down to Refresh</Text>
            </View>
          </>
        )
      )}
    </ScrollView>
  );
}
