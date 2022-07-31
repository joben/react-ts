import 
{ 
  Button, 
  Flex, 
  Text, 
  View, 
  Menu, 
  MenuItem, 
  Divider
} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';

function Header() {
  return (
      <View 
        as="header"
        padding="1rem"
        height="4rem"
        maxWidth="100%"
        border="1px solid var(--amplify-colors-black)"
      >
      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="2.5rem"
      >
        <Menu
          menuAlign="start"
        >
          <MenuItem onClick={() => alert('Download')}>
            Download
          </MenuItem>
          <MenuItem onClick={() => alert('Create a Copy')}>
            Create a Copy
          </MenuItem>
          <MenuItem onClick={() => alert('Mark as Draft')}>
            Mark as Draft
          </MenuItem>
          <Divider />
          <MenuItem isDisabled onClick={() => alert('Delete')}>
            Delete
          </MenuItem>
          <MenuItem onClick={() => alert('Attend a workshop')}>
            Attend a workshop
          </MenuItem>
        </Menu>
        <Text 
          fontSize="1.25em"
        >
          Dashboard
        </Text>
        <Button
          position="absolute"
          right="0.5rem"
          top="0.5rem"
        >
          Sign Out
        </Button>
        </Flex>
      </View>
  );
}

export default Header;