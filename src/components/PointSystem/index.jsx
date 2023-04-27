import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import Tab5 from './Tabs/tab5';


const PointSystem = () => {
  return (
    <>
      <Tabs isFitted variant='enclosed'>
          <TabList bg={'#5925d3'} color={'white'}>
            <Tab _selected={{ color: 'black', bg: 'white'}}>100 BALL</Tab>
            <Tab _selected={{ color: 'black', bg: 'white'}}>T10</Tab>
            <Tab _selected={{ color: 'black', bg: 'white'}}>T20</Tab>
            <Tab _selected={{ color: 'black', bg: 'white'}}>ODI</Tab>
            <Tab _selected={{ color: 'black', bg: 'white'}}>TEST</Tab>
          </TabList>

        <TabPanels>
          <TabPanel><Tab1 /></TabPanel>
          <TabPanel><Tab2 /></TabPanel>
          <TabPanel><Tab3 /></TabPanel>
          <TabPanel><Tab4 /></TabPanel>
          <TabPanel><Tab5 /></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default PointSystem