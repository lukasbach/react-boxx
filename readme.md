# react-boxx

## Installation

    yarn add react-boxx

or

    npm i react-boxx

## Simple Example

```typescript jsx
import { Box } from 'react-boxx';

const component = (
  <Box
    as="button"
    backgroundColor="red"
    borderRadius="4px"
    marginBottom="1em"
    hover={{
      color: 'white'
    }}
    focus={{
      color: 'blue'
    }}
    css={{
      '> :last-child': {
        borderBottomLeftRadius: theme.radius,
        borderBottomRightRadius: theme.radius,
      },
      '> :first-child': {
        borderTopLeftRadius: theme.radius,
        borderTopRightRadius: theme.radius,
      },
    }}
  >
    { props.children }
  </Box>
)
```

## Keyboard mode

When wrapped in a ``KeyboardModeProvider``, focused boxes receive ``hover`` styles
if all of the following are true:

- they are focused
- they do not define focus-styles
- the user has recently pressed a key, but not clicked with the mouse

```typescript jsx
import { Box, KeyboardModeProvider } from 'react-boxx';

const component = (
  <KeyboardModeProvider>
    <Box
      as="button"
      hover={{ color: 'red' }}
    >
      I'm a button!
    </Box>  
  </KeyboardModeProvider>
)
```

## Utility components

The following utility components are available:

- ``Flex``
- ``Anchor``
- ``Paragraph``
- ``RightAligned``
- ``LeftAligned``
- ``CenterAligned``
- ``VisuallyHidden``

```typescript jsx
import { Box, KeyboardModeProvider, Flex } from 'react-boxx';

const component = (
  <Flex>
    <Box>Left</Box>
    <Box>Right</Box>
  </Flex>
)
```

## Defining new boxes

A new box can be defined with ``composeBox``:

```typescript jsx
import { composeBox } from 'react-boxx';

const MyAnchor = composeBox({
  as: 'a',
  textDecoration: 'none',
  hover: { textDecoration: 'underline' },
})
```

