import { Flex, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { If } from '~/components';
import { useColorValue } from '~/context';
import { useBooleanValue } from '~/hooks';

import { TField } from './types';

export const FormField = (props: TField) => {
  const { label, name, error, hiddenLabels, labelAddOn, fieldAddOn, children, ...rest } = props;
  const labelColor = useColorValue('blackAlpha.700', 'whiteAlpha.700');
  const opacity = useBooleanValue(hiddenLabels, 0, undefined);
  return (
    <FormControl
      mx={2}
      d="flex"
      w="100%"
      maxW="100%"
      flexDir="column"
      my={{ base: 2, lg: 4 }}
      isInvalid={typeof error !== 'undefined'}
      flex={{ base: '1 0 100%', lg: '1 0 33.33%' }}
      {...rest}>
      <FormLabel
        pl={1}
        pr={0}
        htmlFor={name}
        display="flex"
        opacity={opacity}
        color={labelColor}
        alignItems="center"
        justifyContent="space-between">
        {label}
        <If c={typeof labelAddOn !== 'undefined'}>{labelAddOn}</If>
      </FormLabel>
      {children}
      <If c={typeof fieldAddOn !== 'undefined'}>
        <Flex justify="flex-end" pt={3}>
          {fieldAddOn}
        </Flex>
      </If>
      <FormErrorMessage opacity={opacity}>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
