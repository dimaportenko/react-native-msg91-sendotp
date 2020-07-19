import { NativeModules } from 'react-native';

type Msg91SendotpType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Msg91Sendotp } = NativeModules;

export default Msg91Sendotp as Msg91SendotpType;
